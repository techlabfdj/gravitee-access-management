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
 * @interface NewReporter
 */
export interface NewReporter {
    /**
     * 
     * @type {string}
     * @memberof NewReporter
     */
    id?: string;
    /**
     * 
     * @type {boolean}
     * @memberof NewReporter
     */
    enabled?: boolean;
    /**
     * 
     * @type {string}
     * @memberof NewReporter
     */
    type: string;
    /**
     * 
     * @type {string}
     * @memberof NewReporter
     */
    name: string;
    /**
     * 
     * @type {string}
     * @memberof NewReporter
     */
    configuration: string;
    /**
     * 
     * @type {boolean}
     * @memberof NewReporter
     */
    inherited?: boolean;
}

export function NewReporterFromJSON(json: any): NewReporter {
    return NewReporterFromJSONTyped(json, false);
}

export function NewReporterFromJSONTyped(json: any, ignoreDiscriminator: boolean): NewReporter {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'id': !exists(json, 'id') ? undefined : json['id'],
        'enabled': !exists(json, 'enabled') ? undefined : json['enabled'],
        'type': json['type'],
        'name': json['name'],
        'configuration': json['configuration'],
        'inherited': !exists(json, 'inherited') ? undefined : json['inherited'],
    };
}

export function NewReporterToJSON(value?: NewReporter | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'id': value.id,
        'enabled': value.enabled,
        'type': value.type,
        'name': value.name,
        'configuration': value.configuration,
        'inherited': value.inherited,
    };
}

