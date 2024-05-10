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
package io.gravitee.am.certificate.api;

import java.util.Arrays;
import java.util.Objects;

/**
 * Represents a bundle (jks or p12) with pub/prv keys and the certificate
 * @param value
 * @param storepass
 * @param keypass
 * @param alias
 */
public record CertificateBundle(byte[] value, String storepass, String keypass, String alias) {

    @Override
    public String toString() {
        return "CertificateBundle{" +
                "value=" + Arrays.toString(value) +
                ", storepass='" + storepass + '\'' +
                ", keypass='" + keypass + '\'' +
                ", alias='" + alias + '\'' +
                '}';
    }

    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (o == null || getClass() != o.getClass()) return false;
        CertificateBundle that = (CertificateBundle) o;
        return Arrays.equals(value, that.value) && Objects.equals(storepass, that.storepass) && Objects.equals(keypass, that.keypass) && Objects.equals(alias, that.alias);
    }

    @Override
    public int hashCode() {
        int result = Objects.hash(storepass, keypass, alias);
        result = 31 * result + Arrays.hashCode(value);
        return result;
    }
}
