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
import {
  NewServiceResource,
  NewServiceResourceFromJSON,
  NewServiceResourceToJSON,
  ServiceResource,
  ServiceResourceFromJSON,
  ServiceResourceToJSON,
  UpdateServiceResource,
  UpdateServiceResourceFromJSON,
  UpdateServiceResourceToJSON,
} from '../models';

export interface CreateResourceRequest {
  organizationId: string;
  environmentId: string;
  domain: string;
  resource: NewServiceResource;
}

export interface DeleteResourceRequest {
  organizationId: string;
  environmentId: string;
  domain: string;
  resource: string;
}

export interface Get32Request {
  resource: string;
}

export interface GetResourceRequest {
  organizationId: string;
  environmentId: string;
  domain: string;
  resource: string;
}

export interface GetSchema6Request {
  resource: string;
}

export interface List32Request {
  expand?: Array<string>;
}

export interface ListResourcesRequest {
  organizationId: string;
  environmentId: string;
  domain: string;
}

export interface UpdateResourceRequest {
  organizationId: string;
  environmentId: string;
  domain: string;
  resource: string;
  identity: UpdateServiceResource;
}

/**
 *
 */
export class ResourceApi extends runtime.BaseAPI {
  /**
   * User must have the DOMAIN_RESOURCE[CREATE] permission on the specified domain or DOMAIN_RESOURCE[CREATE] permission on the specified environment or DOMAIN_RESOURCE[CREATE] permission on the specified organization
   * Create a resource
   */
  async createResourceRaw(
    requestParameters: CreateResourceRequest,
    initOverrides?: RequestInit | runtime.InitOverideFunction,
  ): Promise<runtime.ApiResponse<ServiceResource>> {
    if (requestParameters.organizationId === null || requestParameters.organizationId === undefined) {
      throw new runtime.RequiredError(
        'organizationId',
        'Required parameter requestParameters.organizationId was null or undefined when calling createResource.',
      );
    }

    if (requestParameters.environmentId === null || requestParameters.environmentId === undefined) {
      throw new runtime.RequiredError(
        'environmentId',
        'Required parameter requestParameters.environmentId was null or undefined when calling createResource.',
      );
    }

    if (requestParameters.domain === null || requestParameters.domain === undefined) {
      throw new runtime.RequiredError(
        'domain',
        'Required parameter requestParameters.domain was null or undefined when calling createResource.',
      );
    }

    if (requestParameters.resource === null || requestParameters.resource === undefined) {
      throw new runtime.RequiredError(
        'resource',
        'Required parameter requestParameters.resource was null or undefined when calling createResource.',
      );
    }

    const queryParameters: any = {};

    const headerParameters: runtime.HTTPHeaders = {};

    headerParameters['Content-Type'] = 'application/json';

    if (this.configuration && this.configuration.apiKey) {
      headerParameters['Authorization'] = this.configuration.apiKey('Authorization'); // gravitee-auth authentication
    }

    const response = await this.request(
      {
        path: `/organizations/{organizationId}/environments/{environmentId}/domains/{domain}/resources`
          .replace(`{${'organizationId'}}`, encodeURIComponent(String(requestParameters.organizationId)))
          .replace(`{${'environmentId'}}`, encodeURIComponent(String(requestParameters.environmentId)))
          .replace(`{${'domain'}}`, encodeURIComponent(String(requestParameters.domain))),
        method: 'POST',
        headers: headerParameters,
        query: queryParameters,
        body: NewServiceResourceToJSON(requestParameters.resource),
      },
      initOverrides,
    );

    return new runtime.JSONApiResponse(response, (jsonValue) => ServiceResourceFromJSON(jsonValue));
  }

  /**
   * User must have the DOMAIN_RESOURCE[CREATE] permission on the specified domain or DOMAIN_RESOURCE[CREATE] permission on the specified environment or DOMAIN_RESOURCE[CREATE] permission on the specified organization
   * Create a resource
   */
  async createResource(
    requestParameters: CreateResourceRequest,
    initOverrides?: RequestInit | runtime.InitOverideFunction,
  ): Promise<ServiceResource> {
    const response = await this.createResourceRaw(requestParameters, initOverrides);
    return await response.value();
  }

  /**
   * User must have the DOMAIN_RESOURCE[DELETE] permission on the specified domain or DOMAIN_RESOURCE[DELETE] permission on the specified environment or DOMAIN_RESOURCE[DELETE] permission on the specified organization
   * Delete a resource
   */
  async deleteResourceRaw(
    requestParameters: DeleteResourceRequest,
    initOverrides?: RequestInit | runtime.InitOverideFunction,
  ): Promise<runtime.ApiResponse<void>> {
    if (requestParameters.organizationId === null || requestParameters.organizationId === undefined) {
      throw new runtime.RequiredError(
        'organizationId',
        'Required parameter requestParameters.organizationId was null or undefined when calling deleteResource.',
      );
    }

    if (requestParameters.environmentId === null || requestParameters.environmentId === undefined) {
      throw new runtime.RequiredError(
        'environmentId',
        'Required parameter requestParameters.environmentId was null or undefined when calling deleteResource.',
      );
    }

    if (requestParameters.domain === null || requestParameters.domain === undefined) {
      throw new runtime.RequiredError(
        'domain',
        'Required parameter requestParameters.domain was null or undefined when calling deleteResource.',
      );
    }

    if (requestParameters.resource === null || requestParameters.resource === undefined) {
      throw new runtime.RequiredError(
        'resource',
        'Required parameter requestParameters.resource was null or undefined when calling deleteResource.',
      );
    }

    const queryParameters: any = {};

    const headerParameters: runtime.HTTPHeaders = {};

    if (this.configuration && this.configuration.apiKey) {
      headerParameters['Authorization'] = this.configuration.apiKey('Authorization'); // gravitee-auth authentication
    }

    const response = await this.request(
      {
        path: `/organizations/{organizationId}/environments/{environmentId}/domains/{domain}/resources/{resource}`
          .replace(`{${'organizationId'}}`, encodeURIComponent(String(requestParameters.organizationId)))
          .replace(`{${'environmentId'}}`, encodeURIComponent(String(requestParameters.environmentId)))
          .replace(`{${'domain'}}`, encodeURIComponent(String(requestParameters.domain)))
          .replace(`{${'resource'}}`, encodeURIComponent(String(requestParameters.resource))),
        method: 'DELETE',
        headers: headerParameters,
        query: queryParameters,
      },
      initOverrides,
    );

    return new runtime.VoidApiResponse(response);
  }

  /**
   * User must have the DOMAIN_RESOURCE[DELETE] permission on the specified domain or DOMAIN_RESOURCE[DELETE] permission on the specified environment or DOMAIN_RESOURCE[DELETE] permission on the specified organization
   * Delete a resource
   */
  async deleteResource(requestParameters: DeleteResourceRequest, initOverrides?: RequestInit | runtime.InitOverideFunction): Promise<void> {
    await this.deleteResourceRaw(requestParameters, initOverrides);
  }

  /**
   * There is no particular permission needed. User must be authenticated.
   * Get a resource plugin
   */
  async get32Raw(
    requestParameters: Get32Request,
    initOverrides?: RequestInit | runtime.InitOverideFunction,
  ): Promise<runtime.ApiResponse<void>> {
    if (requestParameters.resource === null || requestParameters.resource === undefined) {
      throw new runtime.RequiredError(
        'resource',
        'Required parameter requestParameters.resource was null or undefined when calling get32.',
      );
    }

    const queryParameters: any = {};

    const headerParameters: runtime.HTTPHeaders = {};

    if (this.configuration && this.configuration.apiKey) {
      headerParameters['Authorization'] = this.configuration.apiKey('Authorization'); // gravitee-auth authentication
    }

    const response = await this.request(
      {
        path: `/platform/plugins/resources/{resource}`.replace(`{${'resource'}}`, encodeURIComponent(String(requestParameters.resource))),
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
   * Get a resource plugin
   */
  async get32(requestParameters: Get32Request, initOverrides?: RequestInit | runtime.InitOverideFunction): Promise<void> {
    await this.get32Raw(requestParameters, initOverrides);
  }

  /**
   * User must have the DOMAIN_RESOURCE[READ] permission on the specified domain or DOMAIN_RESOURCE[READ] permission on the specified environment or DOMAIN_RESOURCE[READ] permission on the specified organization
   * Get a resource
   */
  async getResourceRaw(
    requestParameters: GetResourceRequest,
    initOverrides?: RequestInit | runtime.InitOverideFunction,
  ): Promise<runtime.ApiResponse<ServiceResource>> {
    if (requestParameters.organizationId === null || requestParameters.organizationId === undefined) {
      throw new runtime.RequiredError(
        'organizationId',
        'Required parameter requestParameters.organizationId was null or undefined when calling getResource.',
      );
    }

    if (requestParameters.environmentId === null || requestParameters.environmentId === undefined) {
      throw new runtime.RequiredError(
        'environmentId',
        'Required parameter requestParameters.environmentId was null or undefined when calling getResource.',
      );
    }

    if (requestParameters.domain === null || requestParameters.domain === undefined) {
      throw new runtime.RequiredError(
        'domain',
        'Required parameter requestParameters.domain was null or undefined when calling getResource.',
      );
    }

    if (requestParameters.resource === null || requestParameters.resource === undefined) {
      throw new runtime.RequiredError(
        'resource',
        'Required parameter requestParameters.resource was null or undefined when calling getResource.',
      );
    }

    const queryParameters: any = {};

    const headerParameters: runtime.HTTPHeaders = {};

    if (this.configuration && this.configuration.apiKey) {
      headerParameters['Authorization'] = this.configuration.apiKey('Authorization'); // gravitee-auth authentication
    }

    const response = await this.request(
      {
        path: `/organizations/{organizationId}/environments/{environmentId}/domains/{domain}/resources/{resource}`
          .replace(`{${'organizationId'}}`, encodeURIComponent(String(requestParameters.organizationId)))
          .replace(`{${'environmentId'}}`, encodeURIComponent(String(requestParameters.environmentId)))
          .replace(`{${'domain'}}`, encodeURIComponent(String(requestParameters.domain)))
          .replace(`{${'resource'}}`, encodeURIComponent(String(requestParameters.resource))),
        method: 'GET',
        headers: headerParameters,
        query: queryParameters,
      },
      initOverrides,
    );

    return new runtime.JSONApiResponse(response, (jsonValue) => ServiceResourceFromJSON(jsonValue));
  }

  /**
   * User must have the DOMAIN_RESOURCE[READ] permission on the specified domain or DOMAIN_RESOURCE[READ] permission on the specified environment or DOMAIN_RESOURCE[READ] permission on the specified organization
   * Get a resource
   */
  async getResource(
    requestParameters: GetResourceRequest,
    initOverrides?: RequestInit | runtime.InitOverideFunction,
  ): Promise<ServiceResource> {
    const response = await this.getResourceRaw(requestParameters, initOverrides);
    return await response.value();
  }

  /**
   * There is no particular permission needed. User must be authenticated.
   * Get a resource plugin\'s schema
   */
  async getSchema6Raw(
    requestParameters: GetSchema6Request,
    initOverrides?: RequestInit | runtime.InitOverideFunction,
  ): Promise<runtime.ApiResponse<void>> {
    if (requestParameters.resource === null || requestParameters.resource === undefined) {
      throw new runtime.RequiredError(
        'resource',
        'Required parameter requestParameters.resource was null or undefined when calling getSchema6.',
      );
    }

    const queryParameters: any = {};

    const headerParameters: runtime.HTTPHeaders = {};

    if (this.configuration && this.configuration.apiKey) {
      headerParameters['Authorization'] = this.configuration.apiKey('Authorization'); // gravitee-auth authentication
    }

    const response = await this.request(
      {
        path: `/platform/plugins/resources/{resource}/schema`.replace(
          `{${'resource'}}`,
          encodeURIComponent(String(requestParameters.resource)),
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
   * Get a resource plugin\'s schema
   */
  async getSchema6(requestParameters: GetSchema6Request, initOverrides?: RequestInit | runtime.InitOverideFunction): Promise<void> {
    await this.getSchema6Raw(requestParameters, initOverrides);
  }

  /**
   * There is no particular permission needed. User must be authenticated.
   * List resource plugins
   */
  async list32Raw(
    requestParameters: List32Request,
    initOverrides?: RequestInit | runtime.InitOverideFunction,
  ): Promise<runtime.ApiResponse<void>> {
    const queryParameters: any = {};

    if (requestParameters.expand) {
      queryParameters['expand'] = requestParameters.expand;
    }

    const headerParameters: runtime.HTTPHeaders = {};

    if (this.configuration && this.configuration.apiKey) {
      headerParameters['Authorization'] = this.configuration.apiKey('Authorization'); // gravitee-auth authentication
    }

    const response = await this.request(
      {
        path: `/platform/plugins/resources`,
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
   * List resource plugins
   */
  async list32(requestParameters: List32Request = {}, initOverrides?: RequestInit | runtime.InitOverideFunction): Promise<void> {
    await this.list32Raw(requestParameters, initOverrides);
  }

  /**
   * User must have the DOMAIN_RESOURCE[LIST] permission on the specified domain or DOMAIN_RESOURCE[LIST] permission on the specified environment or DOMAIN_RESOURCE[LIST] permission on the specified organization Each returned resource is filtered and contains only basic information such as id, name and resource type.
   * List registered resources for a security domain
   */
  async listResourcesRaw(
    requestParameters: ListResourcesRequest,
    initOverrides?: RequestInit | runtime.InitOverideFunction,
  ): Promise<runtime.ApiResponse<Array<ServiceResource>>> {
    if (requestParameters.organizationId === null || requestParameters.organizationId === undefined) {
      throw new runtime.RequiredError(
        'organizationId',
        'Required parameter requestParameters.organizationId was null or undefined when calling listResources.',
      );
    }

    if (requestParameters.environmentId === null || requestParameters.environmentId === undefined) {
      throw new runtime.RequiredError(
        'environmentId',
        'Required parameter requestParameters.environmentId was null or undefined when calling listResources.',
      );
    }

    if (requestParameters.domain === null || requestParameters.domain === undefined) {
      throw new runtime.RequiredError(
        'domain',
        'Required parameter requestParameters.domain was null or undefined when calling listResources.',
      );
    }

    const queryParameters: any = {};

    const headerParameters: runtime.HTTPHeaders = {};

    if (this.configuration && this.configuration.apiKey) {
      headerParameters['Authorization'] = this.configuration.apiKey('Authorization'); // gravitee-auth authentication
    }

    const response = await this.request(
      {
        path: `/organizations/{organizationId}/environments/{environmentId}/domains/{domain}/resources`
          .replace(`{${'organizationId'}}`, encodeURIComponent(String(requestParameters.organizationId)))
          .replace(`{${'environmentId'}}`, encodeURIComponent(String(requestParameters.environmentId)))
          .replace(`{${'domain'}}`, encodeURIComponent(String(requestParameters.domain))),
        method: 'GET',
        headers: headerParameters,
        query: queryParameters,
      },
      initOverrides,
    );

    return new runtime.JSONApiResponse(response, (jsonValue) => jsonValue.map(ServiceResourceFromJSON));
  }

  /**
   * User must have the DOMAIN_RESOURCE[LIST] permission on the specified domain or DOMAIN_RESOURCE[LIST] permission on the specified environment or DOMAIN_RESOURCE[LIST] permission on the specified organization Each returned resource is filtered and contains only basic information such as id, name and resource type.
   * List registered resources for a security domain
   */
  async listResources(
    requestParameters: ListResourcesRequest,
    initOverrides?: RequestInit | runtime.InitOverideFunction,
  ): Promise<Array<ServiceResource>> {
    const response = await this.listResourcesRaw(requestParameters, initOverrides);
    return await response.value();
  }

  /**
   * User must have the DOMAIN_RESOURCE[UPDATE] permission on the specified domain or DOMAIN_RESOURCE[UPDATE] permission on the specified environment or DOMAIN_RESOURCE[UPDATE] permission on the specified organization
   * Update a resource
   */
  async updateResourceRaw(
    requestParameters: UpdateResourceRequest,
    initOverrides?: RequestInit | runtime.InitOverideFunction,
  ): Promise<runtime.ApiResponse<ServiceResource>> {
    if (requestParameters.organizationId === null || requestParameters.organizationId === undefined) {
      throw new runtime.RequiredError(
        'organizationId',
        'Required parameter requestParameters.organizationId was null or undefined when calling updateResource.',
      );
    }

    if (requestParameters.environmentId === null || requestParameters.environmentId === undefined) {
      throw new runtime.RequiredError(
        'environmentId',
        'Required parameter requestParameters.environmentId was null or undefined when calling updateResource.',
      );
    }

    if (requestParameters.domain === null || requestParameters.domain === undefined) {
      throw new runtime.RequiredError(
        'domain',
        'Required parameter requestParameters.domain was null or undefined when calling updateResource.',
      );
    }

    if (requestParameters.resource === null || requestParameters.resource === undefined) {
      throw new runtime.RequiredError(
        'resource',
        'Required parameter requestParameters.resource was null or undefined when calling updateResource.',
      );
    }

    if (requestParameters.identity === null || requestParameters.identity === undefined) {
      throw new runtime.RequiredError(
        'identity',
        'Required parameter requestParameters.identity was null or undefined when calling updateResource.',
      );
    }

    const queryParameters: any = {};

    const headerParameters: runtime.HTTPHeaders = {};

    headerParameters['Content-Type'] = 'application/json';

    if (this.configuration && this.configuration.apiKey) {
      headerParameters['Authorization'] = this.configuration.apiKey('Authorization'); // gravitee-auth authentication
    }

    const response = await this.request(
      {
        path: `/organizations/{organizationId}/environments/{environmentId}/domains/{domain}/resources/{resource}`
          .replace(`{${'organizationId'}}`, encodeURIComponent(String(requestParameters.organizationId)))
          .replace(`{${'environmentId'}}`, encodeURIComponent(String(requestParameters.environmentId)))
          .replace(`{${'domain'}}`, encodeURIComponent(String(requestParameters.domain)))
          .replace(`{${'resource'}}`, encodeURIComponent(String(requestParameters.resource))),
        method: 'PUT',
        headers: headerParameters,
        query: queryParameters,
        body: UpdateServiceResourceToJSON(requestParameters.identity),
      },
      initOverrides,
    );

    return new runtime.JSONApiResponse(response, (jsonValue) => ServiceResourceFromJSON(jsonValue));
  }

  /**
   * User must have the DOMAIN_RESOURCE[UPDATE] permission on the specified domain or DOMAIN_RESOURCE[UPDATE] permission on the specified environment or DOMAIN_RESOURCE[UPDATE] permission on the specified organization
   * Update a resource
   */
  async updateResource(
    requestParameters: UpdateResourceRequest,
    initOverrides?: RequestInit | runtime.InitOverideFunction,
  ): Promise<ServiceResource> {
    const response = await this.updateResourceRaw(requestParameters, initOverrides);
    return await response.value();
  }
}
