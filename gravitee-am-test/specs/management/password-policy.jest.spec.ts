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
import fetch from 'cross-fetch';
import * as faker from 'faker';
import { afterAll, beforeAll, expect } from '@jest/globals';
import { requestAdminAccessToken } from '@management-commands/token-management-commands';
import { createDomain, deleteDomain, startDomain } from '@management-commands/domain-management-commands';
import { createIdp } from '@management-commands/idp-management-commands';
import {
  createPasswordPolicy,
  deletePasswordPolicy,
  getAllPasswordPolicies,
  getAllPasswordPoliciesRaw,
  getPasswordPolicy,
  getPasswordPolicyRaw,
  setPasswordPolicyDefault, updatePasswordPolicy,
} from '@management-commands/password-policy-management-commands';

global.fetch = fetch;

let accessToken;
let domain;

beforeAll(async () => {
  const adminTokenResponse = await requestAdminAccessToken();
  accessToken = adminTokenResponse.body.access_token;
  expect(accessToken).toBeDefined();

  const createdDomain = await createDomain(accessToken, 'domain-idp', faker.company.catchPhraseDescriptor());
  expect(createdDomain).toBeDefined();
  expect(createdDomain.id).toBeDefined();

  const domainStarted = await startDomain(createdDomain.id, accessToken);
  expect(domainStarted).toBeDefined();
  expect(domainStarted.id).toEqual(createdDomain.id);

  domain = domainStarted;
});

describe('password policy management', () => {
  it('must return no password policy', async () => {
    const passwordPolicies = await getAllPasswordPoliciesRaw(domain.id, accessToken);
    expect(passwordPolicies.raw.status).toEqual(204);
  });

  it('must create password policy', async () => {
    const name = 'default';
    const passwordPolicy = await createPasswordPolicy(domain.id, accessToken, {
      name: name,
    });
    expect(passwordPolicy).toBeDefined();
    expect(passwordPolicy.id).toEqual(passwordPolicy.id);
    expect(passwordPolicy.defaultPolicy).toBeTruthy();

    const policy = await getPasswordPolicy(domain.id, accessToken, passwordPolicy.id);
    expect(policy).toBeDefined();
    expect(passwordPolicy.name).toEqual(name);
    expect(policy.defaultPolicy).toBeTruthy();
  });

  it('must update password policy', async () => {
    const oldPasswordPolicy = await createPasswordPolicy(domain.id, accessToken, {
      name: 'new',
    });
    const updatedName = 'updated-new';
    const updatedPasswordPolicy = await updatePasswordPolicy(domain.id, accessToken, oldPasswordPolicy.id, {
      name: updatedName,
      defaultPolicy: true,
    });
    expect(updatedPasswordPolicy).toBeDefined();
    expect(updatedPasswordPolicy.name).toEqual(updatedName);
    expect(updatedPasswordPolicy.defaultPolicy).toBeTruthy();

    const policy = await getPasswordPolicy(domain.id, accessToken, updatedPasswordPolicy.id);
    expect(policy).toBeDefined();
    expect(updatedPasswordPolicy.name).toEqual(updatedName);
    expect(policy.defaultPolicy).toBeTruthy();
  });

  it('must find all password policies', async () => {
    const idpSet = await getAllPasswordPolicies(domain.id, accessToken);
    expect(idpSet.length).toBeGreaterThan(0);
  });

  it('must delete password policy', async () => {
    const passwordPolicy = await createPasswordPolicy(domain.id, accessToken, {
      name: 'policy-to-delete',
    });
    await deletePasswordPolicy(domain.id, accessToken, passwordPolicy.id);
    await expect(async () => {
      const response = await getPasswordPolicyRaw(domain.id, accessToken, passwordPolicy.id);
      expect(response.raw.status).toEqual(404);
    }).rejects.toThrow();
  });

  it('must not delete password policy when not found', async () => {
    await expect(async () => {
      const response = await deletePasswordPolicy('not-found-id', accessToken, 'not-found-id');
      expect(response.raw.status).toEqual(204);
    }).rejects.toThrow();
  });

  it('must set default password policy', async () => {
    const policy = await createPasswordPolicy(domain.id, accessToken, {
      name: 'default-to-assign',
    });
    await createIdp(domain.id, accessToken, getIdp());
    await setPasswordPolicyDefault(domain.id, accessToken, policy.id);

    const updatedPolicy = await getPasswordPolicy(domain.id, accessToken, policy.id);
    expect(updatedPolicy).toBeDefined();
    expect(updatedPolicy.defaultPolicy).toBeTruthy();
  });

  it('must update default password policy from removed to oldest one in identity provider', async () => {
    const oldPasswordPolicies = await getAllPasswordPolicies(domain.id, accessToken);
    for (const p of oldPasswordPolicies) {
      await deletePasswordPolicy(domain.id, accessToken, p.id);
    }
    const oldPolicy = await createPasswordPolicy(domain.id, accessToken, {
      name: 'old-policy',
    });
    const newPolicy1 = await createPasswordPolicy(domain.id, accessToken, {
      name: 'new-1',
    });
    const newPolicy2 = await createPasswordPolicy(domain.id, accessToken, {
      name: 'new-2',
    });
    const passwordPolicies = await getAllPasswordPolicies(domain.id, accessToken);
    expect(passwordPolicies.length).toEqual(3);
    await createIdp(domain.id, accessToken, getIdp());
    await setPasswordPolicyDefault(domain.id, accessToken, newPolicy1.id);
    const updatedDefaultPolicy = await getPasswordPolicy(domain.id, accessToken, newPolicy1.id);
    expect(updatedDefaultPolicy).toBeDefined();
    expect(updatedDefaultPolicy.defaultPolicy).toBeTruthy();
    await deletePasswordPolicy(domain.id, accessToken, newPolicy1.id);

    const updatedPolicy = await getPasswordPolicy(domain.id, accessToken, oldPolicy.id);
    expect(updatedPolicy).toBeDefined();
    expect(updatedPolicy.defaultPolicy).toBeTruthy();
    const new2Policy = await getPasswordPolicy(domain.id, accessToken, newPolicy2.id);
    expect(new2Policy).toBeDefined();
    expect(new2Policy.defaultPolicy).toBeFalsy();
  });
});

afterAll(async () => {
  if (domain && domain.id) {
    await deleteDomain(domain.id, accessToken);
  }
});

function getIdp() {
  return {
    external: false,
    type: 'inline-am-idp',
    domainWhitelist: ['gmail.com', 'hotmail.com'],
    configuration: `${JSON.stringify({
      users: [
        {
          firstname: 'firstname',
          lastname: 'lastname',
          username: 'user',
          email: `firstname.lastname@mail.com`,
          password: '#CoMpL3X-P@SsW0Rd',
        },
      ],
    })}`,
    name: 'inmemory',
  };
}
