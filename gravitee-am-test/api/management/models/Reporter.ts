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
    Reference,
    ReferenceFromJSON,
    ReferenceFromJSONTyped,
    ReferenceToJSON,
} from './Reference';

/**
 * 
 * @export
 * @interface Reporter
 */
export interface Reporter {
    /**
     * 
     * @type {string}
     * @memberof Reporter
     */
    id?: string;
    /**
     * 
     * @type {Reference}
     * @memberof Reporter
     */
    reference?: Reference;
    /**
     * 
     * @type {boolean}
     * @memberof Reporter
     */
    enabled?: boolean;
    /**
     * 
     * @type {string}
     * @memberof Reporter
     */
    type?: string;
    /**
     * 
     * @type {string}
     * @memberof Reporter
     */
    name?: string;
    /**
     * 
     * @type {boolean}
     * @memberof Reporter
     */
    system?: boolean;
    /**
     * 
     * @type {string}
     * @memberof Reporter
     */
    dataType?: string;
    /**
     * 
     * @type {string}
     * @memberof Reporter
     */
    configuration?: string;
    /**
     * 
     * @type {Date}
     * @memberof Reporter
     */
    createdAt?: Date;
    /**
     * 
     * @type {Date}
     * @memberof Reporter
     */
    updatedAt?: Date;
    /**
     * 
     * @type {boolean}
     * @memberof Reporter
     */
    inherited?: boolean;
}

export function ReporterFromJSON(json: any): Reporter {
    return ReporterFromJSONTyped(json, false);
}

export function ReporterFromJSONTyped(json: any, ignoreDiscriminator: boolean): Reporter {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'id': !exists(json, 'id') ? undefined : json['id'],
        'reference': !exists(json, 'reference') ? undefined : ReferenceFromJSON(json['reference']),
        'enabled': !exists(json, 'enabled') ? undefined : json['enabled'],
        'type': !exists(json, 'type') ? undefined : json['type'],
        'name': !exists(json, 'name') ? undefined : json['name'],
        'system': !exists(json, 'system') ? undefined : json['system'],
        'dataType': !exists(json, 'dataType') ? undefined : json['dataType'],
        'configuration': !exists(json, 'configuration') ? undefined : json['configuration'],
        'createdAt': !exists(json, 'createdAt') ? undefined : (new Date(json['createdAt'])),
        'updatedAt': !exists(json, 'updatedAt') ? undefined : (new Date(json['updatedAt'])),
        'inherited': !exists(json, 'inherited') ? undefined : json['inherited'],
    };
}

export function ReporterToJSON(value?: Reporter | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'id': value.id,
        'reference': ReferenceToJSON(value.reference),
        'enabled': value.enabled,
        'type': value.type,
        'name': value.name,
        'system': value.system,
        'dataType': value.dataType,
        'configuration': value.configuration,
        'createdAt': value.createdAt === undefined ? undefined : (value.createdAt.toISOString()),
        'updatedAt': value.updatedAt === undefined ? undefined : (value.updatedAt.toISOString()),
        'inherited': value.inherited,
    };
}

