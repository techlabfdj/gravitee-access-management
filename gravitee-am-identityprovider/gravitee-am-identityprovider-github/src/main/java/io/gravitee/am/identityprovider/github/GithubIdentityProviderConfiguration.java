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
package io.gravitee.am.identityprovider.github;

import io.gravitee.am.identityprovider.api.social.SocialIdentityProviderConfiguration;

import java.util.Set;

/**
 * @author Titouan COMPIEGNE (titouan.compiegne at graviteesource.com)
 * @author GraviteeSource Team
 */
public class GithubIdentityProviderConfiguration implements SocialIdentityProviderConfiguration {

    private String userAuthorizationUri = "https://github.com/login/oauth/authorize";
    private String accessTokenUri = "https://github.com/login/oauth/access_token";
    private String userProfileUri = "https://api.github.com/user";
    private final String codeParameter = "code";
    private final String responseType = "code";
    private String clientId;
    private String clientSecret;
    private Set<String> scopes;
    private Integer connectTimeout = 10000;
    private Integer idleTimeout = 10000;
    private Integer maxPoolSize = 200;
    private boolean storeOriginalTokens = false;

    public String getClientId() {
        return clientId;
    }

    public void setClientId(String clientId) {
        this.clientId = clientId;
    }

    public String getClientSecret() {
        return clientSecret;
    }

    public void setClientSecret(String clientSecret) {
        this.clientSecret = clientSecret;
    }

    public Set<String> getScopes() {
        return scopes;
    }

    public void setScopes(Set<String> scopes) {
        this.scopes = scopes;
    }

    public String getUserAuthorizationUri() {
        return userAuthorizationUri;
    }

    public String getAccessTokenUri() {
        return accessTokenUri;
    }

    public String getUserProfileUri() {
        return userProfileUri;
    }

    public String getCodeParameter() {
        return codeParameter;
    }

    public String getResponseType() {
        return responseType;
    }

    public void setUserAuthorizationUri(String userAuthorizationUri) {
        this.userAuthorizationUri = userAuthorizationUri;
    }

    public void setAccessTokenUri(String accessTokenUri) {
        this.accessTokenUri = accessTokenUri;
    }

    public void setUserProfileUri(String userProfileUri) {
        this.userProfileUri = userProfileUri;
    }

    public Integer getConnectTimeout() {
        return connectTimeout;
    }

    public void setConnectTimeout(Integer connectTimeout) {
        this.connectTimeout = connectTimeout;
    }

    public Integer getIdleTimeout() {
        return idleTimeout;
    }

    public void setIdleTimeout(Integer idleTimeout) {
        this.idleTimeout = idleTimeout;
    }

    public Integer getMaxPoolSize() {
        return maxPoolSize;
    }

    public void setMaxPoolSize(Integer maxPoolSize) {
        this.maxPoolSize = maxPoolSize;
    }

    @Override
    public String getLogoutUri() {
        return null;
    }

    @Override
    public boolean isStoreOriginalTokens() {
        return storeOriginalTokens;
    }

    public void setStoreOriginalTokens(boolean storeOriginalTokens) {
        this.storeOriginalTokens = storeOriginalTokens;
    }
}
