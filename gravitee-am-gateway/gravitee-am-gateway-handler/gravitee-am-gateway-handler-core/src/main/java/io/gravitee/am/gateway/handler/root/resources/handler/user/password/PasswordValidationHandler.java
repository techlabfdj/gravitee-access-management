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
package io.gravitee.am.gateway.handler.root.resources.handler.user.password;

import io.gravitee.am.common.exception.oauth2.InvalidRequestException;
import io.gravitee.am.common.utils.ConstantKeys;
import io.gravitee.am.gateway.handler.common.auth.idp.IdentityProviderManager;
import io.gravitee.am.gateway.handler.common.password.PasswordPolicyManager;
import io.gravitee.am.gateway.handler.root.service.user.UserService;
import io.gravitee.am.model.oidc.Client;
import io.gravitee.am.service.PasswordService;
import io.gravitee.common.http.HttpStatusCode;
import io.reactivex.rxjava3.core.Single;
import io.vertx.core.Handler;
import io.vertx.core.json.Json;
import io.vertx.rxjava3.ext.web.RoutingContext;

/**
 * Checks a password against a validation rules and returns either
 */
public class PasswordValidationHandler implements Handler<RoutingContext> {

    private final IdentityProviderManager identityProviderManager;
    private final PasswordPolicyManager passwordPolicyManager;
    private final PasswordService passwordService;
    private final UserService userService;

    public PasswordValidationHandler(PasswordService passwordService, UserService userService, PasswordPolicyManager passwordPolicyManager, IdentityProviderManager identityProviderManager) {
        this.identityProviderManager = identityProviderManager;
        this.passwordPolicyManager = passwordPolicyManager;
        this.passwordService = passwordService;
        this.userService = userService;
    }

    @SuppressWarnings("ResultOfMethodCallIgnored")
    @Override
    public void handle(RoutingContext context) {
        var accessToken = context.request().getFormAttribute(ConstantKeys.TOKEN_CONTEXT_KEY);
        var password = context.request().getFormAttribute(ConstantKeys.PASSWORD_PARAM_KEY);
        Client client = context.get(ConstantKeys.CLIENT_CONTEXT_KEY);

        userService.verifyToken(accessToken)
                .switchIfEmpty(Single.error(() -> new InvalidRequestException("No user found for given access_token")))
                .map(userToken -> {
                    final var user = userToken.getUser();
                    final var provider = identityProviderManager.getIdentityProvider(user.getSource());
                    return this.passwordService.evaluate(password, passwordPolicyManager.getPolicy(client, provider).orElse(null), user);

                })
                .doOnError(throwable -> context.fail(HttpStatusCode.INTERNAL_SERVER_ERROR_500, throwable))
                .subscribe(pwdStatus -> context.response()
                        .setStatusCode(pwdStatus.isValid() ? HttpStatusCode.OK_200 : HttpStatusCode.BAD_REQUEST_400)
                        .end(Json.encode(pwdStatus)));

    }
}
