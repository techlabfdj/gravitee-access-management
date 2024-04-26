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
import io.swagger.v3.oas.annotations.media.Schema;
import jakarta.validation.constraints.Size;
import lombok.Getter;
import lombok.Setter;
import lombok.ToString;

import java.util.Date;
import java.util.Map;

import static io.gravitee.am.service.validators.email.EmailValidatorImpl.EMAIL_MAX_LENGTH;

/**
 * @author Titouan COMPIEGNE (titouan.compisegne at graviteesource.com)
 * @author GraviteeSource Team
 */
@ToString
@Getter
@Setter
public class UpdateUser implements IUser {

    @Size(max = EMAIL_MAX_LENGTH,  message = "must not be greater than "+ EMAIL_MAX_LENGTH)
    private String email;

    private String firstName;

    private String lastName;

    private String displayName;

    @ToString.Exclude
    private String externalId;

    private boolean accountNonExpired = true;

    private boolean accountNonLocked = true;

    private boolean credentialsNonExpired = true;

    private boolean enabled = true;

    private boolean preRegistration;

    private boolean registrationCompleted;

    private String source;

    @ToString.Exclude
    private String client;

    private long loginsCount;

    @Schema(type = "java.lang.Long")
    private Date loggedAt;

    private String preferredLanguage;

    private Map<String, Object> additionalInformation;

    @Schema(type = "java.lang.Long")
    private Date createdAt;

    @Schema(type = "java.lang.Long")
    private Date updatedAt;

    private Boolean forceResetPassword;

    @Override
    @JsonIgnore
    public String getUsername() {
        return null;
    }

    @Override
    @JsonIgnore
    public String getNickName() {
        return null;
    }
}
