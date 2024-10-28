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
 * @interface WebAuthnSettings
 */
export interface WebAuthnSettings {
    /**
     * 
     * @type {string}
     * @memberof WebAuthnSettings
     */
    origin?: string;
    /**
     * 
     * @type {string}
     * @memberof WebAuthnSettings
     */
    relyingPartyId?: string;
    /**
     * 
     * @type {string}
     * @memberof WebAuthnSettings
     */
    relyingPartyName?: string;
    /**
     * 
     * @type {boolean}
     * @memberof WebAuthnSettings
     */
    requireResidentKey?: boolean;
    /**
     * 
     * @type {string}
     * @memberof WebAuthnSettings
     */
    userVerification?: WebAuthnSettingsUserVerificationEnum;
    /**
     * 
     * @type {string}
     * @memberof WebAuthnSettings
     */
    authenticatorAttachment?: WebAuthnSettingsAuthenticatorAttachmentEnum;
    /**
     * 
     * @type {string}
     * @memberof WebAuthnSettings
     */
    attestationConveyancePreference?: WebAuthnSettingsAttestationConveyancePreferenceEnum;
    /**
     * 
     * @type {boolean}
     * @memberof WebAuthnSettings
     */
    forceRegistration?: boolean;
    /**
     * 
     * @type {{ [key: string]: any; }}
     * @memberof WebAuthnSettings
     */
    certificates?: { [key: string]: any; };
    /**
     * 
     * @type {boolean}
     * @memberof WebAuthnSettings
     */
    enforceAuthenticatorIntegrity?: boolean;
    /**
     * 
     * @type {number}
     * @memberof WebAuthnSettings
     */
    enforceAuthenticatorIntegrityMaxAge?: number;
}


/**
 * @export
 */
export const WebAuthnSettingsUserVerificationEnum = {
    Required: 'REQUIRED',
    Preferred: 'PREFERRED',
    Discouraged: 'DISCOURAGED'
} as const;
export type WebAuthnSettingsUserVerificationEnum = typeof WebAuthnSettingsUserVerificationEnum[keyof typeof WebAuthnSettingsUserVerificationEnum];

/**
 * @export
 */
export const WebAuthnSettingsAuthenticatorAttachmentEnum = {
    CrossPlatform: 'CROSS_PLATFORM',
    Platform: 'PLATFORM'
} as const;
export type WebAuthnSettingsAuthenticatorAttachmentEnum = typeof WebAuthnSettingsAuthenticatorAttachmentEnum[keyof typeof WebAuthnSettingsAuthenticatorAttachmentEnum];

/**
 * @export
 */
export const WebAuthnSettingsAttestationConveyancePreferenceEnum = {
    None: 'NONE',
    Indirect: 'INDIRECT',
    Direct: 'DIRECT'
} as const;
export type WebAuthnSettingsAttestationConveyancePreferenceEnum = typeof WebAuthnSettingsAttestationConveyancePreferenceEnum[keyof typeof WebAuthnSettingsAttestationConveyancePreferenceEnum];


export function WebAuthnSettingsFromJSON(json: any): WebAuthnSettings {
    return WebAuthnSettingsFromJSONTyped(json, false);
}

export function WebAuthnSettingsFromJSONTyped(json: any, ignoreDiscriminator: boolean): WebAuthnSettings {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'origin': !exists(json, 'origin') ? undefined : json['origin'],
        'relyingPartyId': !exists(json, 'relyingPartyId') ? undefined : json['relyingPartyId'],
        'relyingPartyName': !exists(json, 'relyingPartyName') ? undefined : json['relyingPartyName'],
        'requireResidentKey': !exists(json, 'requireResidentKey') ? undefined : json['requireResidentKey'],
        'userVerification': !exists(json, 'userVerification') ? undefined : json['userVerification'],
        'authenticatorAttachment': !exists(json, 'authenticatorAttachment') ? undefined : json['authenticatorAttachment'],
        'attestationConveyancePreference': !exists(json, 'attestationConveyancePreference') ? undefined : json['attestationConveyancePreference'],
        'forceRegistration': !exists(json, 'forceRegistration') ? undefined : json['forceRegistration'],
        'certificates': !exists(json, 'certificates') ? undefined : json['certificates'],
        'enforceAuthenticatorIntegrity': !exists(json, 'enforceAuthenticatorIntegrity') ? undefined : json['enforceAuthenticatorIntegrity'],
        'enforceAuthenticatorIntegrityMaxAge': !exists(json, 'enforceAuthenticatorIntegrityMaxAge') ? undefined : json['enforceAuthenticatorIntegrityMaxAge'],
    };
}

export function WebAuthnSettingsToJSON(value?: WebAuthnSettings | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'origin': value.origin,
        'relyingPartyId': value.relyingPartyId,
        'relyingPartyName': value.relyingPartyName,
        'requireResidentKey': value.requireResidentKey,
        'userVerification': value.userVerification,
        'authenticatorAttachment': value.authenticatorAttachment,
        'attestationConveyancePreference': value.attestationConveyancePreference,
        'forceRegistration': value.forceRegistration,
        'certificates': value.certificates,
        'enforceAuthenticatorIntegrity': value.enforceAuthenticatorIntegrity,
        'enforceAuthenticatorIntegrityMaxAge': value.enforceAuthenticatorIntegrityMaxAge,
    };
}

