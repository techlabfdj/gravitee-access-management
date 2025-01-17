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
