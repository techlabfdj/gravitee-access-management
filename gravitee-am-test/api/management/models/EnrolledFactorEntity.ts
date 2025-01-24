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
 * @interface EnrolledFactorEntity
 */
export interface EnrolledFactorEntity {
  /**
   *
   * @type {string}
   * @memberof EnrolledFactorEntity
   */
  id?: string;
  /**
   *
   * @type {string}
   * @memberof EnrolledFactorEntity
   */
  type?: string;
  /**
   *
   * @type {string}
   * @memberof EnrolledFactorEntity
   */
  name?: string;
  /**
   *
   * @type {Date}
   * @memberof EnrolledFactorEntity
   */
  createdAt?: Date;
  /**
   *
   * @type {Date}
   * @memberof EnrolledFactorEntity
   */
  updatedAt?: Date;
}

export function EnrolledFactorEntityFromJSON(json: any): EnrolledFactorEntity {
  return EnrolledFactorEntityFromJSONTyped(json, false);
}

export function EnrolledFactorEntityFromJSONTyped(json: any, ignoreDiscriminator: boolean): EnrolledFactorEntity {
  if (json === undefined || json === null) {
    return json;
  }
  return {
    id: !exists(json, 'id') ? undefined : json['id'],
    type: !exists(json, 'type') ? undefined : json['type'],
    name: !exists(json, 'name') ? undefined : json['name'],
    createdAt: !exists(json, 'createdAt') ? undefined : new Date(json['createdAt']),
    updatedAt: !exists(json, 'updatedAt') ? undefined : new Date(json['updatedAt']),
  };
}

export function EnrolledFactorEntityToJSON(value?: EnrolledFactorEntity | null): any {
  if (value === undefined) {
    return undefined;
  }
  if (value === null) {
    return null;
  }
  return {
    id: value.id,
    type: value.type,
    name: value.name,
    createdAt: value.createdAt === undefined ? undefined : value.createdAt.toISOString(),
    updatedAt: value.updatedAt === undefined ? undefined : value.updatedAt.toISOString(),
  };
}
