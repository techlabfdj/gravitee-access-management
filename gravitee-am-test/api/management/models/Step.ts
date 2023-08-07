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
 * @interface Step
 */
export interface Step {
  /**
   *
   * @type {string}
   * @memberof Step
   */
  name?: string;
  /**
   *
   * @type {string}
   * @memberof Step
   */
  policy?: string;
  /**
   *
   * @type {string}
   * @memberof Step
   */
  description?: string;
  /**
   *
   * @type {string}
   * @memberof Step
   */
  configuration?: string;
  /**
   *
   * @type {boolean}
   * @memberof Step
   */
  enabled?: boolean;
  /**
   *
   * @type {string}
   * @memberof Step
   */
  condition?: string;
}

export function StepFromJSON(json: any): Step {
  return StepFromJSONTyped(json, false);
}

export function StepFromJSONTyped(json: any, ignoreDiscriminator: boolean): Step {
  if (json === undefined || json === null) {
    return json;
  }
  return {
    name: !exists(json, 'name') ? undefined : json['name'],
    policy: !exists(json, 'policy') ? undefined : json['policy'],
    description: !exists(json, 'description') ? undefined : json['description'],
    configuration: !exists(json, 'configuration') ? undefined : json['configuration'],
    enabled: !exists(json, 'enabled') ? undefined : json['enabled'],
    condition: !exists(json, 'condition') ? undefined : json['condition'],
  };
}

export function StepToJSON(value?: Step | null): any {
  if (value === undefined) {
    return undefined;
  }
  if (value === null) {
    return null;
  }
  return {
    name: value.name,
    policy: value.policy,
    description: value.description,
    configuration: value.configuration,
    enabled: value.enabled,
    condition: value.condition,
  };
}
