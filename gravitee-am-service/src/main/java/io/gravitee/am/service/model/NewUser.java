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
package io.gravitee.am.service.model;

import com.fasterxml.jackson.annotation.JsonIgnore;
import io.gravitee.am.model.IUser;
import io.gravitee.am.service.validators.UserEmail;
import io.swagger.v3.oas.annotations.media.Schema;
import jakarta.validation.constraints.NotBlank;
import lombok.Getter;
import lombok.Setter;

import java.util.Date;
import java.util.Map;


/**
 * @author Titouan COMPIEGNE (titouan.compiegne at graviteesource.com)
 * @author GraviteeSource Teams
 */
@Getter
@Setter
public class NewUser implements IUser {

    @NotBlank
    private String username;

    private String password;

    @UserEmail
    private String email;

    private String firstName;

    private String lastName;

    private String externalId;

    private boolean accountNonExpired = true;

    private boolean accountNonLocked = true;

    private boolean credentialsNonExpired = true;

    private boolean enabled = true;

    private boolean internal;

    private boolean preRegistration;

    private boolean registrationCompleted;

    private String domain;

    private String source;

    private String client;

    private Long loginsCount;

    @Schema(type = "java.lang.Long")
    private Date loggedAt;

    private String preferredLanguage;

    private Map<String, Object> additionalInformation;

    @Schema(type = "java.lang.Long")
    private Date createdAt;

    @Schema(type = "java.lang.Long")
    private Date updatedAt;


    @Override
    @JsonIgnore
    public String getDisplayName() {
        return null;
    }

    @Override
    @JsonIgnore
    public String getNickName() {
        return null;
    }


    @Override
    public String toString() {
        return "NewUser{" +
                "username='" + username + '\'' +
                ", email='" + email + '\'' +
                ", firstName='" + firstName + '\'' +
                ", lastName='" + lastName + '\'' +
                ", accountNonExpired=" + accountNonExpired +
                ", accountNonLocked=" + accountNonLocked +
                ", credentialsNonExpired=" + credentialsNonExpired +
                ", enabled=" + enabled +
                ", domain='" + domain + '\'' +
                ", source='" + source + '\'' +
                ", loginsCount=" + loginsCount +
                ", loggedAt=" + loggedAt +
                ", additionalInformation=" + additionalInformation +
                ", createdAt=" + createdAt +
                ", updatedAt=" + updatedAt +
                '}';
    }
}
