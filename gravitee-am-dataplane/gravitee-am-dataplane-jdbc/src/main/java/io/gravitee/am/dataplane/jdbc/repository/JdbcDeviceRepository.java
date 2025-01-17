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
package io.gravitee.am.dataplane.jdbc.repository;

import io.gravitee.am.dataplane.api.repository.DeviceRepository;
import io.gravitee.am.model.Device;
import io.gravitee.am.model.ReferenceType;
import io.gravitee.am.model.UserId;
import io.gravitee.am.repository.common.CrudRepository;
import io.reactivex.rxjava3.core.Completable;
import io.reactivex.rxjava3.core.Flowable;
import io.reactivex.rxjava3.core.Maybe;
import io.reactivex.rxjava3.core.Single;
import org.springframework.stereotype.Repository;

@Repository
public class JdbcDeviceRepository implements DeviceRepository {


    @Override
    public Maybe<Device> findByReferenceAndClientAndUserAndDeviceIdentifierAndDeviceId(ReferenceType referenceType, String referenceId, String client, UserId user, String rememberDevice, String deviceId) {
        return null;
    }

    @Override
    public Flowable<Device> findByReferenceAndUser(ReferenceType referenceType, String referenceId, UserId user) {
        return null;
    }

    @Override
    public Maybe<Device> findById(String s) {
        return null;
    }

    @Override
    public Single<Device> create(Device item) {
        return null;
    }

    @Override
    public Single<Device> update(Device item) {
        return null;
    }

    @Override
    public Completable delete(String s) {
        return null;
    }
}
