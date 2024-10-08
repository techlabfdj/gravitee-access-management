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
package io.gravitee.am.gateway.handler.vertx.auth.webauthn.attestation;

import io.vertx.core.buffer.Buffer;

import static io.gravitee.am.gateway.handler.vertx.auth.webauthn.attestation.GraviteeTPMAttestation.TPM_ALG_ECC;
import static io.gravitee.am.gateway.handler.vertx.auth.webauthn.attestation.GraviteeTPMAttestation.TPM_ALG_RSA;

public class PubArea {

    private final int type;
    private final int nameAlg;
    private final long objectAttributes;
    private final byte[] authPolicy;
    private final int symmetric;
    private final int scheme;
    private final byte[] unique;
    private int keyBits;
    private long exponent;
    private int curveID;
    private int kdf;

    public PubArea(byte[] data) {
        this(Buffer.buffer(data));
    }

    public PubArea(Buffer pubBuffer) {
        int pos = 0;
        int len;

        type = pubBuffer.getUnsignedShort(pos);
        pos += 2;
        nameAlg = pubBuffer.getUnsignedShort(pos);
        pos += 2;

        // Get some authenticator attributes(?)
        objectAttributes = pubBuffer.getUnsignedInt(pos);
        pos += 4;

        // Slice out the authPolicy of dynamic length
        len = pubBuffer.getUnsignedShort(pos);
        pos += 2;
        authPolicy = pubBuffer.getBytes(pos, pos + len);
        pos += len;

        // Extract additional curve params according to type
        if (type == TPM_ALG_RSA) {
            // read 10 bytes
            symmetric = pubBuffer.getUnsignedShort(pos);
            pos+=2;
            scheme = pubBuffer.getUnsignedShort(pos);
            pos+=2;
            keyBits = pubBuffer.getUnsignedShort(pos);
            pos+=2;
            exponent = pubBuffer.getUnsignedInt(pos);
            pos+=4;
            // Slice out unique of dynamic length
            len = pubBuffer.getUnsignedShort(pos);
            pos+=2;
            unique = pubBuffer.getBytes(pos, pos + len);
        } else if (type == TPM_ALG_ECC) {
            // read 8 bytes
            symmetric = pubBuffer.getUnsignedShort(pos);
            pos+=2;
            scheme = pubBuffer.getUnsignedShort(pos);
            pos+=2;
            curveID = pubBuffer.getUnsignedShort(pos);
            pos+=2;
            kdf = pubBuffer.getUnsignedShort(pos);
            pos+=2;
            //Unique structure: x length + x data + y length + y data
            len = pubBuffer.getUnsignedShort(pos);
            pos+=2;
            byte[] uniqueX = pubBuffer.getBytes(pos, pos + len);
            pos+=len;
            len = pubBuffer.getUnsignedShort(pos);
            pos+=2;
            byte[] uniqueY = pubBuffer.getBytes(pos, pos + len);
            unique = new byte[uniqueX.length + uniqueY.length];
            System.arraycopy(uniqueX, 0, unique, 0, uniqueX.length);
            System.arraycopy(uniqueY, 0, unique, uniqueX.length, uniqueY.length);
        } else {
            throw new IllegalArgumentException("Unexpected type: " + type);
        }
    }

    public int getType() {
        return type;
    }

    public int getNameAlg() {
        return nameAlg;
    }

    public long getObjectAttributes() {
        return objectAttributes;
    }

    public byte[] getAuthPolicy() {
        return authPolicy;
    }

    public int getSymmetric() {
        return symmetric;
    }

    public int getScheme() {
        return scheme;
    }

    public int getKeyBits() {
        return keyBits;
    }

    public long getExponent() {
        return exponent;
    }

    public int getCurveID() {
        return curveID;
    }

    public int getKdf() {
        return kdf;
    }

    public byte[] getUnique() {
        return unique;
    }
}

