package com.taskmanger.backend.security;

import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.annotation.web.configuration.EnableWebSecurity;
import org.springframework.security.web.SecurityFilterChain;

@Configuration
@EnableWebSecurity // tells spring to use our own security rather than the default provided by spring
public class SecurityConfig {

    @Bean
    public SecurityFilterChain securityFilterChain(HttpSecurity http) throws Exception {
        http
            .csrf(csrf -> csrf.disable()) // Optional: Disable CSRF
            .authorizeHttpRequests(auth -> auth
                .anyRequest().permitAll() // or `.authenticated()` if needed
            )
            .formLogin(form -> form.disable()) // 🔥 Disable the default login page
            .httpBasic(basic -> basic.disable()); // Optional: disable HTTP Basic too

        return http.build();
    }
}
