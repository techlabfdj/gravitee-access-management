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
/* tslint:disable */
/* eslint-disable */
/**
 * Gravitee.io - Access Management API
 * No description provided (generated by Openapi Generator https://github.com/openapitools/openapi-generator)
 *
 *
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import * as runtime from '../runtime';

export interface Get36Request {
  deviceIdentifier: string;
}

export interface GetSchema10Request {
  deviceIdentifier: string;
}

/**
 *
 */
export class DeviceIdentifierApi extends runtime.BaseAPI {
  /**
   * There is no particular permission needed. User must be authenticated.
   * Get a device identifier plugin
   */
  async get36Raw(
    requestParameters: Get36Request,
    initOverrides?: RequestInit | runtime.InitOverideFunction,
  ): Promise<runtime.ApiResponse<void>> {
    if (requestParameters.deviceIdentifier === null || requestParameters.deviceIdentifier === undefined) {
      throw new runtime.RequiredError(
        'deviceIdentifier',
        'Required parameter requestParameters.deviceIdentifier was null or undefined when calling get36.',
      );
    }

    const queryParameters: any = {};

    const headerParameters: runtime.HTTPHeaders = {};

    if (this.configuration && this.configuration.apiKey) {
      headerParameters['Authorization'] = this.configuration.apiKey('Authorization'); // gravitee-auth authentication
    }

    const response = await this.request(
      {
        path: `/platform/plugins/device-identifiers/{deviceIdentifier}`.replace(
          `{${'deviceIdentifier'}}`,
          encodeURIComponent(String(requestParameters.deviceIdentifier)),
        ),
        method: 'GET',
        headers: headerParameters,
        query: queryParameters,
      },
      initOverrides,
    );

    return new runtime.VoidApiResponse(response);
  }

  /**
   * There is no particular permission needed. User must be authenticated.
   * Get a device identifier plugin
   */
  async get36(requestParameters: Get36Request, initOverrides?: RequestInit | runtime.InitOverideFunction): Promise<void> {
    await this.get36Raw(requestParameters, initOverrides);
  }

  /**
   * There is no particular permission needed. User must be authenticated.
   * Get a device identifier plugin\'s schema
   */
  async getSchema10Raw(
    requestParameters: GetSchema10Request,
    initOverrides?: RequestInit | runtime.InitOverideFunction,
  ): Promise<runtime.ApiResponse<void>> {
    if (requestParameters.deviceIdentifier === null || requestParameters.deviceIdentifier === undefined) {
      throw new runtime.RequiredError(
        'deviceIdentifier',
        'Required parameter requestParameters.deviceIdentifier was null or undefined when calling getSchema10.',
      );
    }

    const queryParameters: any = {};

    const headerParameters: runtime.HTTPHeaders = {};

    if (this.configuration && this.configuration.apiKey) {
      headerParameters['Authorization'] = this.configuration.apiKey('Authorization'); // gravitee-auth authentication
    }

    const response = await this.request(
      {
        path: `/platform/plugins/device-identifiers/{deviceIdentifier}/schema`.replace(
          `{${'deviceIdentifier'}}`,
          encodeURIComponent(String(requestParameters.deviceIdentifier)),
        ),
        method: 'GET',
        headers: headerParameters,
        query: queryParameters,
      },
      initOverrides,
    );

    return new runtime.VoidApiResponse(response);
  }

  /**
   * There is no particular permission needed. User must be authenticated.
   * Get a device identifier plugin\'s schema
   */
  async getSchema10(requestParameters: GetSchema10Request, initOverrides?: RequestInit | runtime.InitOverideFunction): Promise<void> {
    await this.getSchema10Raw(requestParameters, initOverrides);
  }

  /**
   * There is no particular permission needed. User must be authenticated.
   * List device identifier plugins
   */
  async list36Raw(initOverrides?: RequestInit | runtime.InitOverideFunction): Promise<runtime.ApiResponse<void>> {
    const queryParameters: any = {};

    const headerParameters: runtime.HTTPHeaders = {};

    if (this.configuration && this.configuration.apiKey) {
      headerParameters['Authorization'] = this.configuration.apiKey('Authorization'); // gravitee-auth authentication
    }

    const response = await this.request(
      {
        path: `/platform/plugins/device-identifiers`,
        method: 'GET',
        headers: headerParameters,
        query: queryParameters,
      },
      initOverrides,
    );

    return new runtime.VoidApiResponse(response);
  }

  /**
   * There is no particular permission needed. User must be authenticated.
   * List device identifier plugins
   */
  async list36(initOverrides?: RequestInit | runtime.InitOverideFunction): Promise<void> {
    await this.list36Raw(initOverrides);
  }
}
