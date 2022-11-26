package com.server.config;

import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import springfox.documentation.builders.ApiInfoBuilder;
import springfox.documentation.builders.PathSelectors;
import springfox.documentation.builders.RequestHandlerSelectors;
import springfox.documentation.spi.DocumentationType;
import springfox.documentation.spring.web.plugins.ApiSelectorBuilder;
import springfox.documentation.spring.web.plugins.Docket;
import springfox.documentation.swagger2.annotations.EnableSwagger2;

// Swagger설정
@Configuration  //스프링 실행시 설정파일을 읽어드리기 위한 어노테이션
@EnableSwagger2
public class SwaggerConfig {

    @Bean
    public Docket docket() {

        ApiInfoBuilder apiInfo = new ApiInfoBuilder();
        apiInfo.title("Salida API 명세서");
        apiInfo.description("프로젝트 Salida는 스페인어로 '출구'를 뜻하는 'Salida'에서 출발하였습니다.\n" +
                "스페인어 발음으로 Salida [살리다] 즉, 한국어로 '사람을 살리다' 와 비슷한 어감으로 지진과 같은 재난 상황 발생 시, " +
                "사람을 살리는 안전한 출구를 모두가 찾을 수 있길 바라는 마음으로 제작하였습니다.");

        Docket docket = new Docket(DocumentationType.SWAGGER_2);
        docket.apiInfo(apiInfo.build());

        ApiSelectorBuilder apis = docket.select().apis(RequestHandlerSelectors.basePackage("com.server"));
        apis.paths(PathSelectors.any()); // 지정은 이런식 PathSelectors.ant("/**")

        return apis.build();
    }
}



















