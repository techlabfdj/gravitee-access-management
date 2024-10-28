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
 * @interface Environment
 */
export interface Environment {
    /**
     * 
     * @type {string}
     * @memberof Environment
     */
    id?: string;
    /**
     * 
     * @type {Array<string>}
     * @memberof Environment
     */
    hrids?: Array<string>;
    /**
     * 
     * @type {string}
     * @memberof Environment
     */
    name?: string;
    /**
     * 
     * @type {string}
     * @memberof Environment
     */
    description?: string;
    /**
     * 
     * @type {Array<string>}
     * @memberof Environment
     */
    domainRestrictions?: Array<string>;
    /**
     * 
     * @type {string}
     * @memberof Environment
     */
    organizationId?: string;
    /**
     * 
     * @type {Date}
     * @memberof Environment
     */
    createdAt?: Date;
    /**
     * 
     * @type {Date}
     * @memberof Environment
     */
    updatedAt?: Date;
}

export function EnvironmentFromJSON(json: any): Environment {
    return EnvironmentFromJSONTyped(json, false);
}

export function EnvironmentFromJSONTyped(json: any, ignoreDiscriminator: boolean): Environment {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'id': !exists(json, 'id') ? undefined : json['id'],
        'hrids': !exists(json, 'hrids') ? undefined : json['hrids'],
        'name': !exists(json, 'name') ? undefined : json['name'],
        'description': !exists(json, 'description') ? undefined : json['description'],
        'domainRestrictions': !exists(json, 'domainRestrictions') ? undefined : json['domainRestrictions'],
        'organizationId': !exists(json, 'organizationId') ? undefined : json['organizationId'],
        'createdAt': !exists(json, 'createdAt') ? undefined : (new Date(json['createdAt'])),
        'updatedAt': !exists(json, 'updatedAt') ? undefined : (new Date(json['updatedAt'])),
    };
}

export function EnvironmentToJSON(value?: Environment | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'id': value.id,
        'hrids': value.hrids,
        'name': value.name,
        'description': value.description,
        'domainRestrictions': value.domainRestrictions,
        'organizationId': value.organizationId,
        'createdAt': value.createdAt === undefined ? undefined : (value.createdAt.toISOString()),
        'updatedAt': value.updatedAt === undefined ? undefined : (value.updatedAt.toISOString()),
    };
}

