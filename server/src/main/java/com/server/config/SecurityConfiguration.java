package com.server.config;

import com.server.config.jwt.JwtAuthenticationFilter;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.context.annotation.Bean;
import org.springframework.http.HttpMethod;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.annotation.web.configuration.EnableWebSecurity;
import org.springframework.security.config.annotation.web.configuration.WebSecurityConfigurerAdapter;
import org.springframework.security.config.http.SessionCreationPolicy;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.security.web.authentication.UsernamePasswordAuthenticationFilter;
import org.springframework.web.cors.CorsConfiguration;
import org.springframework.web.cors.CorsConfigurationSource;
import org.springframework.web.cors.UrlBasedCorsConfigurationSource;

import java.util.Arrays;

@Slf4j
@EnableWebSecurity
@RequiredArgsConstructor
public class SecurityConfiguration extends WebSecurityConfigurerAdapter {

    private final JwtAuthenticationEntryPoint unauthorizaedHandler;

    @Override
    protected void configure(HttpSecurity httpSecurity) throws Exception{
        httpSecurity
                .cors() // 교차 출처 리소스 공유(CORS)설정

                    .and()
                .csrf().disable() // CSRF 사이트 간 요청 위조 설정
                .exceptionHandling() // 인증, 허가 에러 시 공통적으로 처리해주는 부분
                .authenticationEntryPoint(unauthorizaedHandler)

                // 시큐리티는 기본적으로 세션 이용
                // BUT! 여기서는 세션을 사용하지 않시 떄문에 STATELESS로 설정
                    .and()
                .sessionManagement()
                .sessionCreationPolicy(SessionCreationPolicy.STATELESS)

                // UsernamePasswordAuthenticationFilter보다
                // JwtAuthenticationFilter 먼저 수행
                    .and()
                .addFilterBefore(new JwtAuthenticationFilter(),
                        UsernamePasswordAuthenticationFilter.class)
                .authorizeRequests()

                // login, 회원가입 api토큰이 없는 상태에서 요청이 들어옴
                .antMatchers(HttpMethod.POST,"/member/login").permitAll()
                .antMatchers(HttpMethod.POST,"/member/join").permitAll()

                // 질문, 답변 조회는 접근 허용
                .antMatchers(HttpMethod.GET,"/question/**").permitAll()
                .antMatchers(HttpMethod.GET,"/answer/**").permitAll()

                .antMatchers(HttpMethod.GET,"/shelterQuestion/**").permitAll()
                .antMatchers(HttpMethod.GET,"/shelterAnswer/**").permitAll()

                .antMatchers(HttpMethod.GET,"/stuffQuestion/**").permitAll()
                .antMatchers(HttpMethod.GET,"/stuffAnswer/**").permitAll()

                // 대피소 목록은 접근 허용
                .antMatchers(HttpMethod.GET,"/shelter").permitAll()
                .antMatchers(HttpMethod.GET,"/shelter/**").permitAll()
                
                // reservationInfo get접근 허용
                .antMatchers(HttpMethod.GET,"/reservationInfo").permitAll()
                .antMatchers(HttpMethod.GET,"/reservationInfo/**").permitAll()

                // email, phone 가입 가능 여부 확인 접근 허용
                .antMatchers(HttpMethod.POST,"/member/join/checkEmail").permitAll()
                .antMatchers(HttpMethod.POST,"/member/join/checkPhone").permitAll()

                .antMatchers("/**").authenticated(); // 나머지는 인증이 필요

    }

    @Bean
    public CorsConfigurationSource crosConfigurationSource(){
        CorsConfiguration corsConfiguration=new CorsConfiguration();
        corsConfiguration.addAllowedOrigin("*");
        corsConfiguration.setAllowedMethods(Arrays.asList("POST","PATCH","GET","DELETE"));
        corsConfiguration.addExposedHeader("*");
        corsConfiguration.setAllowCredentials(true);
        corsConfiguration.setMaxAge((long)3600);

        UrlBasedCorsConfigurationSource source=new UrlBasedCorsConfigurationSource();
        source.registerCorsConfiguration("/**",corsConfiguration);

        return source;
    }

    @Bean   // 비밀번호 암호화
    public PasswordEncoder passwordEncoder(){
        return new BCryptPasswordEncoder();
    }
}
