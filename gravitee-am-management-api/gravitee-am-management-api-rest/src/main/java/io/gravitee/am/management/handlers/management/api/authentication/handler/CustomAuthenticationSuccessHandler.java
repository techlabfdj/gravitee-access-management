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
package io.gravitee.am.management.handlers.management.api.authentication.handler;

import io.gravitee.am.identityprovider.api.User;
import io.gravitee.am.management.handlers.management.api.authentication.provider.generator.JWTGenerator;
import io.gravitee.am.management.handlers.management.api.authentication.service.AuthenticationService;
import jakarta.servlet.http.Cookie;
import jakarta.servlet.http.HttpServletRequest;
import jakarta.servlet.http.HttpServletResponse;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.Authentication;
import org.springframework.security.web.authentication.SimpleUrlAuthenticationSuccessHandler;

import java.io.IOException;

import static io.gravitee.am.management.handlers.management.api.authentication.provider.generator.RedirectCookieGenerator.DEFAULT_REDIRECT_COOKIE_NAME;

/**
 * @author Titouan COMPIEGNE (titouan.compiegne at graviteesource.com)
 * @author GraviteeSource Team
 */
@Slf4j
public class CustomAuthenticationSuccessHandler extends SimpleUrlAuthenticationSuccessHandler {

    @Autowired
    private JWTGenerator jwtGenerator;

    @Autowired
    private AuthenticationService authenticationService;

    @Override
    public void onAuthenticationSuccess(HttpServletRequest request, HttpServletResponse response,
                                        Authentication authentication) throws IOException {

        String redirectUri = (String) request.getAttribute(DEFAULT_REDIRECT_COOKIE_NAME);

        // finish authentication and get an enhanced principal with user information.
        User principal = authenticationService.onAuthenticationSuccess(authentication);

        // store jwt authentication cookie to secure management restricted operations
        Cookie jwtAuthenticationCookie = jwtGenerator.generateCookie(principal);
        response.addCookie(jwtAuthenticationCookie);

        // Replay the original request.
        log.debug("Redirecting to Url: {}", redirectUri);
        getRedirectStrategy().sendRedirect(request, response, redirectUri);
    }
}
