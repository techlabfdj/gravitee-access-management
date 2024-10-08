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

package io.gravitee.am.gateway.handler.common.user.impl;


import io.gravitee.am.gateway.handler.common.user.UserStore;
import io.gravitee.am.model.User;
import io.reactivex.rxjava3.core.Completable;
import io.reactivex.rxjava3.core.Maybe;

/**
 * @author Eric LELEU (eric.leleu at graviteesource.com)
 * @author GraviteeSource Team
 */
public class NoUserStore implements UserStore {
    @Override
    public Maybe<User> add(User user) {
        return Maybe.empty();
    }

    @Override
    public Completable remove(String userId) {
        return Completable.complete();
    }

    @Override
    public Maybe<User> get(String userId) {
        return Maybe.empty();
    }

    @Override
    public Completable removeByInternalSub(String gis) {
        return Completable.complete();
    }

    @Override
    public Maybe<User> getByInternalSub(String gis) {
        return Maybe.empty();
    }

    @Override
    public Completable clear() {
        return Completable.complete();
    }
}
