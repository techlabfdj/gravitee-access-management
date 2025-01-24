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
 * @interface NotifierPlugin
 */
export interface NotifierPlugin {
  /**
   *
   * @type {string}
   * @memberof NotifierPlugin
   */
  id?: string;
  /**
   *
   * @type {string}
   * @memberof NotifierPlugin
   */
  name?: string;
  /**
   *
   * @type {string}
   * @memberof NotifierPlugin
   */
  description?: string;
  /**
   *
   * @type {string}
   * @memberof NotifierPlugin
   */
  version?: string;
  /**
   *
   * @type {boolean}
   * @memberof NotifierPlugin
   */
  deployed?: boolean;
  /**
   *
   * @type {string}
   * @memberof NotifierPlugin
   */
  feature?: string;
  /**
   *
   * @type {string}
   * @memberof NotifierPlugin
   */
  displayName?: string;
  /**
   *
   * @type {string}
   * @memberof NotifierPlugin
   */
  icon?: string;
}

export function NotifierPluginFromJSON(json: any): NotifierPlugin {
  return NotifierPluginFromJSONTyped(json, false);
}

export function NotifierPluginFromJSONTyped(json: any, ignoreDiscriminator: boolean): NotifierPlugin {
  if (json === undefined || json === null) {
    return json;
  }
  return {
    id: !exists(json, 'id') ? undefined : json['id'],
    name: !exists(json, 'name') ? undefined : json['name'],
    description: !exists(json, 'description') ? undefined : json['description'],
    version: !exists(json, 'version') ? undefined : json['version'],
    deployed: !exists(json, 'deployed') ? undefined : json['deployed'],
    feature: !exists(json, 'feature') ? undefined : json['feature'],
    displayName: !exists(json, 'displayName') ? undefined : json['displayName'],
    icon: !exists(json, 'icon') ? undefined : json['icon'],
  };
}

export function NotifierPluginToJSON(value?: NotifierPlugin | null): any {
  if (value === undefined) {
    return undefined;
  }
  if (value === null) {
    return null;
  }
  return {
    id: value.id,
    name: value.name,
    description: value.description,
    version: value.version,
    deployed: value.deployed,
    feature: value.feature,
    displayName: value.displayName,
    icon: value.icon,
  };
}
