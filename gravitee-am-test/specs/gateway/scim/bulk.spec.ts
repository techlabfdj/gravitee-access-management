/*
 * Copyright (C) 2015 The Gravitee team (http://gravitee.io)
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *         http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

import { afterAll, beforeAll, describe, expect, jest } from '@jest/globals';
import { requestAdminAccessToken } from '@management-commands/token-management-commands';
import { Domain } from '@management-models/Domain';
import { Application } from '@management-models/Application';
import { createDomain, deleteDomain, patchDomain, startDomain, waitForDomainSync } from '@management-commands/domain-management-commands';
import { createApplication, updateApplication } from '@management-commands/application-management-commands';
import { BulkRequest } from '../../../api/gateway/models/scim/BulkRequest/BulkRequest';
import { getWellKnownOpenIdConfiguration, performGet, performPost } from '@gateway-commands/oauth-oidc-commands';
import { applicationBase64Token } from '@gateway-commands/utils';
import { BulkOperation } from '../../../api/gateway/models/scim/BulkRequest/BulkOperation';
import { BulkResponse } from '../../../api/gateway/models/scim/BulkRequest/BulkResponse';
import { Error } from '../../../api/gateway/models/scim/BulkRequest/Error';
import { random } from 'faker';

let mngAccessToken: string;
let scimAccessToken: string;
let domain: Domain;
let scimClient: Application;
let scimEndpoint: string;

jest.setTimeout(200000);

beforeAll(async function () {
  const adminTokenResponse = await requestAdminAccessToken();
  mngAccessToken = adminTokenResponse.body.access_token;
  expect(mngAccessToken).toBeDefined();

  domain = await createDomain(mngAccessToken, 'bulk-scim', 'Domain used to test Bulk SCIM requests');
  expect(domain).toBeDefined();

  // enable SCIM
  await patchDomain(domain.id, mngAccessToken, {
    scim: {
      enabled: true,
      idpSelectionEnabled: false,
    },
  });

  const applicationDefinition: Application = {
    name: 'SCIM App',
    type: 'SERVICE',
    settings: {
      oauth: {
        grantTypes: ['client_credentials'],
        scopeSettings: [
          {
            scope: 'scim',
            defaultScope: true,
          },
        ],
      },
    },
  };

  scimClient = await createApplication(domain.id, mngAccessToken, applicationDefinition);
  expect(scimClient).toBeDefined();
  // we need to call update app as the CREATE order is not taking the scope settings into account
  // NOTE: we do not override the scimClient to keep reference of the clientSecret
  await updateApplication(domain.id, mngAccessToken, applicationDefinition, scimClient.id);

  await startDomain(domain.id, mngAccessToken);

  await waitForDomainSync();
  const openIdConfiguration = await getWellKnownOpenIdConfiguration(domain.hrid);

  // generate SCIM access token
  const response = await performPost(openIdConfiguration.body.token_endpoint, '', 'grant_type=client_credentials', {
    'Content-type': 'application/x-www-form-urlencoded',
    Authorization: 'Basic ' + applicationBase64Token(scimClient),
  });
  scimAccessToken = response.body.access_token;
  scimEndpoint = process.env.AM_GATEWAY_URL + `/${domain.hrid}/scim`;
});

afterAll(async function () {
  if (domain) {
    await deleteDomain(domain.id, mngAccessToken);
  }
});

describe('SCIM Bulk endpoint', () => {
  it('should reject request with invalid schema', async () => {
    const operation: BulkOperation = {
      method: 'POST',
      path: '/Users',
      data: {},
    };

    const request: BulkRequest = {
      schemas: ['unknown'],
      Operations: [operation],
    };

    const scimResponse = await performPost(scimEndpoint, '/Bulk', JSON.stringify(request), {
      'Content-type': 'application/json',
      Authorization: `Bearer ${scimAccessToken}`,
    }).expect(400);

    const scimError: Error = scimResponse.body;
    assertExpectedError(scimError, '400', 'invalidSyntax');
  });

  it('should reject request with too many operation', async () => {
    const operation: BulkOperation = {
      method: 'POST',
      path: '/Users',
      bulkId: random.word(),
      data: {},
    };

    const request: BulkRequest = {
      schemas: ['urn:ietf:params:scim:api:messages:2.0:BulkRequest'],
      Operations: Array.from({ length: 1001 }, (v, i) => operation),
    };

    const scimResponse = await performPost(scimEndpoint, '/Bulk', JSON.stringify(request), {
      'Content-type': 'application/json',
      Authorization: `Bearer ${scimAccessToken}`,
    }).expect(413);

    const scimError: Error = scimResponse.body;
    assertExpectedError(scimError, '413', null);
  });

  it('should accept request with 3 user creations (two success, one failure)', async () => {
    const operation1: BulkOperation = {
      method: 'POST',
      path: '/Users',
      bulkId: random.word(),
      data: {
        schemas: ['urn:ietf:params:scim:schemas:core:2.0:User'],
        userName: 'user01',
      },
    };
    const operation2: BulkOperation = {
      method: 'POST',
      path: '/Users',
      bulkId: random.word(),
      data: {
        schemas: ['urn:ietf:params:scim:schemas:core:2.0:User'],
        userName: 'user01',
      },
    };
    const operation3: BulkOperation = {
      method: 'POST',
      path: '/Users',
      bulkId: random.word(),
      data: {
        schemas: ['urn:ietf:params:scim:schemas:core:2.0:User'],
        userName: 'user02',
      },
    };

    const request: BulkRequest = {
      schemas: ['urn:ietf:params:scim:api:messages:2.0:BulkRequest'],
      Operations: [operation1, operation2, operation3],
    };

    const scimResponse = await performPost(scimEndpoint, '/Bulk', JSON.stringify(request), {
      'Content-type': 'application/json',
      Authorization: `Bearer ${scimAccessToken}`,
    }).expect(200);

    const bulkResponse: BulkResponse = scimResponse.body;
    expect(bulkResponse.Operations).toHaveLength(3);
    const firstOp = bulkResponse.Operations[0];
    expect(firstOp.bulkId).toBeDefined();
    expect(firstOp.bulkId).toEqual(operation1.bulkId);
    expect(firstOp.status).toEqual('201');
    expect(firstOp.location).toBeDefined();
    expect(firstOp.location).toContain(scimEndpoint + '/Users/');

    const secondOp = bulkResponse.Operations[1];
    expect(secondOp.bulkId).toBeDefined();
    expect(secondOp.bulkId).toEqual(operation2.bulkId);
    expect(secondOp.status).toEqual('409');
    expect(secondOp.location).toBeUndefined();
    expect(secondOp.response).toBeDefined();
    expect(secondOp.response.status).toEqual('409');

    const thirdOp = bulkResponse.Operations[2];
    expect(thirdOp.bulkId).toBeDefined();
    expect(thirdOp.bulkId).toEqual(operation3.bulkId);
    expect(thirdOp.status).toEqual('201');
    expect(thirdOp.location).toBeDefined();
    expect(thirdOp.location).toMatch(scimEndpoint + '/Users/');
  });

  it('should accept request with update user', async () => {
    const userLocation = await createRandomUser();
    const user = await readScimUserProfile(userLocation);

    const changedUser = { ...user };
    changedUser['profileUrl'] = 'https://me';
    changedUser['emails'] = [
      {
        value: user['username'] + '@noware.com',
        type: 'home',
        primary: true,
      },
    ];

    const updateOp: BulkOperation = {
      method: 'PUT',
      path: '/Users/' + userLocation.substring(userLocation.lastIndexOf('/') + 1),
      bulkId: random.word(),
      data: changedUser,
    };

    const updateRequest: BulkRequest = {
      schemas: ['urn:ietf:params:scim:api:messages:2.0:BulkRequest'],
      Operations: [updateOp],
    };

    const scimResponse = await performPost(scimEndpoint, '/Bulk', JSON.stringify(updateRequest), {
      'Content-type': 'application/json',
      Authorization: `Bearer ${scimAccessToken}`,
    }).expect(200);

    const bulkResponse: BulkResponse = scimResponse.body;
    expect(bulkResponse.Operations).toHaveLength(1);
    const op = bulkResponse.Operations[0];
    expect(op.bulkId).toBeDefined();
    expect(op.bulkId).toEqual(updateOp.bulkId);
    expect(op.status).toEqual('200');
    expect(op.location).toBeDefined();
    expect(op.location).toEqual(userLocation);

    const updatedUser = await readScimUserProfile(userLocation);
    expect(updatedUser.profileUrl).toBeDefined();
    expect(updatedUser.emails).toBeDefined();
    expect(updatedUser.emails).toHaveLength(1);
    expect(updatedUser.emails[0].value).toEqual(user['username'] + '@noware.com');
  });

  it('should reject update if user is unknown', async () => {
    const updateOp: BulkOperation = {
      method: 'PUT',
      path: '/Users/' + random.word(),
      bulkId: random.word(),
      data: {
        schemas: ['urn:ietf:params:scim:schemas:core:2.0:User'],
        userName: random.word(),
      },
    };

    const updateRequest: BulkRequest = {
      schemas: ['urn:ietf:params:scim:api:messages:2.0:BulkRequest'],
      Operations: [updateOp],
    };

    const scimResponse = await performPost(scimEndpoint, '/Bulk', JSON.stringify(updateRequest), {
      'Content-type': 'application/json',
      Authorization: `Bearer ${scimAccessToken}`,
    }).expect(200);

    const bulkResponse: BulkResponse = scimResponse.body;
    expect(bulkResponse.Operations).toHaveLength(1);
    const op = bulkResponse.Operations[0];
    expect(op.bulkId).toBeDefined();
    expect(op.bulkId).toEqual(updateOp.bulkId);
    expect(op.status).toEqual('404');
    expect(op.location).toBeUndefined();
  });
});

it('should accept request with patch user', async () => {
  const userLocation = await createRandomUser();
  const user = await readScimUserProfile(userLocation);

  const patchOp: BulkOperation = {
    method: 'PATCH',
    path: '/Users/' + user.id,
    bulkId: random.word(),
    data: {
      schemas: ['urn:ietf:params:scim:api:messages:2.0:PatchOp'],
      Operations: [
        {
          op: 'add',
          path: 'emails',
          value: [
            {
              value: user['username'] + '@noware.com',
              type: 'home',
              primary: true,
            },
          ],
        },
        {
          op: 'add',
          path: 'profileUrl',
          value: 'https://my.picture.xyz/me',
        },
      ],
    },
  };

  const patchRequest: BulkRequest = {
    schemas: ['urn:ietf:params:scim:api:messages:2.0:BulkRequest'],
    Operations: [patchOp],
  };

  const scimResponse = await performPost(scimEndpoint, '/Bulk', JSON.stringify(patchRequest), {
    'Content-type': 'application/json',
    Authorization: `Bearer ${scimAccessToken}`,
  }).expect(200);

  const bulkResponse: BulkResponse = scimResponse.body;
  expect(bulkResponse.Operations).toHaveLength(1);
  const op = bulkResponse.Operations[0];
  expect(op.bulkId).toBeDefined();
  expect(op.bulkId).toEqual(patchOp.bulkId);
  expect(op.status).toEqual('200');
  expect(op.location).toBeDefined();
  expect(op.location).toEqual(userLocation);

  const updatedUser = await readScimUserProfile(userLocation);
  expect(updatedUser.profileUrl).toBeDefined();
  expect(updatedUser.emails).toBeDefined();
  expect(updatedUser.emails).toHaveLength(1);
  expect(updatedUser.emails[0].value).toEqual(user['username'] + '@noware.com');
});

it('should reject patch if user is unknown', async () => {
  const patchOp: BulkOperation = {
    method: 'PATCH',
    path: '/Users/' + random.word(),
    bulkId: random.word(),
    data: {
      schemas: ['urn:ietf:params:scim:api:messages:2.0:PatchOp'],
      Operations: [
        {
          op: 'replace',
          path: 'displayName',
          value: 'replacedDisplayname',
        },
        {
          op: 'add',
          path: 'profileUrl',
          value: 'https://my.picture.xyz/me',
        },
      ],
    },
  };

  const patchRequest: BulkRequest = {
    schemas: ['urn:ietf:params:scim:api:messages:2.0:BulkRequest'],
    Operations: [patchOp],
  };

  const scimResponse = await performPost(scimEndpoint, '/Bulk', JSON.stringify(patchRequest), {
    'Content-type': 'application/json',
    Authorization: `Bearer ${scimAccessToken}`,
  }).expect(200);

  const bulkResponse: BulkResponse = scimResponse.body;
  expect(bulkResponse.Operations).toHaveLength(1);
  const op = bulkResponse.Operations[0];
  expect(op.bulkId).toBeDefined();
  expect(op.bulkId).toEqual(patchOp.bulkId);
  expect(op.status).toEqual('404');
  expect(op.location).toBeUndefined();
});

it('should reject delete if user is unknown', async () => {
  const deleteOp: BulkOperation = {
    method: 'DELETE',
    path: '/Users/' + random.word(),
    bulkId: random.word(),
  };

  const deleteRequest: BulkRequest = {
    schemas: ['urn:ietf:params:scim:api:messages:2.0:BulkRequest'],
    Operations: [deleteOp],
  };

  const scimResponse = await performPost(scimEndpoint, '/Bulk', JSON.stringify(deleteRequest), {
    'Content-type': 'application/json',
    Authorization: `Bearer ${scimAccessToken}`,
  }).expect(200);

  const bulkResponse: BulkResponse = scimResponse.body;
  expect(bulkResponse.Operations).toHaveLength(1);
  const op = bulkResponse.Operations[0];
  expect(op.bulkId).toBeDefined();
  expect(op.bulkId).toEqual(deleteOp.bulkId);
  expect(op.status).toEqual('404');
  expect(op.location).toBeUndefined();
});

it('should accept request with delete user', async () => {
  const userLocation = await createRandomUser();
  const user = await readScimUserProfile(userLocation);

  const deleteOp: BulkOperation = {
    method: 'DELETE',
    path: '/Users/' + user.id,
  };

  const deleteRequest: BulkRequest = {
    schemas: ['urn:ietf:params:scim:api:messages:2.0:BulkRequest'],
    Operations: [deleteOp],
  };

  const scimResponse = await performPost(scimEndpoint, '/Bulk', JSON.stringify(deleteRequest), {
    'Content-type': 'application/json',
    Authorization: `Bearer ${scimAccessToken}`,
  }).expect(200);

  const bulkResponse: BulkResponse = scimResponse.body;
  expect(bulkResponse.Operations).toHaveLength(1);
  const op = bulkResponse.Operations[0];
  expect(op.bulkId).toBeUndefined();
  expect(op.status).toEqual('204');
  expect(op.location).toBeDefined();
  expect(op.location).toEqual(userLocation);

  await performGet(userLocation, '', {
    Authorization: `Bearer ${scimAccessToken}`,
  }).expect(404);
});

function assertExpectedError(scimError: Error, status: string, scimType: string) {
  expect(scimError).toBeDefined();
  expect(scimError.schemas).toBeDefined();
  expect(scimError.detail).toBeDefined();
  expect(scimError.status).toEqual(status);
  if (scimType) {
    expect(scimError.scimType).toEqual(scimType);
  }
}

async function readScimUserProfile(userLocation: string) {
  const getUser = await performGet(userLocation, '', {
    Authorization: `Bearer ${scimAccessToken}`,
  }).expect(200);
  return getUser.body;
}

async function createRandomUser() {
  const createOp: BulkOperation = {
    method: 'POST',
    path: '/Users',
    bulkId: random.word(),
    data: {
      schemas: ['urn:ietf:params:scim:schemas:core:2.0:User'],
      userName: random.word(),
    },
  };

  const request: BulkRequest = {
    schemas: ['urn:ietf:params:scim:api:messages:2.0:BulkRequest'],
    Operations: [createOp],
  };

  const scimResponse = await performPost(scimEndpoint, '/Bulk', JSON.stringify(request), {
    'Content-type': 'application/json',
    Authorization: `Bearer ${scimAccessToken}`,
  }).expect(200);

  const bulkResponse: BulkResponse = scimResponse.body;
  expect(bulkResponse.Operations).toHaveLength(1);

  return bulkResponse.Operations[0].location;
}
