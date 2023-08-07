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
/**
 *
 * @export
 * @interface PatchScope
 */
export interface PatchScope {
  /**
   *
   * @type {string}
   * @memberof PatchScope
   */
  name?: string;
  /**
   *
   * @type {string}
   * @memberof PatchScope
   */
  description?: string;
  /**
   *
   * @type {string}
   * @memberof PatchScope
   */
  iconUri?: string;
  /**
   *
   * @type {number}
   * @memberof PatchScope
   */
  expiresIn?: number;
  /**
   *
   * @type {boolean}
   * @memberof PatchScope
   */
  discovery?: boolean;
  /**
   *
   * @type {boolean}
   * @memberof PatchScope
   */
  parameterized?: boolean;
}

export function PatchScopeFromJSON(json: any): PatchScope {
  return PatchScopeFromJSONTyped(json, false);
}

export function PatchScopeFromJSONTyped(json: any, ignoreDiscriminator: boolean): PatchScope {
  if (json === undefined || json === null) {
    return json;
  }
  return {
    name: !exists(json, 'name') ? undefined : json['name'],
    description: !exists(json, 'description') ? undefined : json['description'],
    iconUri: !exists(json, 'iconUri') ? undefined : json['iconUri'],
    expiresIn: !exists(json, 'expiresIn') ? undefined : json['expiresIn'],
    discovery: !exists(json, 'discovery') ? undefined : json['discovery'],
    parameterized: !exists(json, 'parameterized') ? undefined : json['parameterized'],
  };
}

export function PatchScopeToJSON(value?: PatchScope | null): any {
  if (value === undefined) {
    return undefined;
  }
  if (value === null) {
    return null;
  }
  return {
    name: value.name,
    description: value.description,
    iconUri: value.iconUri,
    expiresIn: value.expiresIn,
    discovery: value.discovery,
    parameterized: value.parameterized,
  };
}
