package com.sistema.ventas.config;

import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.annotation.web.configuration.EnableWebSecurity;
import org.springframework.security.web.SecurityFilterChain;

@Configuration
@EnableWebSecurity
public class SecurityConfig {

    @Bean
    public SecurityFilterChain securityFilterChain(HttpSecurity http) throws Exception {
        http
            .authorizeHttpRequests()
                .requestMatchers("/api/usuarios/registrar").permitAll()  // Permite el acceso sin autenticación a esta ruta
                .anyRequest().authenticated()  // Requiere autenticación para cualquier otra ruta
            .and()
            .csrf().disable();  // Desactiva la protección CSRF para propósitos de desarrollo

        return http.build();
    }
}
