package com.server.config.jwt;

import io.jsonwebtoken.*;
import lombok.extern.slf4j.Slf4j;
import org.springframework.security.core.Authentication;
import org.springframework.stereotype.Component;

import java.util.Date;

@Component
@Slf4j
public class JwtTokenProvider {
    private static final String secretKey = "asdfasdfasdfasdfasdf";

    private static final long tokenValidTime = 60 * 60 * 1000L ;  // 토큰 유효시간 60분

    //JWT 생성
    public String createToken(Authentication authentication,String email){
        Date now=new Date();
        Date expiryDate=new Date(now.getTime()+tokenValidTime);

        String token= Jwts.builder()
                .setSubject((String) authentication.getPrincipal()) // 사용자
                .setIssuedAt(new Date())    // 현재 시간 기반으로 생성
                .setExpiration(expiryDate)  // 만료시간
                .claim("email",email)
                .signWith(SignatureAlgorithm.HS512, secretKey)  // 사용할 알고리즘, 시크릿 키값
                .compact();

        if(!validateToken(token)){
            log.info("jwtTOokenProvider: 토큰 생성 자체가 안됨");
            return null;
        }

        return token;
    }


    // jwt 토큰에서 이메일 추출
    public static String getEmailFromJwt(String token){
        Claims claims=Jwts.parser()
                .setSigningKey(secretKey)
                .parseClaimsJws(token)
                .getBody();

        log.info("email"+claims.get("email"));
        log.info("issuer:"+claims.getIssuer());
        log.info("issue:"+claims.getIssuedAt().toString());
        log.info("subject:"+claims.getSubject());
        log.info("Audience:"+claims.getAudience());
        log.info("expire:"+claims.getExpiration().toString());

        return claims.getSubject();
    }

    // jwt 토큰 유효성 검사
    public static boolean validateToken(String token){
        try{
            Jwts.parser().setSigningKey(secretKey).parseClaimsJws(token);
            return true;
        }catch (SignatureException e){
            log.error("Invalid JWT sigunature"+e);
        }catch (MalformedJwtException e){
            log.error("Invalid JWT token"+e);
        }catch (ExpiredJwtException e){
            log.error("Expired JWT token"+e);
        }catch (UnsupportedJwtException e){
            log.error("Unsupported JWT token"+e);
        }catch (IllegalArgumentException e){
            log.error("JWT clamis string is empty", e);
        }

        return false;
    }

}
