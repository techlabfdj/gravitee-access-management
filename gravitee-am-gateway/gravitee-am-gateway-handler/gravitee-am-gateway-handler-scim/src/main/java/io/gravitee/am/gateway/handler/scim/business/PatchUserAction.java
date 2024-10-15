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

package io.gravitee.am.gateway.handler.scim.business;


import io.gravitee.am.gateway.handler.scim.exception.InvalidSyntaxException;
import io.gravitee.am.gateway.handler.scim.exception.InvalidValueException;
import io.gravitee.am.gateway.handler.scim.model.PatchOp;
import io.gravitee.am.gateway.handler.scim.model.User;
import io.gravitee.am.gateway.handler.scim.service.UserService;
import io.gravitee.am.identityprovider.api.AuthenticationContext;
import io.gravitee.am.model.Domain;
import io.gravitee.am.model.oidc.Client;
import io.reactivex.rxjava3.core.Single;
import io.vertx.core.json.JsonObject;
import lombok.extern.slf4j.Slf4j;

import java.util.Map;

/**
 * @author Eric LELEU (eric.leleu at graviteesource.com)
 * @author GraviteeSource Team
 */
@Slf4j
public class PatchUserAction extends AbstractUserAction {

    public PatchUserAction(UserService userService, Domain domain, Client client) {
        super(userService, domain, client);
    }

    private PatchOp toPatchOp(Map<String, Object> payload) {
        return new JsonObject(payload).mapTo(PatchOp.class);
    }

    public Single<User> execute(String userId, String baseUrl, Map<String, Object> payload, AuthenticationContext authenticationContext, io.gravitee.am.identityprovider.api.User principal) {
        final PatchOp patchOp = toPatchOp(payload);
        if (patchOp == null) {
            return Single.error(new InvalidSyntaxException("Unable to parse body message"));
        }

        // schemas field is REQUIRED and MUST contain valid values and MUST not contain duplicate values
        try {
            checkSchemas(patchOp.getSchemas(), PatchOp.SCHEMAS);
        } catch (Exception ex) {
            return Single.error(ex);
        }

        // check operations
        if (patchOp.getOperations() == null || patchOp.getOperations().isEmpty()) {
            return Single.error(new InvalidValueException("Field [Operations] is required"));
        }

        // handle identity provider source
        return userSource(authenticationContext)
                .toSingle()
                .flatMap(optSource -> userService.patch(userId, patchOp, optSource.orElse(null), baseUrl, principal, client));
    }
}
