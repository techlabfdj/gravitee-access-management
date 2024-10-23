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
    Address,
    AddressFromJSON,
    AddressFromJSONTyped,
    AddressToJSON,
} from './Address';
import {
    ApplicationEntity,
    ApplicationEntityFromJSON,
    ApplicationEntityFromJSONTyped,
    ApplicationEntityToJSON,
} from './ApplicationEntity';
import {
    Attribute,
    AttributeFromJSON,
    AttributeFromJSONTyped,
    AttributeToJSON,
} from './Attribute';
import {
    Certificate,
    CertificateFromJSON,
    CertificateFromJSONTyped,
    CertificateToJSON,
} from './Certificate';
import {
    EnrolledFactor,
    EnrolledFactorFromJSON,
    EnrolledFactorFromJSONTyped,
    EnrolledFactorToJSON,
} from './EnrolledFactor';
import {
    Role,
    RoleFromJSON,
    RoleFromJSONTyped,
    RoleToJSON,
} from './Role';
import {
    UserId,
    UserIdFromJSON,
    UserIdFromJSONTyped,
    UserIdToJSON,
} from './UserId';
import {
    UserIdentity,
    UserIdentityFromJSON,
    UserIdentityFromJSONTyped,
    UserIdentityToJSON,
} from './UserIdentity';

/**
 * 
 * @export
 * @interface UserEntity
 */
export interface UserEntity {
    /**
     * 
     * @type {string}
     * @memberof UserEntity
     */
    id?: string;
    /**
     * 
     * @type {string}
     * @memberof UserEntity
     */
    externalId?: string;
    /**
     * 
     * @type {string}
     * @memberof UserEntity
     */
    username?: string;
    /**
     * 
     * @type {string}
     * @memberof UserEntity
     */
    password?: string;
    /**
     * 
     * @type {string}
     * @memberof UserEntity
     */
    email?: string;
    /**
     * 
     * @type {string}
     * @memberof UserEntity
     */
    displayName?: string;
    /**
     * 
     * @type {string}
     * @memberof UserEntity
     */
    nickName?: string;
    /**
     * 
     * @type {string}
     * @memberof UserEntity
     */
    firstName?: string;
    /**
     * 
     * @type {string}
     * @memberof UserEntity
     */
    lastName?: string;
    /**
     * 
     * @type {string}
     * @memberof UserEntity
     */
    title?: string;
    /**
     * 
     * @type {string}
     * @memberof UserEntity
     */
    type?: string;
    /**
     * 
     * @type {string}
     * @memberof UserEntity
     */
    preferredLanguage?: string;
    /**
     * 
     * @type {string}
     * @memberof UserEntity
     */
    picture?: string;
    /**
     * 
     * @type {Array<Attribute>}
     * @memberof UserEntity
     */
    emails?: Array<Attribute>;
    /**
     * 
     * @type {Array<Attribute>}
     * @memberof UserEntity
     */
    phoneNumbers?: Array<Attribute>;
    /**
     * 
     * @type {Array<Attribute>}
     * @memberof UserEntity
     */
    ims?: Array<Attribute>;
    /**
     * 
     * @type {Array<Attribute>}
     * @memberof UserEntity
     */
    photos?: Array<Attribute>;
    /**
     * 
     * @type {Array<string>}
     * @memberof UserEntity
     */
    entitlements?: Array<string>;
    /**
     * 
     * @type {Array<Address>}
     * @memberof UserEntity
     */
    addresses?: Array<Address>;
    /**
     * 
     * @type {Array<string>}
     * @memberof UserEntity
     */
    roles?: Array<string>;
    /**
     * 
     * @type {Array<string>}
     * @memberof UserEntity
     */
    dynamicRoles?: Array<string>;
    /**
     * 
     * @type {Array<string>}
     * @memberof UserEntity
     */
    dynamicGroups?: Array<string>;
    /**
     * 
     * @type {Set<Role>}
     * @memberof UserEntity
     */
    rolesPermissions?: Set<Role>;
    /**
     * 
     * @type {Array<string>}
     * @memberof UserEntity
     */
    groups?: Array<string>;
    /**
     * 
     * @type {Array<Certificate>}
     * @memberof UserEntity
     */
    x509Certificates?: Array<Certificate>;
    /**
     * 
     * @type {boolean}
     * @memberof UserEntity
     */
    accountNonExpired?: boolean;
    /**
     * 
     * @type {boolean}
     * @memberof UserEntity
     */
    accountNonLocked?: boolean;
    /**
     * 
     * @type {Date}
     * @memberof UserEntity
     */
    accountLockedAt?: Date;
    /**
     * 
     * @type {Date}
     * @memberof UserEntity
     */
    accountLockedUntil?: Date;
    /**
     * 
     * @type {boolean}
     * @memberof UserEntity
     */
    credentialsNonExpired?: boolean;
    /**
     * 
     * @type {boolean}
     * @memberof UserEntity
     */
    enabled?: boolean;
    /**
     * 
     * @type {boolean}
     * @memberof UserEntity
     */
    internal?: boolean;
    /**
     * 
     * @type {boolean}
     * @memberof UserEntity
     */
    preRegistration?: boolean;
    /**
     * 
     * @type {boolean}
     * @memberof UserEntity
     */
    registrationCompleted?: boolean;
    /**
     * 
     * @type {boolean}
     * @memberof UserEntity
     */
    newsletter?: boolean;
    /**
     * 
     * @type {string}
     * @memberof UserEntity
     */
    registrationUserUri?: string;
    /**
     * 
     * @type {string}
     * @memberof UserEntity
     */
    registrationAccessToken?: string;
    /**
     * 
     * @type {string}
     * @memberof UserEntity
     */
    referenceType?: UserEntityReferenceTypeEnum;
    /**
     * 
     * @type {string}
     * @memberof UserEntity
     */
    referenceId?: string;
    /**
     * 
     * @type {string}
     * @memberof UserEntity
     */
    source?: string;
    /**
     * 
     * @type {string}
     * @memberof UserEntity
     */
    client?: string;
    /**
     * 
     * @type {number}
     * @memberof UserEntity
     */
    loginsCount?: number;
    /**
     * 
     * @type {Array<EnrolledFactor>}
     * @memberof UserEntity
     */
    factors?: Array<EnrolledFactor>;
    /**
     * 
     * @type {Array<UserIdentity>}
     * @memberof UserEntity
     */
    identities?: Array<UserIdentity>;
    /**
     * 
     * @type {string}
     * @memberof UserEntity
     */
    lastIdentityUsed?: string;
    /**
     * 
     * @type {{ [key: string]: any; }}
     * @memberof UserEntity
     */
    additionalInformation?: { [key: string]: any; };
    /**
     * 
     * @type {Date}
     * @memberof UserEntity
     */
    loggedAt?: Date;
    /**
     * 
     * @type {Date}
     * @memberof UserEntity
     */
    lastLoginWithCredentials?: Date;
    /**
     * 
     * @type {Date}
     * @memberof UserEntity
     */
    lastPasswordReset?: Date;
    /**
     * 
     * @type {Date}
     * @memberof UserEntity
     */
    lastUsernameReset?: Date;
    /**
     * 
     * @type {Date}
     * @memberof UserEntity
     */
    lastLogoutAt?: Date;
    /**
     * 
     * @type {Date}
     * @memberof UserEntity
     */
    mfaEnrollmentSkippedAt?: Date;
    /**
     * 
     * @type {Date}
     * @memberof UserEntity
     */
    createdAt?: Date;
    /**
     * 
     * @type {Date}
     * @memberof UserEntity
     */
    updatedAt?: Date;
    /**
     * 
     * @type {boolean}
     * @memberof UserEntity
     */
    forceResetPassword?: boolean;
    /**
     * 
     * @type {boolean}
     * @memberof UserEntity
     */
    serviceAccount?: boolean;
    /**
     * 
     * @type {ApplicationEntity}
     * @memberof UserEntity
     */
    applicationEntity?: ApplicationEntity;
    /**
     * 
     * @type {string}
     * @memberof UserEntity
     */
    sourceId?: string;
    /**
     * 
     * @type {string}
     * @memberof UserEntity
     */
    locale?: string;
    /**
     * 
     * @type {string}
     * @memberof UserEntity
     */
    zoneInfo?: string;
    /**
     * 
     * @type {{ [key: string]: any; }}
     * @memberof UserEntity
     */
    address?: { [key: string]: any; };
    /**
     * 
     * @type {string}
     * @memberof UserEntity
     */
    middleName?: string;
    /**
     * 
     * @type {{ [key: string]: any; }}
     * @memberof UserEntity
     */
    lastIdentityInformation?: { [key: string]: any; };
    /**
     * 
     * @type {{ [key: string]: any; }}
     * @memberof UserEntity
     */
    identitiesAsMap?: { [key: string]: any; };
    /**
     * 
     * @type {string}
     * @memberof UserEntity
     */
    birthdate?: string;
    /**
     * 
     * @type {string}
     * @memberof UserEntity
     */
    phoneNumber?: string;
    /**
     * 
     * @type {boolean}
     * @memberof UserEntity
     */
    inactive?: boolean;
    /**
     * 
     * @type {string}
     * @memberof UserEntity
     */
    profile?: string;
    /**
     * 
     * @type {string}
     * @memberof UserEntity
     */
    website?: string;
    /**
     * 
     * @type {UserId}
     * @memberof UserEntity
     */
    fullId?: UserId;
}


/**
 * @export
 */
export const UserEntityReferenceTypeEnum = {
    Platform: 'PLATFORM',
    Domain: 'DOMAIN',
    Application: 'APPLICATION',
    Organization: 'ORGANIZATION',
    Environment: 'ENVIRONMENT'
} as const;
export type UserEntityReferenceTypeEnum = typeof UserEntityReferenceTypeEnum[keyof typeof UserEntityReferenceTypeEnum];


export function UserEntityFromJSON(json: any): UserEntity {
    return UserEntityFromJSONTyped(json, false);
}

export function UserEntityFromJSONTyped(json: any, ignoreDiscriminator: boolean): UserEntity {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'id': !exists(json, 'id') ? undefined : json['id'],
        'externalId': !exists(json, 'externalId') ? undefined : json['externalId'],
        'username': !exists(json, 'username') ? undefined : json['username'],
        'password': !exists(json, 'password') ? undefined : json['password'],
        'email': !exists(json, 'email') ? undefined : json['email'],
        'displayName': !exists(json, 'displayName') ? undefined : json['displayName'],
        'nickName': !exists(json, 'nickName') ? undefined : json['nickName'],
        'firstName': !exists(json, 'firstName') ? undefined : json['firstName'],
        'lastName': !exists(json, 'lastName') ? undefined : json['lastName'],
        'title': !exists(json, 'title') ? undefined : json['title'],
        'type': !exists(json, 'type') ? undefined : json['type'],
        'preferredLanguage': !exists(json, 'preferredLanguage') ? undefined : json['preferredLanguage'],
        'picture': !exists(json, 'picture') ? undefined : json['picture'],
        'emails': !exists(json, 'emails') ? undefined : ((json['emails'] as Array<any>).map(AttributeFromJSON)),
        'phoneNumbers': !exists(json, 'phoneNumbers') ? undefined : ((json['phoneNumbers'] as Array<any>).map(AttributeFromJSON)),
        'ims': !exists(json, 'ims') ? undefined : ((json['ims'] as Array<any>).map(AttributeFromJSON)),
        'photos': !exists(json, 'photos') ? undefined : ((json['photos'] as Array<any>).map(AttributeFromJSON)),
        'entitlements': !exists(json, 'entitlements') ? undefined : json['entitlements'],
        'addresses': !exists(json, 'addresses') ? undefined : ((json['addresses'] as Array<any>).map(AddressFromJSON)),
        'roles': !exists(json, 'roles') ? undefined : json['roles'],
        'dynamicRoles': !exists(json, 'dynamicRoles') ? undefined : json['dynamicRoles'],
        'dynamicGroups': !exists(json, 'dynamicGroups') ? undefined : json['dynamicGroups'],
        'rolesPermissions': !exists(json, 'rolesPermissions') ? undefined : (new Set((json['rolesPermissions'] as Array<any>).map(RoleFromJSON))),
        'groups': !exists(json, 'groups') ? undefined : json['groups'],
        'x509Certificates': !exists(json, 'x509Certificates') ? undefined : ((json['x509Certificates'] as Array<any>).map(CertificateFromJSON)),
        'accountNonExpired': !exists(json, 'accountNonExpired') ? undefined : json['accountNonExpired'],
        'accountNonLocked': !exists(json, 'accountNonLocked') ? undefined : json['accountNonLocked'],
        'accountLockedAt': !exists(json, 'accountLockedAt') ? undefined : (new Date(json['accountLockedAt'])),
        'accountLockedUntil': !exists(json, 'accountLockedUntil') ? undefined : (new Date(json['accountLockedUntil'])),
        'credentialsNonExpired': !exists(json, 'credentialsNonExpired') ? undefined : json['credentialsNonExpired'],
        'enabled': !exists(json, 'enabled') ? undefined : json['enabled'],
        'internal': !exists(json, 'internal') ? undefined : json['internal'],
        'preRegistration': !exists(json, 'preRegistration') ? undefined : json['preRegistration'],
        'registrationCompleted': !exists(json, 'registrationCompleted') ? undefined : json['registrationCompleted'],
        'newsletter': !exists(json, 'newsletter') ? undefined : json['newsletter'],
        'registrationUserUri': !exists(json, 'registrationUserUri') ? undefined : json['registrationUserUri'],
        'registrationAccessToken': !exists(json, 'registrationAccessToken') ? undefined : json['registrationAccessToken'],
        'referenceType': !exists(json, 'referenceType') ? undefined : json['referenceType'],
        'referenceId': !exists(json, 'referenceId') ? undefined : json['referenceId'],
        'source': !exists(json, 'source') ? undefined : json['source'],
        'client': !exists(json, 'client') ? undefined : json['client'],
        'loginsCount': !exists(json, 'loginsCount') ? undefined : json['loginsCount'],
        'factors': !exists(json, 'factors') ? undefined : ((json['factors'] as Array<any>).map(EnrolledFactorFromJSON)),
        'identities': !exists(json, 'identities') ? undefined : ((json['identities'] as Array<any>).map(UserIdentityFromJSON)),
        'lastIdentityUsed': !exists(json, 'lastIdentityUsed') ? undefined : json['lastIdentityUsed'],
        'additionalInformation': !exists(json, 'additionalInformation') ? undefined : json['additionalInformation'],
        'loggedAt': !exists(json, 'loggedAt') ? undefined : (new Date(json['loggedAt'])),
        'lastLoginWithCredentials': !exists(json, 'lastLoginWithCredentials') ? undefined : (new Date(json['lastLoginWithCredentials'])),
        'lastPasswordReset': !exists(json, 'lastPasswordReset') ? undefined : (new Date(json['lastPasswordReset'])),
        'lastUsernameReset': !exists(json, 'lastUsernameReset') ? undefined : (new Date(json['lastUsernameReset'])),
        'lastLogoutAt': !exists(json, 'lastLogoutAt') ? undefined : (new Date(json['lastLogoutAt'])),
        'mfaEnrollmentSkippedAt': !exists(json, 'mfaEnrollmentSkippedAt') ? undefined : (new Date(json['mfaEnrollmentSkippedAt'])),
        'createdAt': !exists(json, 'createdAt') ? undefined : (new Date(json['createdAt'])),
        'updatedAt': !exists(json, 'updatedAt') ? undefined : (new Date(json['updatedAt'])),
        'forceResetPassword': !exists(json, 'forceResetPassword') ? undefined : json['forceResetPassword'],
        'serviceAccount': !exists(json, 'serviceAccount') ? undefined : json['serviceAccount'],
        'applicationEntity': !exists(json, 'applicationEntity') ? undefined : ApplicationEntityFromJSON(json['applicationEntity']),
        'sourceId': !exists(json, 'sourceId') ? undefined : json['sourceId'],
        'locale': !exists(json, 'locale') ? undefined : json['locale'],
        'zoneInfo': !exists(json, 'zoneInfo') ? undefined : json['zoneInfo'],
        'address': !exists(json, 'address') ? undefined : json['address'],
        'middleName': !exists(json, 'middleName') ? undefined : json['middleName'],
        'lastIdentityInformation': !exists(json, 'lastIdentityInformation') ? undefined : json['lastIdentityInformation'],
        'identitiesAsMap': !exists(json, 'identitiesAsMap') ? undefined : json['identitiesAsMap'],
        'birthdate': !exists(json, 'birthdate') ? undefined : json['birthdate'],
        'phoneNumber': !exists(json, 'phoneNumber') ? undefined : json['phoneNumber'],
        'inactive': !exists(json, 'inactive') ? undefined : json['inactive'],
        'profile': !exists(json, 'profile') ? undefined : json['profile'],
        'website': !exists(json, 'website') ? undefined : json['website'],
        'fullId': !exists(json, 'fullId') ? undefined : UserIdFromJSON(json['fullId']),
    };
}

export function UserEntityToJSON(value?: UserEntity | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'id': value.id,
        'externalId': value.externalId,
        'username': value.username,
        'password': value.password,
        'email': value.email,
        'displayName': value.displayName,
        'nickName': value.nickName,
        'firstName': value.firstName,
        'lastName': value.lastName,
        'title': value.title,
        'type': value.type,
        'preferredLanguage': value.preferredLanguage,
        'picture': value.picture,
        'emails': value.emails === undefined ? undefined : ((value.emails as Array<any>).map(AttributeToJSON)),
        'phoneNumbers': value.phoneNumbers === undefined ? undefined : ((value.phoneNumbers as Array<any>).map(AttributeToJSON)),
        'ims': value.ims === undefined ? undefined : ((value.ims as Array<any>).map(AttributeToJSON)),
        'photos': value.photos === undefined ? undefined : ((value.photos as Array<any>).map(AttributeToJSON)),
        'entitlements': value.entitlements,
        'addresses': value.addresses === undefined ? undefined : ((value.addresses as Array<any>).map(AddressToJSON)),
        'roles': value.roles,
        'dynamicRoles': value.dynamicRoles,
        'dynamicGroups': value.dynamicGroups,
        'rolesPermissions': value.rolesPermissions === undefined ? undefined : (Array.from(value.rolesPermissions as Set<any>).map(RoleToJSON)),
        'groups': value.groups,
        'x509Certificates': value.x509Certificates === undefined ? undefined : ((value.x509Certificates as Array<any>).map(CertificateToJSON)),
        'accountNonExpired': value.accountNonExpired,
        'accountNonLocked': value.accountNonLocked,
        'accountLockedAt': value.accountLockedAt === undefined ? undefined : (value.accountLockedAt.toISOString()),
        'accountLockedUntil': value.accountLockedUntil === undefined ? undefined : (value.accountLockedUntil.toISOString()),
        'credentialsNonExpired': value.credentialsNonExpired,
        'enabled': value.enabled,
        'internal': value.internal,
        'preRegistration': value.preRegistration,
        'registrationCompleted': value.registrationCompleted,
        'newsletter': value.newsletter,
        'registrationUserUri': value.registrationUserUri,
        'registrationAccessToken': value.registrationAccessToken,
        'referenceType': value.referenceType,
        'referenceId': value.referenceId,
        'source': value.source,
        'client': value.client,
        'loginsCount': value.loginsCount,
        'factors': value.factors === undefined ? undefined : ((value.factors as Array<any>).map(EnrolledFactorToJSON)),
        'identities': value.identities === undefined ? undefined : ((value.identities as Array<any>).map(UserIdentityToJSON)),
        'lastIdentityUsed': value.lastIdentityUsed,
        'additionalInformation': value.additionalInformation,
        'loggedAt': value.loggedAt === undefined ? undefined : (value.loggedAt.toISOString()),
        'lastLoginWithCredentials': value.lastLoginWithCredentials === undefined ? undefined : (value.lastLoginWithCredentials.toISOString()),
        'lastPasswordReset': value.lastPasswordReset === undefined ? undefined : (value.lastPasswordReset.toISOString()),
        'lastUsernameReset': value.lastUsernameReset === undefined ? undefined : (value.lastUsernameReset.toISOString()),
        'lastLogoutAt': value.lastLogoutAt === undefined ? undefined : (value.lastLogoutAt.toISOString()),
        'mfaEnrollmentSkippedAt': value.mfaEnrollmentSkippedAt === undefined ? undefined : (value.mfaEnrollmentSkippedAt.toISOString()),
        'createdAt': value.createdAt === undefined ? undefined : (value.createdAt.toISOString()),
        'updatedAt': value.updatedAt === undefined ? undefined : (value.updatedAt.toISOString()),
        'forceResetPassword': value.forceResetPassword,
        'serviceAccount': value.serviceAccount,
        'applicationEntity': ApplicationEntityToJSON(value.applicationEntity),
        'sourceId': value.sourceId,
        'locale': value.locale,
        'zoneInfo': value.zoneInfo,
        'address': value.address,
        'middleName': value.middleName,
        'lastIdentityInformation': value.lastIdentityInformation,
        'identitiesAsMap': value.identitiesAsMap,
        'birthdate': value.birthdate,
        'phoneNumber': value.phoneNumber,
        'inactive': value.inactive,
        'profile': value.profile,
        'website': value.website,
        'fullId': UserIdToJSON(value.fullId),
    };
}

