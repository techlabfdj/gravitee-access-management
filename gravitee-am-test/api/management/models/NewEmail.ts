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
 * @interface NewEmail
 */
export interface NewEmail {
  /**
   *
   * @type {boolean}
   * @memberof NewEmail
   */
  enabled?: boolean;
  /**
   *
   * @type {string}
   * @memberof NewEmail
   */
  from: string;
  /**
   *
   * @type {string}
   * @memberof NewEmail
   */
  fromName?: string;
  /**
   *
   * @type {string}
   * @memberof NewEmail
   */
  subject: string;
  /**
   *
   * @type {string}
   * @memberof NewEmail
   */
  content: string;
  /**
   *
   * @type {number}
   * @memberof NewEmail
   */
  expiresAfter: number;
  /**
   *
   * @type {string}
   * @memberof NewEmail
   */
  template: NewEmailTemplateEnum;
}

/**
 * @export
 */
export const NewEmailTemplateEnum = {
  Login: 'LOGIN',
  Registration: 'REGISTRATION',
  RegistrationConfirmation: 'REGISTRATION_CONFIRMATION',
  RegistrationVerify: 'REGISTRATION_VERIFY',
  ForgotPassword: 'FORGOT_PASSWORD',
  ResetPassword: 'RESET_PASSWORD',
  Oauth2UserConsent: 'OAUTH2_USER_CONSENT',
  MfaEnroll: 'MFA_ENROLL',
  MfaChallenge: 'MFA_CHALLENGE',
  MfaChallengeAlternatives: 'MFA_CHALLENGE_ALTERNATIVES',
  MfaRecoveryCode: 'MFA_RECOVERY_CODE',
  BlockedAccount: 'BLOCKED_ACCOUNT',
  CompleteProfile: 'COMPLETE_PROFILE',
  WebauthnRegister: 'WEBAUTHN_REGISTER',
  WebauthnRegisterSuccess: 'WEBAUTHN_REGISTER_SUCCESS',
  WebauthnLogin: 'WEBAUTHN_LOGIN',
  IdentifierFirstLogin: 'IDENTIFIER_FIRST_LOGIN',
  Error: 'ERROR',
  CertificateExpiration: 'CERTIFICATE_EXPIRATION',
  VerifyAttempt: 'VERIFY_ATTEMPT',
} as const;
export type NewEmailTemplateEnum = typeof NewEmailTemplateEnum[keyof typeof NewEmailTemplateEnum];

export function NewEmailFromJSON(json: any): NewEmail {
  return NewEmailFromJSONTyped(json, false);
}

export function NewEmailFromJSONTyped(json: any, ignoreDiscriminator: boolean): NewEmail {
  if (json === undefined || json === null) {
    return json;
  }
  return {
    enabled: !exists(json, 'enabled') ? undefined : json['enabled'],
    from: json['from'],
    fromName: !exists(json, 'fromName') ? undefined : json['fromName'],
    subject: json['subject'],
    content: json['content'],
    expiresAfter: json['expiresAfter'],
    template: json['template'],
  };
}

export function NewEmailToJSON(value?: NewEmail | null): any {
  if (value === undefined) {
    return undefined;
  }
  if (value === null) {
    return null;
  }
  return {
    enabled: value.enabled,
    from: value.from,
    fromName: value.fromName,
    subject: value.subject,
    content: value.content,
    expiresAfter: value.expiresAfter,
    template: value.template,
  };
}
