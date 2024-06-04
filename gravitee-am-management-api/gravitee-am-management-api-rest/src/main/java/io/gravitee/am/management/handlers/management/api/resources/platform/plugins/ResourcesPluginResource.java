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

import io.gravitee.am.management.service.ResourcePluginService;
import io.gravitee.am.service.model.plugin.ResourcePlugin;
import io.swagger.v3.oas.annotations.Operation;
import io.swagger.v3.oas.annotations.tags.Tag;
import io.swagger.v3.oas.annotations.tags.Tags;
import jakarta.inject.Inject;
import jakarta.ws.rs.GET;
import jakarta.ws.rs.Path;
import jakarta.ws.rs.Produces;
import jakarta.ws.rs.QueryParam;
import jakarta.ws.rs.container.AsyncResponse;
import jakarta.ws.rs.container.ResourceContext;
import jakarta.ws.rs.container.Suspended;
import jakarta.ws.rs.core.Context;
import jakarta.ws.rs.core.MediaType;

import java.util.Comparator;
import java.util.List;

/**
 * @author Eric LELEU (eric.leleu at graviteesource.com)
 * @author GraviteeSource Team
 */
@Tags({@Tag(name= "Plugin"), @Tag(name= "Resource")})
public class ResourcesPluginResource {

    @Context
    private ResourceContext resourceContext;

    @Inject
    private ResourcePluginService resourcePluginService;

    @GET
    @Produces(MediaType.APPLICATION_JSON)
    @Operation(summary = "List resource plugins",
            description = "There is no particular permission needed. User must be authenticated.")
    public void list(@QueryParam("expand") List<String> expand,
                     @Suspended final AsyncResponse response) {

        resourcePluginService.findAll(expand)
                .map(resourcePlugins -> resourcePlugins.stream()
                        .sorted(Comparator.comparing(ResourcePlugin::getName))
                        .toList())
                .subscribe(response::resume, response::resume);
    }

    @Path("{resource}")
    public ResourcePluginResource getResourcePluginResource() {
        return resourceContext.getResource(ResourcePluginResource.class);
    }
}
