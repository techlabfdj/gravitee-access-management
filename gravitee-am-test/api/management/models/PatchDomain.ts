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
import { AccountSettings, AccountSettingsFromJSON, AccountSettingsFromJSONTyped, AccountSettingsToJSON } from './AccountSettings';
import { CorsSettings, CorsSettingsFromJSON, CorsSettingsFromJSONTyped, CorsSettingsToJSON } from './CorsSettings';
import { LoginSettings, LoginSettingsFromJSON, LoginSettingsFromJSONTyped, LoginSettingsToJSON } from './LoginSettings';
import { PatchOIDCSettings, PatchOIDCSettingsFromJSON, PatchOIDCSettingsFromJSONTyped, PatchOIDCSettingsToJSON } from './PatchOIDCSettings';
import {
  PatchPasswordSettings,
  PatchPasswordSettingsFromJSON,
  PatchPasswordSettingsFromJSONTyped,
  PatchPasswordSettingsToJSON,
} from './PatchPasswordSettings';
import { PatchSAMLSettings, PatchSAMLSettingsFromJSON, PatchSAMLSettingsFromJSONTyped, PatchSAMLSettingsToJSON } from './PatchSAMLSettings';
import { SCIMSettings, SCIMSettingsFromJSON, SCIMSettingsFromJSONTyped, SCIMSettingsToJSON } from './SCIMSettings';
import {
  SelfServiceAccountManagementSettings,
  SelfServiceAccountManagementSettingsFromJSON,
  SelfServiceAccountManagementSettingsFromJSONTyped,
  SelfServiceAccountManagementSettingsToJSON,
} from './SelfServiceAccountManagementSettings';
import { UMASettings, UMASettingsFromJSON, UMASettingsFromJSONTyped, UMASettingsToJSON } from './UMASettings';
import { VirtualHost, VirtualHostFromJSON, VirtualHostFromJSONTyped, VirtualHostToJSON } from './VirtualHost';
import { WebAuthnSettings, WebAuthnSettingsFromJSON, WebAuthnSettingsFromJSONTyped, WebAuthnSettingsToJSON } from './WebAuthnSettings';

/**
 *
 * @export
 * @interface PatchDomain
 */
export interface PatchDomain {
  /**
   *
   * @type {string}
   * @memberof PatchDomain
   */
  name?: string;
  /**
   *
   * @type {string}
   * @memberof PatchDomain
   */
  description?: string;
  /**
   *
   * @type {boolean}
   * @memberof PatchDomain
   */
  enabled?: boolean;
  /**
   *
   * @type {boolean}
   * @memberof PatchDomain
   */
  alertEnabled?: boolean;
  /**
   *
   * @type {string}
   * @memberof PatchDomain
   */
  path?: string;
  /**
   *
   * @type {boolean}
   * @memberof PatchDomain
   */
  vhostMode?: boolean;
  /**
   *
   * @type {Array<VirtualHost>}
   * @memberof PatchDomain
   */
  vhosts?: Array<VirtualHost>;
  /**
   *
   * @type {PatchOIDCSettings}
   * @memberof PatchDomain
   */
  oidc?: PatchOIDCSettings;
  /**
   *
   * @type {UMASettings}
   * @memberof PatchDomain
   */
  uma?: UMASettings;
  /**
   *
   * @type {SCIMSettings}
   * @memberof PatchDomain
   */
  scim?: SCIMSettings;
  /**
   *
   * @type {LoginSettings}
   * @memberof PatchDomain
   */
  loginSettings?: LoginSettings;
  /**
   *
   * @type {WebAuthnSettings}
   * @memberof PatchDomain
   */
  webAuthnSettings?: WebAuthnSettings;
  /**
   *
   * @type {AccountSettings}
   * @memberof PatchDomain
   */
  accountSettings?: AccountSettings;
  /**
   *
   * @type {PatchPasswordSettings}
   * @memberof PatchDomain
   */
  passwordSettings?: PatchPasswordSettings;
  /**
   *
   * @type {SelfServiceAccountManagementSettings}
   * @memberof PatchDomain
   */
  selfServiceAccountManagementSettings?: SelfServiceAccountManagementSettings;
  /**
   *
   * @type {Set<string>}
   * @memberof PatchDomain
   */
  tags?: Set<string>;
  /**
   *
   * @type {boolean}
   * @memberof PatchDomain
   */
  master?: boolean;
  /**
   *
   * @type {PatchSAMLSettings}
   * @memberof PatchDomain
   */
  saml?: PatchSAMLSettings;
  /**
   *
   * @type {CorsSettings}
   * @memberof PatchDomain
   */
  corsSettings?: CorsSettings;
  /**
   *
   * @type {Set<string>}
   * @memberof PatchDomain
   */
  requiredPermissions?: Set<PatchDomainRequiredPermissionsEnum>;
}

/**
 * @export
 */
export const PatchDomainRequiredPermissionsEnum = {
  Organization: 'ORGANIZATION',
  OrganizationSettings: 'ORGANIZATION_SETTINGS',
  OrganizationIdentityProvider: 'ORGANIZATION_IDENTITY_PROVIDER',
  OrganizationAudit: 'ORGANIZATION_AUDIT',
  OrganizationReporter: 'ORGANIZATION_REPORTER',
  OrganizationScope: 'ORGANIZATION_SCOPE',
  OrganizationUser: 'ORGANIZATION_USER',
  OrganizationGroup: 'ORGANIZATION_GROUP',
  OrganizationRole: 'ORGANIZATION_ROLE',
  OrganizationTag: 'ORGANIZATION_TAG',
  OrganizationEntrypoint: 'ORGANIZATION_ENTRYPOINT',
  OrganizationForm: 'ORGANIZATION_FORM',
  OrganizationMember: 'ORGANIZATION_MEMBER',
  Environment: 'ENVIRONMENT',
  Domain: 'DOMAIN',
  DomainSettings: 'DOMAIN_SETTINGS',
  DomainForm: 'DOMAIN_FORM',
  DomainEmailTemplate: 'DOMAIN_EMAIL_TEMPLATE',
  DomainExtensionPoint: 'DOMAIN_EXTENSION_POINT',
  DomainIdentityProvider: 'DOMAIN_IDENTITY_PROVIDER',
  DomainAudit: 'DOMAIN_AUDIT',
  DomainCertificate: 'DOMAIN_CERTIFICATE',
  DomainUser: 'DOMAIN_USER',
  DomainUserDevice: 'DOMAIN_USER_DEVICE',
  DomainGroup: 'DOMAIN_GROUP',
  DomainRole: 'DOMAIN_ROLE',
  DomainScim: 'DOMAIN_SCIM',
  DomainScope: 'DOMAIN_SCOPE',
  DomainExtensionGrant: 'DOMAIN_EXTENSION_GRANT',
  DomainOpenid: 'DOMAIN_OPENID',
  DomainSaml: 'DOMAIN_SAML',
  DomainUma: 'DOMAIN_UMA',
  DomainUmaScope: 'DOMAIN_UMA_SCOPE',
  DomainReporter: 'DOMAIN_REPORTER',
  DomainMember: 'DOMAIN_MEMBER',
  DomainAnalytics: 'DOMAIN_ANALYTICS',
  DomainFactor: 'DOMAIN_FACTOR',
  DomainResource: 'DOMAIN_RESOURCE',
  DomainFlow: 'DOMAIN_FLOW',
  DomainAlert: 'DOMAIN_ALERT',
  DomainAlertNotifier: 'DOMAIN_ALERT_NOTIFIER',
  DomainBotDetection: 'DOMAIN_BOT_DETECTION',
  DomainDeviceIdentifier: 'DOMAIN_DEVICE_IDENTIFIER',
  DomainAuthdeviceNotifier: 'DOMAIN_AUTHDEVICE_NOTIFIER',
  DomainI18NDictionary: 'DOMAIN_I18N_DICTIONARY',
  DomainTheme: 'DOMAIN_THEME',
  Application: 'APPLICATION',
  ApplicationSettings: 'APPLICATION_SETTINGS',
  ApplicationIdentityProvider: 'APPLICATION_IDENTITY_PROVIDER',
  ApplicationForm: 'APPLICATION_FORM',
  ApplicationEmailTemplate: 'APPLICATION_EMAIL_TEMPLATE',
  ApplicationOpenid: 'APPLICATION_OPENID',
  ApplicationSaml: 'APPLICATION_SAML',
  ApplicationCertificate: 'APPLICATION_CERTIFICATE',
  ApplicationMember: 'APPLICATION_MEMBER',
  ApplicationFactor: 'APPLICATION_FACTOR',
  ApplicationResource: 'APPLICATION_RESOURCE',
  ApplicationAnalytics: 'APPLICATION_ANALYTICS',
  ApplicationFlow: 'APPLICATION_FLOW',
  LicenseNotification: 'LICENSE_NOTIFICATION',
  Installation: 'INSTALLATION',
} as const;
export type PatchDomainRequiredPermissionsEnum = typeof PatchDomainRequiredPermissionsEnum[keyof typeof PatchDomainRequiredPermissionsEnum];

export function PatchDomainFromJSON(json: any): PatchDomain {
  return PatchDomainFromJSONTyped(json, false);
}

export function PatchDomainFromJSONTyped(json: any, ignoreDiscriminator: boolean): PatchDomain {
  if (json === undefined || json === null) {
    return json;
  }
  return {
    name: !exists(json, 'name') ? undefined : json['name'],
    description: !exists(json, 'description') ? undefined : json['description'],
    enabled: !exists(json, 'enabled') ? undefined : json['enabled'],
    alertEnabled: !exists(json, 'alertEnabled') ? undefined : json['alertEnabled'],
    path: !exists(json, 'path') ? undefined : json['path'],
    vhostMode: !exists(json, 'vhostMode') ? undefined : json['vhostMode'],
    vhosts: !exists(json, 'vhosts') ? undefined : (json['vhosts'] as Array<any>).map(VirtualHostFromJSON),
    oidc: !exists(json, 'oidc') ? undefined : PatchOIDCSettingsFromJSON(json['oidc']),
    uma: !exists(json, 'uma') ? undefined : UMASettingsFromJSON(json['uma']),
    scim: !exists(json, 'scim') ? undefined : SCIMSettingsFromJSON(json['scim']),
    loginSettings: !exists(json, 'loginSettings') ? undefined : LoginSettingsFromJSON(json['loginSettings']),
    webAuthnSettings: !exists(json, 'webAuthnSettings') ? undefined : WebAuthnSettingsFromJSON(json['webAuthnSettings']),
    accountSettings: !exists(json, 'accountSettings') ? undefined : AccountSettingsFromJSON(json['accountSettings']),
    passwordSettings: !exists(json, 'passwordSettings') ? undefined : PatchPasswordSettingsFromJSON(json['passwordSettings']),
    selfServiceAccountManagementSettings: !exists(json, 'selfServiceAccountManagementSettings')
      ? undefined
      : SelfServiceAccountManagementSettingsFromJSON(json['selfServiceAccountManagementSettings']),
    tags: !exists(json, 'tags') ? undefined : json['tags'],
    master: !exists(json, 'master') ? undefined : json['master'],
    saml: !exists(json, 'saml') ? undefined : PatchSAMLSettingsFromJSON(json['saml']),
    corsSettings: !exists(json, 'corsSettings') ? undefined : CorsSettingsFromJSON(json['corsSettings']),
    requiredPermissions: !exists(json, 'requiredPermissions') ? undefined : json['requiredPermissions'],
  };
}

export function PatchDomainToJSON(value?: PatchDomain | null): any {
  if (value === undefined) {
    return undefined;
  }
  if (value === null) {
    return null;
  }
  return {
    name: value.name,
    description: value.description,
    enabled: value.enabled,
    alertEnabled: value.alertEnabled,
    path: value.path,
    vhostMode: value.vhostMode,
    vhosts: value.vhosts === undefined ? undefined : (value.vhosts as Array<any>).map(VirtualHostToJSON),
    oidc: PatchOIDCSettingsToJSON(value.oidc),
    uma: UMASettingsToJSON(value.uma),
    scim: SCIMSettingsToJSON(value.scim),
    loginSettings: LoginSettingsToJSON(value.loginSettings),
    webAuthnSettings: WebAuthnSettingsToJSON(value.webAuthnSettings),
    accountSettings: AccountSettingsToJSON(value.accountSettings),
    passwordSettings: PatchPasswordSettingsToJSON(value.passwordSettings),
    selfServiceAccountManagementSettings: SelfServiceAccountManagementSettingsToJSON(value.selfServiceAccountManagementSettings),
    tags: value.tags,
    master: value.master,
    saml: PatchSAMLSettingsToJSON(value.saml),
    corsSettings: CorsSettingsToJSON(value.corsSettings),
    requiredPermissions: value.requiredPermissions,
  };
}
