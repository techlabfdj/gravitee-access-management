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
 * @interface UpdateCertificate
 */
export interface UpdateCertificate {
    /**
     * 
     * @type {string}
     * @memberof UpdateCertificate
     */
    name: string;
    /**
     * 
     * @type {string}
     * @memberof UpdateCertificate
     */
    type: string;
    /**
     * 
     * @type {string}
     * @memberof UpdateCertificate
     */
    configuration: string;
}

export function UpdateCertificateFromJSON(json: any): UpdateCertificate {
    return UpdateCertificateFromJSONTyped(json, false);
}

export function UpdateCertificateFromJSONTyped(json: any, ignoreDiscriminator: boolean): UpdateCertificate {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'name': json['name'],
        'type': json['type'],
        'configuration': json['configuration'],
    };
}

export function UpdateCertificateToJSON(value?: UpdateCertificate | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'name': value.name,
        'type': value.type,
        'configuration': value.configuration,
    };
}

