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
package io.gravitee.am.authdevice.notifier.http.provider;

import io.gravitee.am.authdevice.notifier.api.AuthenticationDeviceNotifierProvider;
import io.gravitee.am.authdevice.notifier.api.exception.DeviceNotificationException;
import io.gravitee.am.authdevice.notifier.api.model.ADCallbackContext;
import io.gravitee.am.authdevice.notifier.api.model.ADNotificationRequest;
import io.gravitee.am.authdevice.notifier.api.model.ADNotificationResponse;
import io.gravitee.am.authdevice.notifier.api.model.ADUserResponse;
import io.gravitee.am.authdevice.notifier.http.HttpAuthenticationDeviceNotifierConfiguration;
import io.gravitee.am.authdevice.notifier.http.provider.spring.HttpAuthenticationDeviceProviderSpringConfiguration;
import io.gravitee.common.http.HttpStatusCode;
import io.gravitee.el.exceptions.ExpressionEvaluationException;
import io.reactivex.rxjava3.core.Single;
import io.vertx.core.http.HttpMethod;
import io.vertx.core.json.JsonObject;
import io.vertx.rxjava3.core.MultiMap;
import io.vertx.rxjava3.core.buffer.Buffer;
import io.vertx.rxjava3.ext.web.client.HttpRequest;
import io.vertx.rxjava3.ext.web.client.WebClient;
import lombok.AllArgsConstructor;
import lombok.NoArgsConstructor;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Qualifier;
import org.springframework.context.annotation.Import;
import org.springframework.util.CollectionUtils;

import java.util.Optional;
import java.util.stream.Collectors;

import static org.springframework.util.StringUtils.hasText;

/**
 * @author Eric LELEU (eric.leleu at graviteesource.com)
 * @author GraviteeSource Team
 */
@Import(HttpAuthenticationDeviceProviderSpringConfiguration.class)
@AllArgsConstructor
@NoArgsConstructor
public class HttpAuthenticationDeviceNotifierProvider implements AuthenticationDeviceNotifierProvider {
    private static final Logger LOGGER = LoggerFactory.getLogger(HttpAuthenticationDeviceNotifierProvider.class);

    public static final String TRANSACTION_ID = "tid";
    public static final String STATE = "state";
    public static final String PARAM_SUBJECT = "subject";
    public static final String PARAM_SCOPE = "scope";
    public static final String PARAM_EXPIRE = "expire";
    public static final String PARAM_ACR = "acr";
    public static final String PARAM_MESSAGE = "message";
    public static final String RESPONSE_ATTR_DATA = "data";
    public static final String CALLBACK_VALIDATE = "validated";

    @Autowired
    @Qualifier("authDeviceNotifierWebClient")
    private WebClient client;

    @Autowired
    private HttpAuthenticationDeviceNotifierConfiguration configuration;

    @Override
    public Single<ADNotificationResponse> notify(ADNotificationRequest request) {

        LOGGER.debug("Call notifier service '{}' (tid: {}) ", this.configuration.getEndpoint(), request.getTransactionId());

        MultiMap formData = prepareFormData(request);

        final HttpRequest<Buffer> notificationRequest = this.client.requestAbs(HttpMethod.POST, this.configuration.getEndpoint());
        if (this.configuration.getHttpHeaders() != null && !this.configuration.getHttpHeaders().isEmpty()) {
            MultiMap headers = MultiMap.caseInsensitiveMultiMap();
            for (var header : this.configuration.getHttpHeaders()) {
                try {
                    String value = request.getTemplateEngine().eval(header.getValue(), String.class).blockingGet();
                    headers.add(header.getName(), value);
                } catch (ExpressionEvaluationException e) {
                    LOGGER.error("Failed to evaluate header '{}'", header.getName(), e);
                    return Single.error(new DeviceNotificationException("Failed to evaluate header"));
                }
            }
            notificationRequest.putHeaders(headers);
        }
        if (hasText(this.configuration.getHeaderValue())) {
            notificationRequest
                    .putHeader(this.configuration.getHeaderName(), this.configuration.getHeaderValue());
        }

        return notificationRequest
                .rxSendForm(formData)
                .doOnError(error -> LOGGER.warn("Unexpected error during device notification : {}", error.getMessage(), error))
                .onErrorResumeNext(exception -> Single.error(new DeviceNotificationException("Unexpected error during device notification")))
                .flatMap(response -> {
                    final int status = response.statusCode();
                    if (status != HttpStatusCode.OK_200) {
                        if (LOGGER.isDebugEnabled()) {
                            LOGGER.debug("Device notification fails on '{}' for tid '{}' with status '{}': {}",
                                    this.configuration.getEndpoint(),
                                    request.getTransactionId(),
                                    status,
                                    response.bodyAsString());
                        } else {
                            LOGGER.info("Device notification fails for tid '{}' with status '{}'", request.getTransactionId(), status);
                        }

                        return Single.error(new DeviceNotificationException("Device notification fails"));
                    }

                    final JsonObject result = response.bodyAsJsonObject();
                    if (LOGGER.isDebugEnabled()) {
                        LOGGER.debug("Notifier '{}' respond with status '{}' for tid '{}': {}",
                                this.configuration.getEndpoint(),
                                status,
                                request.getTransactionId(),
                                result);
                    }

                    if (!request.getTransactionId().equals(result.getString(TRANSACTION_ID)) || !request.getState().equals(result.getString(STATE))) {
                        LOGGER.warn("Device notification response contains invalid tid or state. Request {} with status {}", request.getTransactionId(), status);
                        return Single.error(new DeviceNotificationException("Invalid device notification response"));
                    }

                    final ADNotificationResponse notificationResponse = new ADNotificationResponse(request.getTransactionId());
                    final JsonObject extraData = result.getJsonObject(RESPONSE_ATTR_DATA);
                    if (extraData != null) {
                        notificationResponse.setExtraData(extraData.getMap());
                    }
                    return Single.just(notificationResponse);
                });
    }

    private MultiMap prepareFormData(ADNotificationRequest request) {
        final MultiMap formData = MultiMap.caseInsensitiveMultiMap();

        formData.set(TRANSACTION_ID, request.getTransactionId());
        formData.set(STATE, request.getState());
        formData.set(PARAM_SUBJECT, request.getSubject());
        formData.set(PARAM_SCOPE, request.getScopes().stream().collect(Collectors.joining(" ")));
        formData.set(PARAM_EXPIRE, Integer.toString(request.getExpiresIn()));

        if (!CollectionUtils.isEmpty(request.getAcrValues())) {
            formData.set(PARAM_ACR, request.getAcrValues());
        }

        if (hasText(request.getMessage())) {
            formData.set(PARAM_MESSAGE, request.getMessage());
        }
        return formData;
    }

    @Override
    public Single<Optional<ADUserResponse>> extractUserResponse(ADCallbackContext callbackContext) {
        final String state = callbackContext.getParam(STATE);
        final String tid = callbackContext.getParam(TRANSACTION_ID);
        final String validated = callbackContext.getParam(CALLBACK_VALIDATE);
        LOGGER.debug("User response received: state={}, tid={}, validated={}", state, tid, validated);
        if (!hasText(state) || !hasText(tid) || !hasText(validated)) {
            return Single.just(Optional.empty());
        } else {
            return Single.just(Optional.of(new ADUserResponse(tid, state, Boolean.parseBoolean(validated))));
        }
    }
}
