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
    AccountSettings,
    AccountSettingsFromJSON,
    AccountSettingsFromJSONTyped,
    AccountSettingsToJSON,
} from './AccountSettings';
import {
    CorsSettings,
    CorsSettingsFromJSON,
    CorsSettingsFromJSONTyped,
    CorsSettingsToJSON,
} from './CorsSettings';
import {
    LoginSettings,
    LoginSettingsFromJSON,
    LoginSettingsFromJSONTyped,
    LoginSettingsToJSON,
} from './LoginSettings';
import {
    OIDCSettings,
    OIDCSettingsFromJSON,
    OIDCSettingsFromJSONTyped,
    OIDCSettingsToJSON,
} from './OIDCSettings';
import {
    PasswordSettings,
    PasswordSettingsFromJSON,
    PasswordSettingsFromJSONTyped,
    PasswordSettingsToJSON,
} from './PasswordSettings';
import {
    SAMLSettings,
    SAMLSettingsFromJSON,
    SAMLSettingsFromJSONTyped,
    SAMLSettingsToJSON,
} from './SAMLSettings';
import {
    SCIMSettings,
    SCIMSettingsFromJSON,
    SCIMSettingsFromJSONTyped,
    SCIMSettingsToJSON,
} from './SCIMSettings';
import {
    SelfServiceAccountManagementSettings,
    SelfServiceAccountManagementSettingsFromJSON,
    SelfServiceAccountManagementSettingsFromJSONTyped,
    SelfServiceAccountManagementSettingsToJSON,
} from './SelfServiceAccountManagementSettings';
import {
    UMASettings,
    UMASettingsFromJSON,
    UMASettingsFromJSONTyped,
    UMASettingsToJSON,
} from './UMASettings';
import {
    VirtualHost,
    VirtualHostFromJSON,
    VirtualHostFromJSONTyped,
    VirtualHostToJSON,
} from './VirtualHost';
import {
    WebAuthnSettings,
    WebAuthnSettingsFromJSON,
    WebAuthnSettingsFromJSONTyped,
    WebAuthnSettingsToJSON,
} from './WebAuthnSettings';

/**
 * 
 * @export
 * @interface Domain
 */
export interface Domain {
    /**
     * 
     * @type {string}
     * @memberof Domain
     */
    id?: string;
    /**
     * 
     * @type {string}
     * @memberof Domain
     */
    hrid?: string;
    /**
     * 
     * @type {string}
     * @memberof Domain
     */
    name?: string;
    /**
     * 
     * @type {string}
     * @memberof Domain
     */
    version?: DomainVersionEnum;
    /**
     * 
     * @type {string}
     * @memberof Domain
     */
    description?: string;
    /**
     * 
     * @type {string}
     * @memberof Domain
     */
    referenceType?: DomainReferenceTypeEnum;
    /**
     * 
     * @type {string}
     * @memberof Domain
     */
    referenceId?: string;
    /**
     * 
     * @type {boolean}
     * @memberof Domain
     */
    enabled?: boolean;
    /**
     * 
     * @type {boolean}
     * @memberof Domain
     */
    alertEnabled?: boolean;
    /**
     * 
     * @type {string}
     * @memberof Domain
     */
    path?: string;
    /**
     * 
     * @type {Set<string>}
     * @memberof Domain
     */
    identities?: Set<string>;
    /**
     * 
     * @type {boolean}
     * @memberof Domain
     */
    master?: boolean;
    /**
     * 
     * @type {boolean}
     * @memberof Domain
     */
    vhostMode?: boolean;
    /**
     * 
     * @type {Array<VirtualHost>}
     * @memberof Domain
     */
    vhosts?: Array<VirtualHost>;
    /**
     * 
     * @type {Set<string>}
     * @memberof Domain
     */
    tags?: Set<string>;
    /**
     * 
     * @type {Date}
     * @memberof Domain
     */
    createdAt?: Date;
    /**
     * 
     * @type {Date}
     * @memberof Domain
     */
    updatedAt?: Date;
    /**
     * 
     * @type {OIDCSettings}
     * @memberof Domain
     */
    oidc?: OIDCSettings;
    /**
     * 
     * @type {UMASettings}
     * @memberof Domain
     */
    uma?: UMASettings;
    /**
     * 
     * @type {LoginSettings}
     * @memberof Domain
     */
    loginSettings?: LoginSettings;
    /**
     * 
     * @type {WebAuthnSettings}
     * @memberof Domain
     */
    webAuthnSettings?: WebAuthnSettings;
    /**
     * 
     * @type {SCIMSettings}
     * @memberof Domain
     */
    scim?: SCIMSettings;
    /**
     * 
     * @type {AccountSettings}
     * @memberof Domain
     */
    accountSettings?: AccountSettings;
    /**
     * 
     * @type {PasswordSettings}
     * @memberof Domain
     */
    passwordSettings?: PasswordSettings;
    /**
     * 
     * @type {SelfServiceAccountManagementSettings}
     * @memberof Domain
     */
    selfServiceAccountManagementSettings?: SelfServiceAccountManagementSettings;
    /**
     * 
     * @type {SAMLSettings}
     * @memberof Domain
     */
    saml?: SAMLSettings;
    /**
     * 
     * @type {CorsSettings}
     * @memberof Domain
     */
    corsSettings?: CorsSettings;
    /**
     * 
     * @type {boolean}
     * @memberof Domain
     */
    redirectUriLocalhostAllowed?: boolean;
    /**
     * 
     * @type {boolean}
     * @memberof Domain
     */
    redirectUriUnsecuredHttpSchemeAllowed?: boolean;
    /**
     * 
     * @type {boolean}
     * @memberof Domain
     */
    redirectUriWildcardAllowed?: boolean;
    /**
     * 
     * @type {boolean}
     * @memberof Domain
     */
    dynamicClientRegistrationEnabled?: boolean;
    /**
     * 
     * @type {boolean}
     * @memberof Domain
     */
    openDynamicClientRegistrationEnabled?: boolean;
    /**
     * 
     * @type {boolean}
     * @memberof Domain
     */
    redirectUriStrictMatching?: boolean;
    /**
     * 
     * @type {boolean}
     * @memberof Domain
     */
    dynamicClientRegistrationTemplateEnabled?: boolean;
}


/**
 * @export
 */
export const DomainVersionEnum = {
    V10: 'V1_0',
    V20: 'V2_0'
} as const;
export type DomainVersionEnum = typeof DomainVersionEnum[keyof typeof DomainVersionEnum];

/**
 * @export
 */
export const DomainReferenceTypeEnum = {
    Platform: 'PLATFORM',
    Domain: 'DOMAIN',
    Application: 'APPLICATION',
    Organization: 'ORGANIZATION',
    Environment: 'ENVIRONMENT'
} as const;
export type DomainReferenceTypeEnum = typeof DomainReferenceTypeEnum[keyof typeof DomainReferenceTypeEnum];


export function DomainFromJSON(json: any): Domain {
    return DomainFromJSONTyped(json, false);
}

export function DomainFromJSONTyped(json: any, ignoreDiscriminator: boolean): Domain {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'id': !exists(json, 'id') ? undefined : json['id'],
        'hrid': !exists(json, 'hrid') ? undefined : json['hrid'],
        'name': !exists(json, 'name') ? undefined : json['name'],
        'version': !exists(json, 'version') ? undefined : json['version'],
        'description': !exists(json, 'description') ? undefined : json['description'],
        'referenceType': !exists(json, 'referenceType') ? undefined : json['referenceType'],
        'referenceId': !exists(json, 'referenceId') ? undefined : json['referenceId'],
        'enabled': !exists(json, 'enabled') ? undefined : json['enabled'],
        'alertEnabled': !exists(json, 'alertEnabled') ? undefined : json['alertEnabled'],
        'path': !exists(json, 'path') ? undefined : json['path'],
        'identities': !exists(json, 'identities') ? undefined : json['identities'],
        'master': !exists(json, 'master') ? undefined : json['master'],
        'vhostMode': !exists(json, 'vhostMode') ? undefined : json['vhostMode'],
        'vhosts': !exists(json, 'vhosts') ? undefined : ((json['vhosts'] as Array<any>).map(VirtualHostFromJSON)),
        'tags': !exists(json, 'tags') ? undefined : json['tags'],
        'createdAt': !exists(json, 'createdAt') ? undefined : (new Date(json['createdAt'])),
        'updatedAt': !exists(json, 'updatedAt') ? undefined : (new Date(json['updatedAt'])),
        'oidc': !exists(json, 'oidc') ? undefined : OIDCSettingsFromJSON(json['oidc']),
        'uma': !exists(json, 'uma') ? undefined : UMASettingsFromJSON(json['uma']),
        'loginSettings': !exists(json, 'loginSettings') ? undefined : LoginSettingsFromJSON(json['loginSettings']),
        'webAuthnSettings': !exists(json, 'webAuthnSettings') ? undefined : WebAuthnSettingsFromJSON(json['webAuthnSettings']),
        'scim': !exists(json, 'scim') ? undefined : SCIMSettingsFromJSON(json['scim']),
        'accountSettings': !exists(json, 'accountSettings') ? undefined : AccountSettingsFromJSON(json['accountSettings']),
        'passwordSettings': !exists(json, 'passwordSettings') ? undefined : PasswordSettingsFromJSON(json['passwordSettings']),
        'selfServiceAccountManagementSettings': !exists(json, 'selfServiceAccountManagementSettings') ? undefined : SelfServiceAccountManagementSettingsFromJSON(json['selfServiceAccountManagementSettings']),
        'saml': !exists(json, 'saml') ? undefined : SAMLSettingsFromJSON(json['saml']),
        'corsSettings': !exists(json, 'corsSettings') ? undefined : CorsSettingsFromJSON(json['corsSettings']),
        'redirectUriLocalhostAllowed': !exists(json, 'redirectUriLocalhostAllowed') ? undefined : json['redirectUriLocalhostAllowed'],
        'redirectUriUnsecuredHttpSchemeAllowed': !exists(json, 'redirectUriUnsecuredHttpSchemeAllowed') ? undefined : json['redirectUriUnsecuredHttpSchemeAllowed'],
        'redirectUriWildcardAllowed': !exists(json, 'redirectUriWildcardAllowed') ? undefined : json['redirectUriWildcardAllowed'],
        'dynamicClientRegistrationEnabled': !exists(json, 'dynamicClientRegistrationEnabled') ? undefined : json['dynamicClientRegistrationEnabled'],
        'openDynamicClientRegistrationEnabled': !exists(json, 'openDynamicClientRegistrationEnabled') ? undefined : json['openDynamicClientRegistrationEnabled'],
        'redirectUriStrictMatching': !exists(json, 'redirectUriStrictMatching') ? undefined : json['redirectUriStrictMatching'],
        'dynamicClientRegistrationTemplateEnabled': !exists(json, 'dynamicClientRegistrationTemplateEnabled') ? undefined : json['dynamicClientRegistrationTemplateEnabled'],
    };
}

export function DomainToJSON(value?: Domain | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'id': value.id,
        'hrid': value.hrid,
        'name': value.name,
        'version': value.version,
        'description': value.description,
        'referenceType': value.referenceType,
        'referenceId': value.referenceId,
        'enabled': value.enabled,
        'alertEnabled': value.alertEnabled,
        'path': value.path,
        'identities': value.identities,
        'master': value.master,
        'vhostMode': value.vhostMode,
        'vhosts': value.vhosts === undefined ? undefined : ((value.vhosts as Array<any>).map(VirtualHostToJSON)),
        'tags': value.tags,
        'createdAt': value.createdAt === undefined ? undefined : (value.createdAt.toISOString()),
        'updatedAt': value.updatedAt === undefined ? undefined : (value.updatedAt.toISOString()),
        'oidc': OIDCSettingsToJSON(value.oidc),
        'uma': UMASettingsToJSON(value.uma),
        'loginSettings': LoginSettingsToJSON(value.loginSettings),
        'webAuthnSettings': WebAuthnSettingsToJSON(value.webAuthnSettings),
        'scim': SCIMSettingsToJSON(value.scim),
        'accountSettings': AccountSettingsToJSON(value.accountSettings),
        'passwordSettings': PasswordSettingsToJSON(value.passwordSettings),
        'selfServiceAccountManagementSettings': SelfServiceAccountManagementSettingsToJSON(value.selfServiceAccountManagementSettings),
        'saml': SAMLSettingsToJSON(value.saml),
        'corsSettings': CorsSettingsToJSON(value.corsSettings),
        'redirectUriLocalhostAllowed': value.redirectUriLocalhostAllowed,
        'redirectUriUnsecuredHttpSchemeAllowed': value.redirectUriUnsecuredHttpSchemeAllowed,
        'redirectUriWildcardAllowed': value.redirectUriWildcardAllowed,
        'dynamicClientRegistrationEnabled': value.dynamicClientRegistrationEnabled,
        'openDynamicClientRegistrationEnabled': value.openDynamicClientRegistrationEnabled,
        'redirectUriStrictMatching': value.redirectUriStrictMatching,
        'dynamicClientRegistrationTemplateEnabled': value.dynamicClientRegistrationTemplateEnabled,
    };
}

