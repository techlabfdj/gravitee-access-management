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

package io.gravitee.am.plugins.certificate.core;

import io.gravitee.am.certificate.api.CertificateMetadata;
import io.gravitee.am.model.Certificate;
import io.gravitee.am.plugins.handlers.api.provider.ProviderConfiguration;

import java.util.HashMap;
import java.util.Map;

/**
 * @author Rémi SULTAN (remi.sultan at graviteesource.com)
 * @author GraviteeSource Team
 */
public class CertificateProviderConfiguration extends ProviderConfiguration {

    private final Map<String, Object> metadata;

    public CertificateProviderConfiguration(Certificate certificate) {
        super(certificate.getType(), certificate.getConfiguration());
        this.metadata = certificate.getMetadata() == null ? new HashMap<>() : certificate.getMetadata();
        this.metadata.put(CertificateMetadata.ID, certificate.getId());
    }

    public Map<String, Object> getMetadata() {
        return metadata;
    }
}
