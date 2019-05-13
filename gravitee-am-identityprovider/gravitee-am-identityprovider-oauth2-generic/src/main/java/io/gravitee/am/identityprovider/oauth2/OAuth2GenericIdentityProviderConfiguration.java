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
package io.gravitee.am.identityprovider.oauth2;

import io.gravitee.am.identityprovider.api.oauth2.OAuth2IdentityProviderConfiguration;
import io.gravitee.am.identityprovider.oauth2.jwt.algo.Signature;
import io.gravitee.am.identityprovider.oauth2.resolver.KeyResolver;

import java.util.Set;

/**
 * @author Titouan COMPIEGNE (titouan.compiegne at graviteesource.com)
 * @author GraviteeSource Team
 */
public class OAuth2GenericIdentityProviderConfiguration implements OAuth2IdentityProviderConfiguration {

    private static final String CODE_PARAMETER = "code";
    private String clientId;
    private String clientSecret;
    private String wellKnownUri;
    private String userAuthorizationUri;
    private String accessTokenUri;
    private String userProfileUri;
    private Set<String> scopes;
    private String responseType;
    private boolean useIdTokenForUserInfo;
    private Signature signature = Signature.RSA_RS256;
    private KeyResolver publicKeyResolver;
    private String resolverParameter;

    @Override
    public String getClientId() {
        return clientId;
    }

    public void setClientId(String clientId) {
        this.clientId = clientId;
    }

    @Override
    public String getClientSecret() {
        return clientSecret;
    }

    public void setClientSecret(String clientSecret) {
        this.clientSecret = clientSecret;
    }

    public String getWellKnownUri() {
        return wellKnownUri;
    }

    public void setWellKnownUri(String wellKnownUri) {
        this.wellKnownUri = wellKnownUri;
    }

    @Override
    public String getUserAuthorizationUri() {
        return userAuthorizationUri;
    }

    public void setUserAuthorizationUri(String userAuthorizationUri) {
        this.userAuthorizationUri = userAuthorizationUri;
    }

    @Override
    public String getAccessTokenUri() {
        return accessTokenUri;
    }

    public void setAccessTokenUri(String accessTokenUri) {
        this.accessTokenUri = accessTokenUri;
    }

    @Override
    public String getUserProfileUri() {
        return userProfileUri;
    }

    public void setUserProfileUri(String userProfileUri) {
        this.userProfileUri = userProfileUri;
    }

    @Override
    public String getCodeParameter() {
        return CODE_PARAMETER;
    }

    @Override
    public Set<String> getScopes() {
        return scopes;
    }

    public void setScopes(Set<String> scopes) {
        this.scopes = scopes;
    }

    @Override
    public String getResponseType() {
        return responseType;
    }

    public void setResponseType(String responseType) {
        this.responseType = responseType;
    }

    public boolean isUseIdTokenForUserInfo() {
        return useIdTokenForUserInfo;
    }

    public void setUseIdTokenForUserInfo(boolean useIdTokenForUserInfo) {
        this.useIdTokenForUserInfo = useIdTokenForUserInfo;
    }

    public Signature getSignature() {
        return signature;
    }

    public void setSignature(Signature signature) {
        this.signature = signature;
    }

    public KeyResolver getPublicKeyResolver() {
        return publicKeyResolver;
    }

    public void setPublicKeyResolver(KeyResolver publicKeyResolver) {
        this.publicKeyResolver = publicKeyResolver;
    }

    public String getResolverParameter() {
        return resolverParameter;
    }

    public void setResolverParameter(String resolverParameter) {
        this.resolverParameter = resolverParameter;
    }
}
