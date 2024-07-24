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
package io.gravitee.am.gateway.handler.common.role.impl;

import io.gravitee.am.model.Role;
import io.reactivex.rxjava3.observers.TestObserver;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import org.springframework.test.util.ReflectionTestUtils;

import java.time.Instant;
import java.time.temporal.ChronoUnit;
import java.util.Date;
import java.util.List;
import java.util.Map;
import java.util.Set;

@SuppressWarnings("unchecked")
class RoleManagerImplTest {
    public static final String ADMIN_ID = "admin-id";
    public static final String USER_ID = "user-id";
    private final RoleManagerImpl roleManager = new RoleManagerImpl();
    private Map<String, Role> roles;

    @BeforeEach
    public void setUp() {
        roles = (Map<String, Role>) ReflectionTestUtils.getField(roleManager, "roles");
        roles.clear();
    }

    @Test
    public void shouldGetAllOfRolesByIdIn(){
        final Role adminRole = new Role();
        adminRole.setId(ADMIN_ID);
        adminRole.setName("admin");
        adminRole.setDescription("admin");
        adminRole.setCreatedAt(new Date(Instant.now().minus(1, ChronoUnit.MINUTES).toEpochMilli()));

        final Role userRole = new Role();
        userRole.setId(USER_ID);
        userRole.setName("user");
        userRole.setDescription("user");
        userRole.setCreatedAt(new Date(Instant.now().minus(4, ChronoUnit.MINUTES).toEpochMilli()));
        roles.putAll(Map.of(ADMIN_ID, adminRole, USER_ID, userRole));

        TestObserver<Set<Role>> observer = roleManager.findByIdIn(List.of(ADMIN_ID, USER_ID)).test();
        observer.assertNoErrors();
        observer.assertComplete();
        observer.assertValue(roles -> roles.stream().map(Role::getId).toList().contains(ADMIN_ID) && roles.stream().map(Role::getId).toList().contains(USER_ID));
    }

    @Test
    public void shouldGetOneOfRolesByIdIn(){
        final Role adminRole = new Role();
        adminRole.setId(ADMIN_ID);
        adminRole.setName("admin");
        adminRole.setDescription("admin");
        adminRole.setCreatedAt(new Date(Instant.now().minus(1, ChronoUnit.MINUTES).toEpochMilli()));
        roles.put(ADMIN_ID, adminRole);

        TestObserver<Set<Role>> observer = roleManager.findByIdIn(List.of(ADMIN_ID, USER_ID)).test();
        observer.assertNoErrors();
        observer.assertComplete();
        observer.assertValue(roles -> roles.size() == 1 && roles.stream().map(Role::getId).toList().contains(ADMIN_ID));
    }
}