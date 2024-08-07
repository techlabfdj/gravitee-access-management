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
package io.gravitee.am.management.handlers.management.api.resources.platform.plugins;

import io.gravitee.am.service.CertificatePluginService;
import io.gravitee.am.service.model.plugin.AbstractPlugin;
import io.gravitee.am.service.model.plugin.CertificatePlugin;
import io.swagger.v3.oas.annotations.Operation;
import io.swagger.v3.oas.annotations.tags.Tag;
import io.swagger.v3.oas.annotations.tags.Tags;
import jakarta.inject.Inject;
import jakarta.ws.rs.GET;
import jakarta.ws.rs.Path;
import jakarta.ws.rs.Produces;
import jakarta.ws.rs.container.AsyncResponse;
import jakarta.ws.rs.container.ResourceContext;
import jakarta.ws.rs.container.Suspended;
import jakarta.ws.rs.core.Context;
import jakarta.ws.rs.core.MediaType;

import java.util.Comparator;

/**
 * @author Titouan COMPIEGNE (titouan.compiegne at graviteesource.com)
 * @author GraviteeSource Team
 */
@Tags({@Tag(name= "Plugin"), @Tag(name= "Certificate")})
public class CertificatesPluginResource {

    @Context
    private ResourceContext resourceContext;

    @Inject
    private CertificatePluginService certificatePluginService;

    @GET
    @Produces(MediaType.APPLICATION_JSON)
    @Operation(summary = "List certificate plugins",
            description = "There is no particular permission needed. User must be authenticated.")
    public void list(@Suspended final AsyncResponse response) {
        certificatePluginService.findAll()
                .map(certificatePlugins -> certificatePlugins.stream()
                        .filter(AbstractPlugin::isDeployed)
                        .sorted(Comparator.comparing(CertificatePlugin::getName))
                        .toList())
                .subscribe(response::resume, response::resume);
    }

    @Path("{certificate}")
    public CertificatePluginResource getCertificatePluginResource() {
        return resourceContext.getResource(CertificatePluginResource.class);
    }
}
