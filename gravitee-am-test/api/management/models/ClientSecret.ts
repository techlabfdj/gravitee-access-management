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
import { exists, mapValues } from '../runtime';
/**
 *
 * @export
 * @interface ClientSecret
 */
export interface ClientSecret {
  /**
   *
   * @type {string}
   * @memberof ClientSecret
   */
  id?: string;
  /**
   *
   * @type {string}
   * @memberof ClientSecret
   */
  settingsId?: string;
  /**
   *
   * @type {string}
   * @memberof ClientSecret
   */
  name?: string;
  /**
   *
   * @type {Date}
   * @memberof ClientSecret
   */
  createdAt?: Date;
}

export function ClientSecretFromJSON(json: any): ClientSecret {
  return ClientSecretFromJSONTyped(json, false);
}

export function ClientSecretFromJSONTyped(json: any, ignoreDiscriminator: boolean): ClientSecret {
  if (json === undefined || json === null) {
    return json;
  }
  return {
    id: !exists(json, 'id') ? undefined : json['id'],
    settingsId: !exists(json, 'settingsId') ? undefined : json['settingsId'],
    name: !exists(json, 'name') ? undefined : json['name'],
    createdAt: !exists(json, 'createdAt') ? undefined : new Date(json['createdAt']),
  };
}

export function ClientSecretToJSON(value?: ClientSecret | null): any {
  if (value === undefined) {
    return undefined;
  }
  if (value === null) {
    return null;
  }
  return {
    id: value.id,
    settingsId: value.settingsId,
    name: value.name,
    createdAt: value.createdAt === undefined ? undefined : value.createdAt.toISOString(),
  };
}
