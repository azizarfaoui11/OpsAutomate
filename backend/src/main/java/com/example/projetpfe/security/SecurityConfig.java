package com.example.projetpfe.security;

//import com.example.register.config.customlogouthandler;
import lombok.RequiredArgsConstructor;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.http.HttpHeaders;
import org.springframework.http.HttpStatus;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.AuthenticationProvider;
import org.springframework.security.authentication.dao.DaoAuthenticationProvider;
import org.springframework.security.config.annotation.authentication.configuration.AuthenticationConfiguration;
import org.springframework.security.config.annotation.method.configuration.EnableMethodSecurity;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.annotation.web.configuration.EnableWebSecurity;
import org.springframework.security.config.annotation.web.configuration.WebSecurityCustomizer;
import org.springframework.security.config.annotation.web.configurers.AbstractHttpConfigurer;
import org.springframework.security.config.http.SessionCreationPolicy;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.security.web.SecurityFilterChain;
import org.springframework.security.web.authentication.HttpStatusEntryPoint;
import org.springframework.security.web.authentication.UsernamePasswordAuthenticationFilter;
import org.springframework.security.web.firewall.DefaultHttpFirewall;
import org.springframework.security.web.firewall.HttpFirewall;
import org.springframework.security.web.firewall.StrictHttpFirewall;
import org.springframework.web.cors.CorsConfiguration;
import org.springframework.web.cors.UrlBasedCorsConfigurationSource;
import org.springframework.web.filter.CorsFilter;

import java.util.Arrays;
import java.util.Collections;

import static org.springframework.security.config.Customizer.withDefaults;
import static org.springframework.security.config.http.SessionCreationPolicy.STATELESS;

@Configuration
@EnableWebSecurity
@EnableMethodSecurity(securedEnabled = true)
public class SecurityConfig {

    private final UserDetailsServiceImpl userDetailsServiceImp;

    private final JwtFilter jwtAuthenticationFilter;

   // private final customlogouthandler logoutHandler;

    public SecurityConfig(UserDetailsServiceImpl userDetailsServiceImp,
                          JwtFilter jwtAuthenticationFilter
                          ) {
        this.userDetailsServiceImp = userDetailsServiceImp;
        this.jwtAuthenticationFilter = jwtAuthenticationFilter;
        //this.logoutHandler = logoutHandler;
    }

    @Bean
    public SecurityFilterChain securityFilterChain(HttpSecurity http) throws Exception {

        return http
                .csrf(AbstractHttpConfigurer::disable)
                .authorizeHttpRequests(
                            req->req.requestMatchers("/login","/register/**","/me","/revoke-tokens","/refresh_token/**","/getuser","/jmeter-results-pdf","/selenuim-results-pdf","/junit-results-pdf","/upload","/actuator/prometheus","/dashboard","/payment/payments",
                                        "/payment/grouperessourcelist","/payment/charge","/payment/addgrouperessource",
                                        "/payment/prix/{id}","ping","/pingg","password-reset/reset","openUrl","openUrljmeter",
                                        "nexus-url","sonarqube-url","tandhifa","downloadartifact","password-reset/request",
                                        "/pipeline","/pipeline2","pipeline3","/pipeline4","/logout","/getallusers","/userbyemail",
                                        "/verify-email","adduser","updateuser/{id}","deleteuser","/delete/{id}","getuser/{id}",
                                        "status/{id}","/abonnement/add","/abonnement/list","/abonnement/delete/{id}","/abonnement/{id}",
                                        "/subscription/list","/subscription/add","/subscription/delete/{id}","/subscription/{id}",
                                        "/updateabonn/{id}","/updatesubsc/{id}","/abonntouser","/user/abonn","/payment/charge/abonn/{id}","/payment/addgrouperessource",
                                        "subsc1touser","subsc2touser","/user/subsc","/payment/project/add","/payment/project/list",
                                            "/abonnbyuser/{id}","/subscbyuser/{id}","/payment/grpBYuser/{id}","/payment/projetbyuser/{id}",
                                            "/payment/projet/delete/{id}","payment/somme/{id}","/payment/sendemail","/payment/sendemailmensuel","payment/sendemailannuel",
                                            "/payment/grp/delete/{id}","/payment/projet/delete/{id}","/stripedashboard","/payment/list",
                                            "/dashboard/backend","/dashboard/database","/dashboard/containers","/dashboard/machine","/pipeline5",
                                            "/payment/sendemaildeploylocal","/payment/sendemailhebergement","/payment/getproject")
                                .permitAll()
                                .requestMatchers("/admin_only/**").hasAuthority("ADMIN")
                                .anyRequest()
                                .authenticated()
                ).userDetailsService(userDetailsServiceImp)
                .sessionManagement(session->session
                        .sessionCreationPolicy(SessionCreationPolicy.STATELESS))
                .addFilterBefore(jwtAuthenticationFilter, UsernamePasswordAuthenticationFilter.class)
                .exceptionHandling(
                        e->e.accessDeniedHandler(
                                        (request, response, accessDeniedException)->response.setStatus(403)
                                )
                                .authenticationEntryPoint(new HttpStatusEntryPoint(HttpStatus.UNAUTHORIZED)))
                .logout(l->l
                        .logoutUrl("/logout")
                       // .addLogoutHandler(logoutHandler)
                        .logoutSuccessHandler((request, response, authentication) -> SecurityContextHolder.clearContext()
                        ))
                .build();

    }

    @Bean
    public PasswordEncoder passwordEncoder() {
        return new BCryptPasswordEncoder();
    }

    @Bean
    public AuthenticationManager authenticationManager(AuthenticationConfiguration configuration) throws Exception {
        return configuration.getAuthenticationManager();
    }
    /*@Bean
    public HttpFirewall getHttpFirewall() {
        return new DefaultHttpFirewall();
    }*/
    @Bean
    public HttpFirewall getHttpFirewall() {
        StrictHttpFirewall strictHttpFirewall = new StrictHttpFirewall();
        strictHttpFirewall.setAllowSemicolon(true);
        return strictHttpFirewall;
    }
    /*@Bean
    public HttpFirewall allowAllCharactersHttpFirewall() {
        StrictHttpFirewall firewall = new StrictHttpFirewall();
        firewall.setAllowUrlEncodedSlash(true);
        firewall.setAllowUrlEncodedPercent(true);
        firewall.setAllowSemicolon(true);
        firewall.setAllowBackSlash(true);
        firewall.setAllowUrlEncodedPeriod(true);
        firewall.setAllowUrlEncodedDoubleSlash(true);
        return firewall;
    }
    @Bean
    public WebSecurityCustomizer webSecurityCustomizer() {
        return (web) -> web.httpFirewall(allowAllCharactersHttpFirewall());
    }*/






}
