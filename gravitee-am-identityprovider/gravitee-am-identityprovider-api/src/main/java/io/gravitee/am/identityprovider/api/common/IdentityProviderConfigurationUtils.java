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
package io.gravitee.am.identityprovider.api.common;

import com.nimbusds.jose.util.JSONObjectUtils;
import lombok.experimental.UtilityClass;
import lombok.extern.slf4j.Slf4j;

import java.text.ParseException;
import java.util.Map;
import java.util.Optional;

import static com.nimbusds.jose.util.JSONObjectUtils.getString;
import static io.gravitee.am.common.oidc.ClientAuthenticationMethod.TLS_CLIENT_AUTH;

@Slf4j
@UtilityClass
public final class IdentityProviderConfigurationUtils {

    public static Optional<String> extractCertificateId(String configuration) {
        if (configuration == null) {
            return Optional.empty();
        }
        try {
            Map<String, Object> cfg = JSONObjectUtils.parse(configuration);
            String certId = getString(cfg, "clientAuthenticationCertificate");
            return Optional.ofNullable(certId);
        } catch (ParseException e) {
            log.warn("Problem at parsing certificate configuration, msg={}", e.getMessage());
            return Optional.empty();
        }
    }

    public static String sanitizeClientAuthCertificate(String configuration) {
        if (configuration == null) {
            return configuration;
        }
        try {
            Map<String, Object> cfg = JSONObjectUtils.parse(configuration);
            boolean useMutualTLS = (Boolean) cfg.getOrDefault("useMutualTLS", false);
            String clientAuthenticationMethod = (String) cfg.get("clientAuthenticationMethod");
            boolean mTls = useMutualTLS || TLS_CLIENT_AUTH.equals(clientAuthenticationMethod);
            if (!mTls) {
                cfg.remove("clientAuthenticationCertificate");
            }
            return JSONObjectUtils.toJSONString(cfg);
        } catch (ParseException e) {
            log.warn("Problem at parsing OpenId configuration, msg={}", e.getMessage());
            return configuration;
        }
    }
}
