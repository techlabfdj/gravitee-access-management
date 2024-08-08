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
package io.gravitee.am.service.reporter.builder;

import io.gravitee.am.common.audit.EventType;
import io.gravitee.am.model.I18nDictionary;
import io.gravitee.am.service.reporter.builder.management.ManagementAuditBuilder;

import static io.gravitee.am.common.audit.EntityType.I18N_DICTIONARY;

/**
 * @author Titouan COMPIEGNE (titouan.compiegne at graviteesource.com)
 * @author GraviteeSource Team
 */
public class DictionaryAuditBuilder extends ManagementAuditBuilder<DictionaryAuditBuilder> {

    public DictionaryAuditBuilder() {
        super();
    }

    public DictionaryAuditBuilder dictionary(I18nDictionary dictionary) {
        if (dictionary != null) {
            if (EventType.I18N_DICTIONARY_CREATED.equals(getType()) || EventType.I18N_DICTIONARY_UPDATED.equals(getType())) {
                setNewValue(dictionary);
            }
            referenceType(dictionary.getReferenceType());
            referenceId(dictionary.getReferenceId());
            setTarget(dictionary.getId(), I18N_DICTIONARY, null, dictionary.getName(), dictionary.getReferenceType(), dictionary.getReferenceId(), null, null);
        }
        return this;
    }
}
