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
package io.gravitee.am.deviceidentifier.fingerprintjs;

import io.gravitee.am.deviceidentifier.api.DeviceIdentifier;
import io.gravitee.am.deviceidentifier.fingerprintjs.impl.FingerprintJsV3ProProvider;

/**
 * @author Rémi SULTAN (remi.sultan at graviteesource.com)
 * @author GraviteeSource Team
 */
public class FingerprintJsV3Pro extends DeviceIdentifier<FingerprintJsV3ProConfiguration, FingerprintJsV3ProProvider> {

    @Override
    public Class<FingerprintJsV3ProConfiguration> configuration() {
        return FingerprintJsV3ProConfiguration.class;
    }

    @Override
    public Class<FingerprintJsV3ProProvider> provider() {
        return FingerprintJsV3ProProvider.class;
    }
}
