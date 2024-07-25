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
package io.gravitee.am.repository.mongodb.gateway;

import com.mongodb.reactivestreams.client.MongoClient;
import com.mongodb.reactivestreams.client.MongoDatabase;
import io.gravitee.am.repository.Scope;
import io.gravitee.am.repository.mongodb.common.AbstractRepositoryConfiguration;
import io.gravitee.am.repository.mongodb.provider.MongoConnectionConfiguration;
import io.gravitee.am.repository.provider.ConnectionProvider;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.ComponentScan;
import org.springframework.context.annotation.Configuration;

import java.net.URI;

@Configuration
@ComponentScan({
        "io.gravitee.am.repository.mongodb.gateway"
})
public class GatewayRepositoryConfiguration extends AbstractRepositoryConfiguration {

    @Autowired
    private ConnectionProvider<MongoClient, MongoConnectionConfiguration> connectionProvider;

    @Bean(name = "gatewayMongoTemplate")
    public MongoDatabase mongoOperations() {
        final MongoClient mongo = connectionProvider.getClientWrapper(Scope.GATEWAY.getName()).getClient();
        return mongo.getDatabase(getDatabaseName());
    }

    private String getDatabaseName() {
        boolean useManagementSettings = environment.getProperty(Scope.GATEWAY.getName() + ".use-management-settings", Boolean.class, true);
        String propertyPrefix = useManagementSettings ? Scope.MANAGEMENT.getName() : Scope.GATEWAY.getName();
        String uri = environment.getProperty(propertyPrefix + ".mongodb.uri");
        if (uri != null && !uri.isEmpty()) {
            final String path = URI.create(uri).getPath();
            if (path != null && path.length() > 1) {
                return path.substring(1);
            }
        }

        return environment.getProperty(propertyPrefix + ".mongodb.dbname", "gravitee-am");
    }
}
