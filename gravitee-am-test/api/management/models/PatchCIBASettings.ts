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
import {
  CIBASettingNotifier,
  CIBASettingNotifierFromJSON,
  CIBASettingNotifierFromJSONTyped,
  CIBASettingNotifierToJSON,
} from './CIBASettingNotifier';

/**
 *
 * @export
 * @interface PatchCIBASettings
 */
export interface PatchCIBASettings {
  /**
   *
   * @type {boolean}
   * @memberof PatchCIBASettings
   */
  enabled?: boolean;
  /**
   *
   * @type {number}
   * @memberof PatchCIBASettings
   */
  authReqExpiry?: number;
  /**
   *
   * @type {number}
   * @memberof PatchCIBASettings
   */
  tokenReqInterval?: number;
  /**
   *
   * @type {number}
   * @memberof PatchCIBASettings
   */
  bindingMessageLength?: number;
  /**
   *
   * @type {Array<CIBASettingNotifier>}
   * @memberof PatchCIBASettings
   */
  deviceNotifiers?: Array<CIBASettingNotifier>;
}

export function PatchCIBASettingsFromJSON(json: any): PatchCIBASettings {
  return PatchCIBASettingsFromJSONTyped(json, false);
}

export function PatchCIBASettingsFromJSONTyped(json: any, ignoreDiscriminator: boolean): PatchCIBASettings {
  if (json === undefined || json === null) {
    return json;
  }
  return {
    enabled: !exists(json, 'enabled') ? undefined : json['enabled'],
    authReqExpiry: !exists(json, 'authReqExpiry') ? undefined : json['authReqExpiry'],
    tokenReqInterval: !exists(json, 'tokenReqInterval') ? undefined : json['tokenReqInterval'],
    bindingMessageLength: !exists(json, 'bindingMessageLength') ? undefined : json['bindingMessageLength'],
    deviceNotifiers: !exists(json, 'deviceNotifiers')
      ? undefined
      : (json['deviceNotifiers'] as Array<any>).map(CIBASettingNotifierFromJSON),
  };
}

export function PatchCIBASettingsToJSON(value?: PatchCIBASettings | null): any {
  if (value === undefined) {
    return undefined;
  }
  if (value === null) {
    return null;
  }
  return {
    enabled: value.enabled,
    authReqExpiry: value.authReqExpiry,
    tokenReqInterval: value.tokenReqInterval,
    bindingMessageLength: value.bindingMessageLength,
    deviceNotifiers: value.deviceNotifiers === undefined ? undefined : (value.deviceNotifiers as Array<any>).map(CIBASettingNotifierToJSON),
  };
}
