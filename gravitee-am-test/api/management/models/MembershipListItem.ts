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
/* tslint:disable */
/* eslint-disable */
/**
 * Gravitee.io - Access Management API
 * No description provided (generated by Openapi Generator https://github.com/openapitools/openapi-generator)
 *
 *
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { exists, mapValues } from '../runtime';
import { Membership, MembershipFromJSON, MembershipFromJSONTyped, MembershipToJSON } from './Membership';

/**
 *
 * @export
 * @interface MembershipListItem
 */
export interface MembershipListItem {
  /**
   *
   * @type {Array<Membership>}
   * @memberof MembershipListItem
   */
  memberships?: Array<Membership>;
  /**
   *
   * @type {{ [key: string]: { [key: string]: any; }; }}
   * @memberof MembershipListItem
   */
  metadata?: { [key: string]: { [key: string]: any } };
}

export function MembershipListItemFromJSON(json: any): MembershipListItem {
  return MembershipListItemFromJSONTyped(json, false);
}

export function MembershipListItemFromJSONTyped(json: any, ignoreDiscriminator: boolean): MembershipListItem {
  if (json === undefined || json === null) {
    return json;
  }
  return {
    memberships: !exists(json, 'memberships') ? undefined : (json['memberships'] as Array<any>).map(MembershipFromJSON),
    metadata: !exists(json, 'metadata') ? undefined : json['metadata'],
  };
}

export function MembershipListItemToJSON(value?: MembershipListItem | null): any {
  if (value === undefined) {
    return undefined;
  }
  if (value === null) {
    return null;
  }
  return {
    memberships: value.memberships === undefined ? undefined : (value.memberships as Array<any>).map(MembershipToJSON),
    metadata: value.metadata,
  };
}
