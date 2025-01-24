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
/* Gravitee.io - Access Management API
 * No description provided (generated by Openapi Generator https://github.com/openapitools/openapi-generator)
 *
 *
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

/* tslint:disable */
/* eslint-disable */
import {
  BulkCreateOrganizationUser,
  BulkCreateOrganizationUserFromJSON,
  BulkCreateOrganizationUserFromJSONTyped,
  BulkCreateOrganizationUserToJSON,
} from './BulkCreateOrganizationUser';
import { BulkDeleteUser, BulkDeleteUserFromJSON, BulkDeleteUserFromJSONTyped, BulkDeleteUserToJSON } from './BulkDeleteUser';
import { BulkUpdateUser, BulkUpdateUserFromJSON, BulkUpdateUserFromJSONTyped, BulkUpdateUserToJSON } from './BulkUpdateUser';

/**
 * @type OrganizationUserBulkRequest
 *
 * @export
 */
export type OrganizationUserBulkRequest =
  | ({ action: 'BulkCreateOrganizationUser' } & BulkCreateOrganizationUser)
  | ({ action: 'BulkDeleteUser' } & BulkDeleteUser)
  | ({ action: 'BulkUpdateUser' } & BulkUpdateUser)
  | ({ action: 'CREATE' } & BulkCreateOrganizationUser)
  | ({ action: 'DELETE' } & BulkDeleteUser)
  | ({ action: 'UPDATE' } & BulkUpdateUser);

export function OrganizationUserBulkRequestFromJSON(json: any): OrganizationUserBulkRequest {
  return OrganizationUserBulkRequestFromJSONTyped(json, false);
}

export function OrganizationUserBulkRequestFromJSONTyped(json: any, ignoreDiscriminator: boolean): OrganizationUserBulkRequest {
  if (json === undefined || json === null) {
    return json;
  }
  switch (json['action']) {
    case 'BulkCreateOrganizationUser':
      return { ...BulkCreateOrganizationUserFromJSONTyped(json, true), action: 'BulkCreateOrganizationUser' };
    case 'BulkDeleteUser':
      return { ...BulkDeleteUserFromJSONTyped(json, true), action: 'BulkDeleteUser' };
    case 'BulkUpdateUser':
      return { ...BulkUpdateUserFromJSONTyped(json, true), action: 'BulkUpdateUser' };
    case 'CREATE':
      return { ...BulkCreateOrganizationUserFromJSONTyped(json, true), action: 'CREATE' };
    case 'DELETE':
      return { ...BulkDeleteUserFromJSONTyped(json, true), action: 'DELETE' };
    case 'UPDATE':
      return { ...BulkUpdateUserFromJSONTyped(json, true), action: 'UPDATE' };
    default:
      throw new Error(`No variant of OrganizationUserBulkRequest exists with 'action=${json['action']}'`);
  }
}

export function OrganizationUserBulkRequestToJSON(value?: OrganizationUserBulkRequest | null): any {
  if (value === undefined) {
    return undefined;
  }
  if (value === null) {
    return null;
  }
  switch (value['action']) {
    case 'BulkCreateOrganizationUser':
      return BulkCreateOrganizationUserToJSON(value);
    case 'BulkDeleteUser':
      return BulkDeleteUserToJSON(value);
    case 'BulkUpdateUser':
      return BulkUpdateUserToJSON(value);
    case 'CREATE':
      return BulkCreateOrganizationUserToJSON(value);
    case 'DELETE':
      return BulkDeleteUserToJSON(value);
    case 'UPDATE':
      return BulkUpdateUserToJSON(value);
    default:
      throw new Error(`No variant of OrganizationUserBulkRequest exists with 'action=${value['action']}'`);
  }
}
