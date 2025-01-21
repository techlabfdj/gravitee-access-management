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
package io.gravitee.am.dataplane.jdbc.provider;

import io.gravitee.am.dataplane.api.DataPlaneProvider;
import io.gravitee.am.dataplane.api.repository.CredentialRepository;
import io.gravitee.am.dataplane.api.repository.DeviceRepository;
import io.gravitee.am.dataplane.api.repository.GroupRepository;
import io.gravitee.am.dataplane.api.repository.ScopeApprovalRepository;
import io.gravitee.am.dataplane.api.repository.UserActivityRepository;
import io.gravitee.am.dataplane.api.repository.UserRepository;
import io.gravitee.am.dataplane.jdbc.spring.JdbcDataPlaneSpringConfiguration;
import lombok.Getter;
import lombok.RequiredArgsConstructor;
import org.springframework.context.annotation.Import;

@RequiredArgsConstructor
@Import({JdbcDataPlaneSpringConfiguration.class})
public class JdbcDataPlaneProvider implements DataPlaneProvider {

    @Getter
    private final CredentialRepository credentialRepository;

    @Getter
    private final DeviceRepository deviceRepository;

    @Getter
    private final GroupRepository groupRepository;

    @Getter
    private final ScopeApprovalRepository scopeApprovalRepository;

    @Getter
    private final UserActivityRepository userActivityRepository;

    @Getter
    private final UserRepository userRepository;


    @Override
    public void stop() {

    }

}
