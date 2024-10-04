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

package io.gravitee.am.gateway.handler.scim.resources.bulk;


import io.gravitee.am.gateway.handler.scim.exception.InvalidSyntaxException;
import io.gravitee.am.gateway.handler.scim.exception.TooManyOperationException;
import io.gravitee.am.gateway.handler.scim.model.BulkRequest;
import io.vertx.rxjava3.ext.web.RoutingContext;
import lombok.extern.slf4j.Slf4j;

/**
 * @author Eric LELEU (eric.leleu at graviteesource.com)
 * @author GraviteeSource Team
 */
@Slf4j
public class BulkEndpoint {
    /**
     * Max payload size for Bulk request limited to 1MB
     */
    private final static int BULK_MAX_REQUEST_LENGTH = 1048576;

    /**
     * Maximum number of operations for Bulk request
     */
    private final static int BULK_MAX_REQUEST_OPERATIONS = 1000;

    public void execute(RoutingContext context) {

        // TODO try catch IllegalStateException to convert it in SCIMException
        final var bulkRequest = context.body().asPojo(BulkRequest.class, BULK_MAX_REQUEST_LENGTH);
        if (bulkRequest == null) {
            context.fail(new InvalidSyntaxException("BulkRequest is required"));
            return;
        }

        if (bulkRequest.getOperations().size() > BULK_MAX_REQUEST_OPERATIONS) {
            // TODO create the right type of error
            context.fail(TooManyOperationException.tooManyOperation(BULK_MAX_REQUEST_OPERATIONS));
            return;
        }

    }
}
