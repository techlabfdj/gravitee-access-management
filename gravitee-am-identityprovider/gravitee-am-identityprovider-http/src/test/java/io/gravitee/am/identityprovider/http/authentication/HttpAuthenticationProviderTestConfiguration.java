/**
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
package io.gravitee.am.identityprovider.http.authentication;

import io.gravitee.am.identityprovider.api.AuthenticationProvider;
import io.gravitee.am.identityprovider.api.DefaultIdentityProviderGroupMapper;
import io.gravitee.am.identityprovider.api.DefaultIdentityProviderMapper;
import io.gravitee.am.identityprovider.api.DefaultIdentityProviderRoleMapper;
import io.gravitee.am.identityprovider.api.IdentityProviderMapper;
import io.gravitee.am.identityprovider.api.IdentityProviderRoleMapper;
import io.gravitee.am.identityprovider.http.configuration.HttpIdentityProviderConfiguration;
import io.gravitee.am.identityprovider.http.configuration.HttpResourceConfiguration;
import io.gravitee.am.identityprovider.http.configuration.HttpResponseErrorCondition;
import io.gravitee.am.service.http.WebClientBuilder;
import io.gravitee.common.http.HttpHeader;
import io.gravitee.common.http.HttpMethod;
import io.vertx.core.json.JsonObject;
import io.vertx.rxjava3.core.Vertx;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.core.env.Environment;

import java.util.Arrays;
import java.util.Collections;

/**
 * @author Titouan COMPIEGNE (titouan.compiegne at graviteesource.com)
 * @author GraviteeSource Team
 */
@Configuration
public class HttpAuthenticationProviderTestConfiguration {

    @Autowired
    private Environment environment;

    @Bean
    public HttpIdentityProviderConfiguration httpIdentityProviderConfiguration() {
        HttpIdentityProviderConfiguration configuration = new HttpIdentityProviderConfiguration();
        HttpResourceConfiguration httpResourceConfiguration = new HttpResourceConfiguration();
        httpResourceConfiguration.setBaseURL("http://localhost:19999/api/authentication");
        httpResourceConfiguration.setHttpMethod(HttpMethod.POST);
        HttpHeader httpHeader = new HttpHeader();
        httpHeader.setName("Content-Type");
        httpHeader.setValue("application/json");
        httpResourceConfiguration.setHttpHeaders(Collections.singletonList(httpHeader));
        JsonObject jsonObject = new JsonObject();
        jsonObject.put("username", "{#principal}");
        jsonObject.put("password", "{#credentials}");
        httpResourceConfiguration.setHttpBody(jsonObject.encode());
        HttpResponseErrorCondition errorCondition = new HttpResponseErrorCondition();
        errorCondition.setValue("{#authenticationResponse.status == 401}");
        errorCondition.setException("io.gravitee.am.common.exception.authentication.BadCredentialsException");
        HttpResponseErrorCondition errorCondition2 = new HttpResponseErrorCondition();
        errorCondition2.setValue("{#authenticationResponse.status == 404}");
        errorCondition2.setException("io.gravitee.am.common.exception.authentication.UsernameNotFoundException");
        httpResourceConfiguration.setHttpResponseErrorConditions(Arrays.asList(errorCondition, errorCondition2));
        configuration.setAuthenticationResource(httpResourceConfiguration);

        return configuration;
    }

    @Bean
    public AuthenticationProvider authenticationProvider() {
        return new HttpAuthenticationProvider();
    }

    @Bean
    public IdentityProviderMapper mapper() {
        return new DefaultIdentityProviderMapper();
    }

    @Bean
    public IdentityProviderRoleMapper roleMapper() {
        return new DefaultIdentityProviderRoleMapper();
    }

    @Bean
    public DefaultIdentityProviderGroupMapper groupMapper() {
        return new DefaultIdentityProviderGroupMapper();
    }

    @Bean
    public Vertx vertx() {
        return Vertx.vertx();
    }

    @Bean
    public WebClientBuilder webClientBuilder() {
        return new WebClientBuilder(environment);
    }
}
