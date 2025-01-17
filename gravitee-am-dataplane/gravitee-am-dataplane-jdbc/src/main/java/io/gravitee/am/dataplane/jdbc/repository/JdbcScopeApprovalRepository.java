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

import io.gravitee.am.dataplane.api.repository.ScopeApprovalRepository;
import io.gravitee.am.model.UserId;
import io.gravitee.am.model.oauth2.ScopeApproval;
import io.gravitee.am.repository.common.CrudRepository;
import io.reactivex.rxjava3.core.Completable;
import io.reactivex.rxjava3.core.Flowable;
import io.reactivex.rxjava3.core.Maybe;
import io.reactivex.rxjava3.core.Single;
import org.springframework.stereotype.Repository;

@Repository
public class JdbcScopeApprovalRepository implements ScopeApprovalRepository {


    @Override
    public Flowable<ScopeApproval> findByDomainAndUserAndClient(String domain, UserId userId, String clientId) {
        return null;
    }

    @Override
    public Flowable<ScopeApproval> findByDomainAndUser(String domain, UserId userId) {
        return null;
    }

    @Override
    public Single<ScopeApproval> upsert(ScopeApproval scopeApproval) {
        return null;
    }

    @Override
    public Completable deleteByDomainAndScopeKey(String domain, String scope) {
        return null;
    }

    @Override
    public Completable deleteByDomainAndUserAndClient(String domain, UserId userId, String client) {
        return null;
    }

    @Override
    public Completable deleteByDomainAndUser(String domain, UserId userId) {
        return null;
    }

    @Override
    public Maybe<ScopeApproval> findById(String s) {
        return null;
    }

    @Override
    public Single<ScopeApproval> create(ScopeApproval item) {
        return null;
    }

    @Override
    public Single<ScopeApproval> update(ScopeApproval item) {
        return null;
    }

    @Override
    public Completable delete(String s) {
        return null;
    }
}
