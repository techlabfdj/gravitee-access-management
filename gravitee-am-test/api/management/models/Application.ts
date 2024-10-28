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
    ApplicationIdentityProvider,
    ApplicationIdentityProviderFromJSON,
    ApplicationIdentityProviderFromJSONTyped,
    ApplicationIdentityProviderToJSON,
} from './ApplicationIdentityProvider';
import {
    ApplicationSecretSettings,
    ApplicationSecretSettingsFromJSON,
    ApplicationSecretSettingsFromJSONTyped,
    ApplicationSecretSettingsToJSON,
} from './ApplicationSecretSettings';
import {
    ApplicationSettings,
    ApplicationSettingsFromJSON,
    ApplicationSettingsFromJSONTyped,
    ApplicationSettingsToJSON,
} from './ApplicationSettings';
import {
    ClientSecret,
    ClientSecretFromJSON,
    ClientSecretFromJSONTyped,
    ClientSecretToJSON,
} from './ClientSecret';
import {
    PasswordSettings,
    PasswordSettingsFromJSON,
    PasswordSettingsFromJSONTyped,
    PasswordSettingsToJSON,
} from './PasswordSettings';

/**
 * 
 * @export
 * @interface Application
 */
export interface Application {
    /**
     * 
     * @type {string}
     * @memberof Application
     */
    id?: string;
    /**
     * 
     * @type {string}
     * @memberof Application
     */
    name?: string;
    /**
     * 
     * @type {string}
     * @memberof Application
     */
    type?: ApplicationTypeEnum;
    /**
     * 
     * @type {string}
     * @memberof Application
     */
    description?: string;
    /**
     * 
     * @type {string}
     * @memberof Application
     */
    domain?: string;
    /**
     * 
     * @type {boolean}
     * @memberof Application
     */
    enabled?: boolean;
    /**
     * 
     * @type {boolean}
     * @memberof Application
     */
    template?: boolean;
    /**
     * 
     * @type {Set<string>}
     * @memberof Application
     */
    factors?: Set<string>;
    /**
     * 
     * @type {string}
     * @memberof Application
     */
    certificate?: string;
    /**
     * 
     * @type {{ [key: string]: any; }}
     * @memberof Application
     */
    metadata?: { [key: string]: any; };
    /**
     * 
     * @type {ApplicationSettings}
     * @memberof Application
     */
    settings?: ApplicationSettings;
    /**
     * 
     * @type {Set<ApplicationIdentityProvider>}
     * @memberof Application
     */
    identityProviders?: Set<ApplicationIdentityProvider>;
    /**
     * 
     * @type {Date}
     * @memberof Application
     */
    createdAt?: Date;
    /**
     * 
     * @type {Date}
     * @memberof Application
     */
    updatedAt?: Date;
    /**
     * 
     * @type {Array<ApplicationSecretSettings>}
     * @memberof Application
     */
    secretSettings?: Array<ApplicationSecretSettings>;
    /**
     * 
     * @type {Array<ClientSecret>}
     * @memberof Application
     */
    secrets?: Array<ClientSecret>;
    /**
     * 
     * @type {PasswordSettings}
     * @memberof Application
     */
    passwordSettings?: PasswordSettings;
}


/**
 * @export
 */
export const ApplicationTypeEnum = {
    Web: 'WEB',
    Native: 'NATIVE',
    Browser: 'BROWSER',
    Service: 'SERVICE',
    ResourceServer: 'RESOURCE_SERVER'
} as const;
export type ApplicationTypeEnum = typeof ApplicationTypeEnum[keyof typeof ApplicationTypeEnum];


export function ApplicationFromJSON(json: any): Application {
    return ApplicationFromJSONTyped(json, false);
}

export function ApplicationFromJSONTyped(json: any, ignoreDiscriminator: boolean): Application {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'id': !exists(json, 'id') ? undefined : json['id'],
        'name': !exists(json, 'name') ? undefined : json['name'],
        'type': !exists(json, 'type') ? undefined : json['type'],
        'description': !exists(json, 'description') ? undefined : json['description'],
        'domain': !exists(json, 'domain') ? undefined : json['domain'],
        'enabled': !exists(json, 'enabled') ? undefined : json['enabled'],
        'template': !exists(json, 'template') ? undefined : json['template'],
        'factors': !exists(json, 'factors') ? undefined : json['factors'],
        'certificate': !exists(json, 'certificate') ? undefined : json['certificate'],
        'metadata': !exists(json, 'metadata') ? undefined : json['metadata'],
        'settings': !exists(json, 'settings') ? undefined : ApplicationSettingsFromJSON(json['settings']),
        'identityProviders': !exists(json, 'identityProviders') ? undefined : (new Set((json['identityProviders'] as Array<any>).map(ApplicationIdentityProviderFromJSON))),
        'createdAt': !exists(json, 'createdAt') ? undefined : (new Date(json['createdAt'])),
        'updatedAt': !exists(json, 'updatedAt') ? undefined : (new Date(json['updatedAt'])),
        'secretSettings': !exists(json, 'secretSettings') ? undefined : ((json['secretSettings'] as Array<any>).map(ApplicationSecretSettingsFromJSON)),
        'secrets': !exists(json, 'secrets') ? undefined : ((json['secrets'] as Array<any>).map(ClientSecretFromJSON)),
        'passwordSettings': !exists(json, 'passwordSettings') ? undefined : PasswordSettingsFromJSON(json['passwordSettings']),
    };
}

export function ApplicationToJSON(value?: Application | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'id': value.id,
        'name': value.name,
        'type': value.type,
        'description': value.description,
        'domain': value.domain,
        'enabled': value.enabled,
        'template': value.template,
        'factors': value.factors,
        'certificate': value.certificate,
        'metadata': value.metadata,
        'settings': ApplicationSettingsToJSON(value.settings),
        'identityProviders': value.identityProviders === undefined ? undefined : (Array.from(value.identityProviders as Set<any>).map(ApplicationIdentityProviderToJSON)),
        'createdAt': value.createdAt === undefined ? undefined : (value.createdAt.toISOString()),
        'updatedAt': value.updatedAt === undefined ? undefined : (value.updatedAt.toISOString()),
        'secretSettings': value.secretSettings === undefined ? undefined : ((value.secretSettings as Array<any>).map(ApplicationSecretSettingsToJSON)),
        'secrets': value.secrets === undefined ? undefined : ((value.secrets as Array<any>).map(ClientSecretToJSON)),
        'passwordSettings': PasswordSettingsToJSON(value.passwordSettings),
    };
}

