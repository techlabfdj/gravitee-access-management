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
    ChallengeSettings,
    ChallengeSettingsFromJSON,
    ChallengeSettingsFromJSONTyped,
    ChallengeSettingsToJSON,
} from './ChallengeSettings';
import {
    EnrollSettings,
    EnrollSettingsFromJSON,
    EnrollSettingsFromJSONTyped,
    EnrollSettingsToJSON,
} from './EnrollSettings';
import {
    EnrollmentSettings,
    EnrollmentSettingsFromJSON,
    EnrollmentSettingsFromJSONTyped,
    EnrollmentSettingsToJSON,
} from './EnrollmentSettings';
import {
    FactorSettings,
    FactorSettingsFromJSON,
    FactorSettingsFromJSONTyped,
    FactorSettingsToJSON,
} from './FactorSettings';
import {
    RememberDeviceSettings,
    RememberDeviceSettingsFromJSON,
    RememberDeviceSettingsFromJSONTyped,
    RememberDeviceSettingsToJSON,
} from './RememberDeviceSettings';
import {
    StepUpAuthenticationSettings,
    StepUpAuthenticationSettingsFromJSON,
    StepUpAuthenticationSettingsFromJSONTyped,
    StepUpAuthenticationSettingsToJSON,
} from './StepUpAuthenticationSettings';

/**
 * 
 * @export
 * @interface MFASettings
 */
export interface MFASettings {
    /**
     * 
     * @type {string}
     * @memberof MFASettings
     */
    loginRule?: string;
    /**
     * 
     * @type {FactorSettings}
     * @memberof MFASettings
     */
    factor?: FactorSettings;
    /**
     * 
     * @type {string}
     * @memberof MFASettings
     */
    stepUpAuthenticationRule?: string;
    /**
     * 
     * @type {StepUpAuthenticationSettings}
     * @memberof MFASettings
     */
    stepUpAuthentication?: StepUpAuthenticationSettings;
    /**
     * 
     * @type {string}
     * @memberof MFASettings
     */
    adaptiveAuthenticationRule?: string;
    /**
     * 
     * @type {RememberDeviceSettings}
     * @memberof MFASettings
     */
    rememberDevice?: RememberDeviceSettings;
    /**
     * 
     * @type {EnrollmentSettings}
     * @memberof MFASettings
     */
    enrollment?: EnrollmentSettings;
    /**
     * 
     * @type {ChallengeSettings}
     * @memberof MFASettings
     */
    challenge?: ChallengeSettings;
    /**
     * 
     * @type {EnrollSettings}
     * @memberof MFASettings
     */
    enroll?: EnrollSettings;
}

export function MFASettingsFromJSON(json: any): MFASettings {
    return MFASettingsFromJSONTyped(json, false);
}

export function MFASettingsFromJSONTyped(json: any, ignoreDiscriminator: boolean): MFASettings {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'loginRule': !exists(json, 'loginRule') ? undefined : json['loginRule'],
        'factor': !exists(json, 'factor') ? undefined : FactorSettingsFromJSON(json['factor']),
        'stepUpAuthenticationRule': !exists(json, 'stepUpAuthenticationRule') ? undefined : json['stepUpAuthenticationRule'],
        'stepUpAuthentication': !exists(json, 'stepUpAuthentication') ? undefined : StepUpAuthenticationSettingsFromJSON(json['stepUpAuthentication']),
        'adaptiveAuthenticationRule': !exists(json, 'adaptiveAuthenticationRule') ? undefined : json['adaptiveAuthenticationRule'],
        'rememberDevice': !exists(json, 'rememberDevice') ? undefined : RememberDeviceSettingsFromJSON(json['rememberDevice']),
        'enrollment': !exists(json, 'enrollment') ? undefined : EnrollmentSettingsFromJSON(json['enrollment']),
        'challenge': !exists(json, 'challenge') ? undefined : ChallengeSettingsFromJSON(json['challenge']),
        'enroll': !exists(json, 'enroll') ? undefined : EnrollSettingsFromJSON(json['enroll']),
    };
}

export function MFASettingsToJSON(value?: MFASettings | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'loginRule': value.loginRule,
        'factor': FactorSettingsToJSON(value.factor),
        'stepUpAuthenticationRule': value.stepUpAuthenticationRule,
        'stepUpAuthentication': StepUpAuthenticationSettingsToJSON(value.stepUpAuthentication),
        'adaptiveAuthenticationRule': value.adaptiveAuthenticationRule,
        'rememberDevice': RememberDeviceSettingsToJSON(value.rememberDevice),
        'enrollment': EnrollmentSettingsToJSON(value.enrollment),
        'challenge': ChallengeSettingsToJSON(value.challenge),
        'enroll': EnrollSettingsToJSON(value.enroll),
    };
}

