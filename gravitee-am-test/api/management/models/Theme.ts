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
 * @interface Theme
 */
export interface Theme {
  /**
   *
   * @type {string}
   * @memberof Theme
   */
  id?: string;
  /**
   *
   * @type {string}
   * @memberof Theme
   */
  referenceId?: string;
  /**
   *
   * @type {string}
   * @memberof Theme
   */
  referenceType?: ThemeReferenceTypeEnum;
  /**
   *
   * @type {string}
   * @memberof Theme
   */
  logoUrl?: string;
  /**
   *
   * @type {number}
   * @memberof Theme
   */
  logoWidth?: number;
  /**
   *
   * @type {string}
   * @memberof Theme
   */
  faviconUrl?: string;
  /**
   *
   * @type {string}
   * @memberof Theme
   */
  primaryButtonColorHex?: string;
  /**
   *
   * @type {string}
   * @memberof Theme
   */
  secondaryButtonColorHex?: string;
  /**
   *
   * @type {string}
   * @memberof Theme
   */
  primaryTextColorHex?: string;
  /**
   *
   * @type {string}
   * @memberof Theme
   */
  secondaryTextColorHex?: string;
  /**
   *
   * @type {string}
   * @memberof Theme
   */
  css?: string;
  /**
   *
   * @type {number}
   * @memberof Theme
   */
  createdAt?: number;
  /**
   *
   * @type {number}
   * @memberof Theme
   */
  updatedAt?: number;
}

/**
 * @export
 */
export const ThemeReferenceTypeEnum = {
  Platform: 'PLATFORM',
  Domain: 'DOMAIN',
  Application: 'APPLICATION',
  Organization: 'ORGANIZATION',
  Environment: 'ENVIRONMENT',
} as const;
export type ThemeReferenceTypeEnum = typeof ThemeReferenceTypeEnum[keyof typeof ThemeReferenceTypeEnum];

export function ThemeFromJSON(json: any): Theme {
  return ThemeFromJSONTyped(json, false);
}

export function ThemeFromJSONTyped(json: any, ignoreDiscriminator: boolean): Theme {
  if (json === undefined || json === null) {
    return json;
  }
  return {
    id: !exists(json, 'id') ? undefined : json['id'],
    referenceId: !exists(json, 'referenceId') ? undefined : json['referenceId'],
    referenceType: !exists(json, 'referenceType') ? undefined : json['referenceType'],
    logoUrl: !exists(json, 'logoUrl') ? undefined : json['logoUrl'],
    logoWidth: !exists(json, 'logoWidth') ? undefined : json['logoWidth'],
    faviconUrl: !exists(json, 'faviconUrl') ? undefined : json['faviconUrl'],
    primaryButtonColorHex: !exists(json, 'primaryButtonColorHex') ? undefined : json['primaryButtonColorHex'],
    secondaryButtonColorHex: !exists(json, 'secondaryButtonColorHex') ? undefined : json['secondaryButtonColorHex'],
    primaryTextColorHex: !exists(json, 'primaryTextColorHex') ? undefined : json['primaryTextColorHex'],
    secondaryTextColorHex: !exists(json, 'secondaryTextColorHex') ? undefined : json['secondaryTextColorHex'],
    css: !exists(json, 'css') ? undefined : json['css'],
    createdAt: !exists(json, 'createdAt') ? undefined : json['createdAt'],
    updatedAt: !exists(json, 'updatedAt') ? undefined : json['updatedAt'],
  };
}

export function ThemeToJSON(value?: Theme | null): any {
  if (value === undefined) {
    return undefined;
  }
  if (value === null) {
    return null;
  }
  return {
    id: value.id,
    referenceId: value.referenceId,
    referenceType: value.referenceType,
    logoUrl: value.logoUrl,
    logoWidth: value.logoWidth,
    faviconUrl: value.faviconUrl,
    primaryButtonColorHex: value.primaryButtonColorHex,
    secondaryButtonColorHex: value.secondaryButtonColorHex,
    primaryTextColorHex: value.primaryTextColorHex,
    secondaryTextColorHex: value.secondaryTextColorHex,
    css: value.css,
    createdAt: value.createdAt,
    updatedAt: value.updatedAt,
  };
}
