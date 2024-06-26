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
package io.gravitee.am.management.service.impl.plugins;

import io.gravitee.am.management.service.BotDetectionPluginService;
import io.gravitee.am.plugins.botdetection.core.BotDetectionPluginManager;
import io.gravitee.am.service.exception.TechnicalManagementException;
import io.gravitee.am.service.model.plugin.BotDetectionPlugin;
import io.gravitee.plugin.core.api.Plugin;
import io.reactivex.rxjava3.core.Maybe;
import io.reactivex.rxjava3.core.Observable;
import io.reactivex.rxjava3.core.Single;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;

import java.util.List;

/**
 * @author Eric LELEU (eric.leleu at graviteesource.com)
 * @author GraviteeSource Team
 */
@Slf4j
@Component
public class BotDetectionPluginServiceImpl extends AbstractPluginService implements BotDetectionPluginService {

    private final BotDetectionPluginManager pluginManager;

    @Autowired
    public BotDetectionPluginServiceImpl(BotDetectionPluginManager pluginManager) {
        super(pluginManager);
        this.pluginManager = pluginManager;
    }

    @Override
    public Single<List<BotDetectionPlugin>> findAll() {
        log.debug("List all bot detection plugins");
        return Observable.fromIterable(pluginManager.findAll(true))
                .map(this::convert)
                .toList();
    }

    @Override
    public Maybe<BotDetectionPlugin> findById(String pluginId) {
        log.debug("Find bot detection plugin by ID: {}", pluginId);
        return Maybe.create(emitter -> {
            try {
                Plugin resource = pluginManager.findById(pluginId);
                if (resource != null) {
                    emitter.onSuccess(convert(resource));
                } else {
                    emitter.onComplete();
                }
            } catch (Exception ex) {
                log.error("An error occurs while trying to get bot detection plugin : {}", pluginId, ex);
                emitter.onError(new TechnicalManagementException("An error occurs while trying to get bot detection plugin : " + pluginId, ex));
            }
        });
    }

    @Override
    public Maybe<String> getSchema(String pluginId) {
        log.debug("Find bot detection plugin schema by ID: {}", pluginId);
        return Maybe.create(emitter -> {
            try {
                String schema = pluginManager.getSchema(pluginId);
                if (schema != null) {
                    emitter.onSuccess(schema);
                } else {
                    emitter.onComplete();
                }
            } catch (Exception e) {
                log.error("An error occurs while trying to get schema for bot detection plugin {}", pluginId, e);
                emitter.onError(new TechnicalManagementException("An error occurs while trying to get schema for bot detection plugin " + pluginId, e));
            }
        });
    }

    private BotDetectionPlugin convert(Plugin plugin) {
        var botDetectionPlugin = new BotDetectionPlugin();
        botDetectionPlugin.setId(plugin.manifest().id());
        botDetectionPlugin.setName(plugin.manifest().name());
        botDetectionPlugin.setDescription(plugin.manifest().description());
        botDetectionPlugin.setVersion(plugin.manifest().version());
        botDetectionPlugin.setCategory(plugin.manifest().category());
        botDetectionPlugin.setDeployed(plugin.deployed());
        botDetectionPlugin.setFeature(plugin.manifest().feature());
        return botDetectionPlugin;
    }

}
