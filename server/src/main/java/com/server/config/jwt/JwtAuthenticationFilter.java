package com.server.config.jwt;

import com.server.config.auth.UserAuthentication;
import lombok.extern.slf4j.Slf4j;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.security.web.authentication.WebAuthenticationDetailsSource;
import org.springframework.util.StringUtils;
import org.springframework.web.filter.OncePerRequestFilter;

import javax.servlet.FilterChain;
import javax.servlet.ServletException;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.io.IOException;

@Slf4j
public class JwtAuthenticationFilter extends OncePerRequestFilter {
    @Override
    protected void doFilterInternal(HttpServletRequest request
                                , HttpServletResponse response
                                , FilterChain filterChain) throws ServletException, IOException {

        log.info("request.getRequestURI() =====>  "+request.getRequestURI());

        if(!request.getRequestURI().contains("login") &&
                !request.getRequestURI().contains("favicon")){
            log.info("토큰 체크");
        }
        try {

            // 파라미터로 접근시request에서 jwt 토큰 추출
            //String jwt =request.getParameter("token");    // 파라미터로 입력할 시 (ex. key:"token", value:"jwt토큰")
            String jwt =request.getHeader("token"); // 헤더에 입력할 시 (ex. key:"token", value:"jwt토큰")

            if(jwt==null){
                log.info("유효성 검사할 토큰 없음\n==================================================================================================\n\n\n");
            }

            //else if(JwtTokenProvider.validateToken(jwt)) {
            else if(jwt!=null) {
                System.out.println("\n\n토큰 생성 후 들어옴, token: "+jwt+"\n\n");
                // jwt에서 email 추출
                String userEmail=JwtTokenProvider.getEmailFromJwt(jwt);

                log.info("userEmail "+userEmail);

                // 추출한 email을 인증
                UserAuthentication authentication=new UserAuthentication(userEmail,null,null);

                // 기본적으로 제공한 details 세팅
                authentication.setDetails(new WebAuthenticationDetailsSource().buildDetails(request));

                // 세션에서 계속하기 위해 securityContext에 Authentication 등록
                SecurityContextHolder.getContext().setAuthentication(authentication);
            }
            else {
                if(StringUtils.isEmpty(jwt)){
                    request.setAttribute("unauthorization","401 인증키 없음");
                }
                if(JwtTokenProvider.validateToken(jwt)){
                    request.setAttribute("unauthorization","401-001 인증키 만료");
                }
            }
        }
        catch (Exception e){
            logger.error("Could not set user authentication in security context", e);
        }

        filterChain.doFilter(request,response);

    }
}
