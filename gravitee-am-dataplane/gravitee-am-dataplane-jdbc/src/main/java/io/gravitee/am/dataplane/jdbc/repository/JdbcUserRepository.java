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

import io.gravitee.am.dataplane.api.repository.UserRepository;
import io.gravitee.am.model.Reference;
import io.gravitee.am.model.ReferenceType;
import io.gravitee.am.model.User;
import io.gravitee.am.model.UserId;
import io.gravitee.am.model.analytics.AnalyticsQuery;
import io.gravitee.am.model.common.Page;
import io.gravitee.am.repository.management.api.CommonUserRepository;
import io.gravitee.am.repository.management.api.search.FilterCriteria;
import io.reactivex.rxjava3.core.Completable;
import io.reactivex.rxjava3.core.Flowable;
import io.reactivex.rxjava3.core.Maybe;
import io.reactivex.rxjava3.core.Single;

import java.util.List;
import java.util.Map;


public class JdbcUserRepository implements UserRepository {

    @Override
    public Maybe<User> findById(UserId id) {
        return null;
    }

    @Override
    public Single<User> update(User user, UpdateActions actions) {
        return null;
    }

    @Override
    public Flowable<User> findAll(ReferenceType referenceType, String referenceId) {
        return null;
    }

    @Override
    public Single<Page<User>> findAll(ReferenceType referenceType, String referenceId, int page, int size) {
        return null;
    }

    @Override
    public Single<Page<User>> findAllScim(ReferenceType referenceType, String referenceId, int startIndex, int count) {
        return null;
    }

    @Override
    public Single<Page<User>> search(ReferenceType referenceType, String referenceId, String query, int page, int size) {
        return null;
    }

    @Override
    public Single<Page<User>> search(ReferenceType referenceType, String referenceId, FilterCriteria criteria, int page, int size) {
        return null;
    }

    @Override
    public Flowable<User> search(ReferenceType referenceType, String referenceId, FilterCriteria criteria) {
        return null;
    }

    @Override
    public Single<Page<User>> searchScim(ReferenceType referenceType, String referenceId, FilterCriteria criteria, int startIndex, int count) {
        return null;
    }

    @Override
    public Flowable<User> findByDomainAndEmail(String domain, String email, boolean strict) {
        return null;
    }

    @Override
    public Maybe<User> findByUsernameAndDomain(String domain, String username) {
        return null;
    }

    @Override
    public Maybe<User> findByUsernameAndSource(ReferenceType referenceType, String referenceId, String username, String source) {
        return null;
    }

    @Override
    public Maybe<User> findByUsernameAndSource(ReferenceType referenceType, String referenceId, String username, String source, boolean includeLinkedIdentities) {
        return null;
    }

    @Override
    public Maybe<User> findByExternalIdAndSource(ReferenceType referenceType, String referenceId, String externalId, String source) {
        return null;
    }

    @Override
    public Flowable<User> findByIdIn(List<String> ids) {
        return null;
    }

    @Override
    public Maybe<User> findById(Reference reference, UserId userId) {
        return null;
    }

    @Override
    public Completable deleteByReference(ReferenceType referenceType, String referenceId) {
        return null;
    }

    @Override
    public Single<Long> countByReference(ReferenceType referenceType, String referenceId) {
        return null;
    }

    @Override
    public Single<Long> countByApplication(String domain, String application) {
        return null;
    }

    @Override
    public Single<Map<Object, Object>> statistics(AnalyticsQuery query) {
        return null;
    }

    @Override
    public Maybe<User> findById(String s) {
        return null;
    }

    @Override
    public Single<User> create(User item) {
        return null;
    }

    @Override
    public Single<User> update(User item) {
        return null;
    }

    @Override
    public Completable delete(String s) {
        return null;
    }
}
