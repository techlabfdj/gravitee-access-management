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

package io.gravitee.am.gateway.handler.scim.resources.bulk;


import com.fasterxml.jackson.databind.ObjectMapper;
import io.gravitee.am.common.jwt.JWT;
import io.gravitee.am.common.utils.ConstantKeys;
import io.gravitee.am.gateway.handler.common.jwt.SubjectManager;
import io.gravitee.am.gateway.handler.common.vertx.core.http.VertxHttpServerRequest;
import io.gravitee.am.gateway.handler.common.vertx.utils.UriBuilderRequest;
import io.gravitee.am.gateway.handler.scim.business.CreateUser;
import io.gravitee.am.gateway.handler.scim.exception.InvalidSyntaxException;
import io.gravitee.am.gateway.handler.scim.exception.InvalidValueException;
import io.gravitee.am.gateway.handler.scim.exception.TooManyOperationException;
import io.gravitee.am.gateway.handler.scim.model.BulkOperation;
import io.gravitee.am.gateway.handler.scim.model.BulkRequest;
import io.gravitee.am.gateway.handler.scim.model.BulkResponse;
import io.gravitee.am.gateway.handler.scim.model.Error;
import io.gravitee.am.gateway.handler.scim.service.UserService;
import io.gravitee.am.identityprovider.api.SimpleAuthenticationContext;
import io.gravitee.am.model.Domain;
import io.gravitee.common.http.HttpHeaders;
import io.gravitee.common.http.HttpMethod;
import io.gravitee.common.http.HttpStatusCode;
import io.gravitee.common.http.MediaType;
import io.reactivex.rxjava3.annotations.NonNull;
import io.reactivex.rxjava3.core.Flowable;
import io.reactivex.rxjava3.core.Maybe;
import io.reactivex.rxjava3.core.Single;
import io.vertx.rxjava3.core.http.HttpServerRequest;
import io.vertx.rxjava3.ext.web.RoutingContext;
import lombok.AllArgsConstructor;
import lombok.extern.slf4j.Slf4j;

import java.util.Optional;
import java.util.Set;

import static io.gravitee.common.http.HttpMethod.DELETE;
import static io.gravitee.common.http.HttpMethod.PATCH;
import static io.gravitee.common.http.HttpMethod.POST;
import static io.gravitee.common.http.HttpMethod.PUT;
import static java.lang.String.valueOf;
import static org.springframework.util.CollectionUtils.isEmpty;
import static org.springframework.util.StringUtils.hasText;

/**
 * @author Eric LELEU (eric.leleu at graviteesource.com)
 * @author GraviteeSource Team
 */
@Slf4j
@AllArgsConstructor
public class BulkEndpoint {
    /**
     * Max payload size for Bulk request limited to 1MB
     */
    private final static int BULK_MAX_REQUEST_LENGTH = 1048576; // TODO make this configurable in AM-3572

    /**
     * Maximum number of operations for Bulk request
     */
    private final static int BULK_MAX_REQUEST_OPERATIONS = 1000; // TODO make this configurable in AM-3572
    public static final Set<String> ALLOAWED_METHODS = Set.of(DELETE.name(), POST.name(), PATCH.name(), PUT.name());

    private UserService userService;
    private ObjectMapper objectMapper;
    private Domain domain;
    private SubjectManager subjectManager;

    public void execute(RoutingContext context) {

        parseRequestBody(context)
                .switchIfEmpty(Maybe.error(() -> new InvalidSyntaxException("BulkRequest is required")))
                .toSingle()
                .map(this::checkBulkRequest)
                .flatMap(bulkRequest -> {
                    // we need to build a context in order to evaluate the sourceId during user creation
                    SimpleAuthenticationContext authenticationContext = new SimpleAuthenticationContext(new VertxHttpServerRequest(context.request().getDelegate()));
                    authenticationContext.attributes().putAll(context.data());

                    // accessToken is used to determine the principal user
                    final JWT accessToken = context.get(ConstantKeys.TOKEN_CONTEXT_KEY);

                    return Flowable.fromIterable(bulkRequest.getOperations())
                            .map(this::checkOperation)
                            .flatMapSingle(operation -> {
                                final String baseUrl = location(context.request(), operation.getPath());
                                switch (HttpMethod.valueOf(operation.getMethod())) {
                                    case POST:
                                        return new CreateUser(userService, domain, context.get(ConstantKeys.CLIENT_CONTEXT_KEY))
                                                .create(baseUrl, operation.getData(), authenticationContext, () -> principal(accessToken)/*TODO optimize this as each operation will read the user profile*/)
                                                .map(scimUser -> {
                                                    operation.setLocation(scimUser.getMeta().getLocation());
                                                    operation.setStatus(valueOf(HttpStatusCode.CREATED_201));
                                                    // response attribute is not set for successful operation
                                                    // so no need to provide the scimUser in the operation.response
                                                    return operation.asResponse();
                                                }).onErrorResumeNext(ex-> {
                                                    final var knownError = Error.fromThrowable(ex);
                                                    if (knownError.isPresent()) {
                                                        operation.setResponse(knownError.get());
                                                    } else {
                                                        Error error = new Error();
                                                        error.setStatus(valueOf(HttpStatusCode.INTERNAL_SERVER_ERROR_500));
                                                        error.setDetail(ex.getMessage());
                                                        operation.setResponse(error);
                                                    }
                                                    return Single.just(operation.asResponse());
                                                });
                                    default:
                                        Error error = new Error();
                                        error.setScimType("invalidSyntax"); // should not happen
                                        operation.setResponse(error);
                                        return Single.just(operation.asResponse());

                                }
                            }).toList()
                            .map(responses -> {
                                final var bulkResponse = new BulkResponse();
                                bulkResponse.setOperations(responses);
                                return bulkResponse;
                            });
                })
                .subscribe(bulkResponse -> context.response()
                                .putHeader(HttpHeaders.CACHE_CONTROL, "no-store")
                                .putHeader(HttpHeaders.PRAGMA, "no-cache")
                                .putHeader(HttpHeaders.CONTENT_TYPE, MediaType.APPLICATION_JSON)
                                .end(objectMapper.writerWithDefaultPrettyPrinter().writeValueAsString(bulkResponse))
                        ,
                        context::fail);
    }

    private Maybe<@NonNull BulkRequest> parseRequestBody(RoutingContext context) {
        return Maybe.fromSupplier(() -> {
            try {
                return context.body().asPojo(BulkRequest.class, BULK_MAX_REQUEST_LENGTH);// TODO make this configurable in AM-3572
            } catch (IllegalStateException e) {
                log.warn("The size of the bulk operation exceeds the maxPayloadSize ");
                throw TooManyOperationException.payloadLimitReached(BULK_MAX_REQUEST_LENGTH);// TODO make this configurable in AM-3572
            }
        });
    }

    private BulkRequest checkBulkRequest(BulkRequest bulkRequest) {
        if (isEmpty(bulkRequest.getOperations())) {
            throw new InvalidValueException("Bulk request requires at least one operation");
        }
        if (bulkRequest.getOperations().size() > BULK_MAX_REQUEST_OPERATIONS) {// TODO make this configurable in AM-3572
            throw TooManyOperationException.tooManyOperation(BULK_MAX_REQUEST_OPERATIONS);// TODO make this configurable in AM-3572
        }
        return bulkRequest;
    }

    private BulkOperation checkOperation(BulkOperation operation) {
        if (!(hasText(operation.getPath()) && operation.getPath().startsWith("/Users"))) {
            // only Users operations are managed currently
            log.debug("Bulk operation requires path starting with /Users");
            throw new InvalidValueException("Bulk operation requires path starting with /Users");
        }

        if (!ALLOAWED_METHODS.contains(operation.getMethod())) {
            log.debug("Bulk operation doesn't support method {}", operation.getMethod());
            throw new InvalidValueException("Bulk operation doesn't support method " + operation.getMethod());
        }

        if (!operation.getMethod().equals(DELETE.name()) && isEmpty(operation.getData())) {
            log.debug("Bulk operation requires data with method {}", operation.getMethod());
            throw new InvalidValueException("Bulk operation requires data with method " + operation.getMethod());
        }

        if (operation.getMethod().equals(POST.name()) && !hasText(operation.getBulkId())) {
            log.debug("Bulk operation requires bulkId with method POST");
            throw new InvalidValueException("Bulk operation requires bulkId with method POST");
        }

        return operation;
    }


    protected Maybe<Optional<io.gravitee.am.identityprovider.api.User>> principal(JWT jwt) {
        return this.subjectManager.getPrincipal(jwt).map(Optional::ofNullable)
                .switchIfEmpty(Maybe.just(Optional.empty()));
    }

    protected String location(HttpServerRequest request, String path) {
        return UriBuilderRequest.resolveProxyRequest(request, request.path().replaceFirst("/Bulk(/)?", path));
    }
}
