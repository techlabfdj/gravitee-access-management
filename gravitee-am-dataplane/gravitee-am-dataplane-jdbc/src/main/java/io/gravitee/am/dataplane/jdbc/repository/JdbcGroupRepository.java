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

import io.gravitee.am.dataplane.api.repository.GroupRepository;
import io.gravitee.am.model.Group;
import io.gravitee.am.model.ReferenceType;
import io.gravitee.am.model.common.Page;
import io.gravitee.am.repository.common.CrudRepository;
import io.gravitee.am.repository.management.api.search.FilterCriteria;
import io.reactivex.rxjava3.core.Completable;
import io.reactivex.rxjava3.core.Flowable;
import io.reactivex.rxjava3.core.Maybe;
import io.reactivex.rxjava3.core.Single;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public class JdbcGroupRepository implements GroupRepository {

    @Override
    public Flowable<Group> findByMember(String memberId) {
        return null;
    }

    @Override
    public Flowable<Group> findAll(ReferenceType referenceType, String referenceId) {
        return null;
    }

    @Override
    public Single<Page<Group>> findAllScim(ReferenceType referenceType, String referenceId, int page, int size) {
        return null;
    }

    @Override
    public Single<Page<Group>> searchScim(ReferenceType referenceType, String referenceId, FilterCriteria criteria, int page, int size) {
        return null;
    }

    @Override
    public Flowable<Group> findByIdIn(List<String> ids) {
        return null;
    }

    @Override
    public Maybe<Group> findByName(ReferenceType referenceType, String referenceId, String groupName) {
        return null;
    }

    @Override
    public Maybe<Group> findById(ReferenceType referenceType, String referenceId, String group) {
        return null;
    }

    @Override
    public Maybe<Group> findById(String s) {
        return null;
    }

    @Override
    public Single<Group> create(Group item) {
        return null;
    }

    @Override
    public Single<Group> update(Group item) {
        return null;
    }

    @Override
    public Completable delete(String s) {
        return null;
    }
}
