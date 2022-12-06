package com.server.config;

import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import springfox.documentation.builders.ApiInfoBuilder;
import springfox.documentation.builders.PathSelectors;
import springfox.documentation.builders.RequestHandlerSelectors;
import springfox.documentation.service.ApiInfo;
import springfox.documentation.service.ApiKey;
import springfox.documentation.service.AuthorizationScope;
import springfox.documentation.service.SecurityReference;
import springfox.documentation.spi.DocumentationType;
import springfox.documentation.spi.service.contexts.SecurityContext;
import springfox.documentation.spring.web.plugins.ApiSelectorBuilder;
import springfox.documentation.spring.web.plugins.Docket;
import springfox.documentation.swagger2.annotations.EnableSwagger2;

import java.util.Arrays;
import java.util.List;

// Swagger설정
@Configuration  //스프링 실행시 설정파일을 읽어드리기 위한 어노테이션
@EnableSwagger2
public class SwaggerConfig {
    @Bean
    public Docket api() {
        return new Docket(DocumentationType.SWAGGER_2)
                .useDefaultResponseMessages(false)
                .select()
                .apis(RequestHandlerSelectors.basePackage("com.server"))
                .paths(PathSelectors.ant("/**"))
                .build()
                .apiInfo(metaData())
                .securityContexts(Arrays.asList(securityContext()))
                .securitySchemes(Arrays.asList(apiKey()));

    }
    private ApiInfo metaData() {
        return new ApiInfoBuilder()
                .title("Salida API 명세서")
                .description("프로젝트 Salida는 스페인어로 '출구'를 뜻하는 'Salida'에서 출발하였습니다.\\n\" +\n" +
                        "                \"스페인어 발음으로 Salida [살리다] 즉, 한국어로 '사람을 살리다' 와 비슷한 어감으로 지진과 같은 재난 상황 발생 시, \" +\n" +
                        "                \"사람을 살리는 안전한 출구를 모두가 찾을 수 있길 바라는 마음으로 제작하였습니다.")
//                .version("0.4.0")
//                .termsOfServiceUrl("Terms of service")
//                .contact(new Contact("Tae Jeong, Da hun", "https://github.com/GreenByMe/GreenByMe_Server", "xowjd41@naver.com"))
//                .license("Apache License Version 2.0")
//                .licenseUrl("https://www.apache.org/licenses/LICENSE-2.0")
                .build();
    }

//    @Bean
//    public Docket docket() {
//
//        ApiInfoBuilder apiInfo = new ApiInfoBuilder();
//        apiInfo.title("Salida API 명세서");
//        apiInfo.description("프로젝트 Salida는 스페인어로 '출구'를 뜻하는 'Salida'에서 출발하였습니다.\n" +
//                "스페인어 발음으로 Salida [살리다] 즉, 한국어로 '사람을 살리다' 와 비슷한 어감으로 지진과 같은 재난 상황 발생 시, " +
//                "사람을 살리는 안전한 출구를 모두가 찾을 수 있길 바라는 마음으로 제작하였습니다.");
//
//        Docket docket = new Docket(DocumentationType.SWAGGER_2);
//        docket.apiInfo(apiInfo.build());
//
//        ApiSelectorBuilder apis = docket.select().apis(RequestHandlerSelectors.basePackage("com.server"));
//        apis.paths(PathSelectors.any()); // 지정은 이런식 PathSelectors.ant("/**")
//
//        return apis.build();
//    }
    private ApiKey apiKey() {
        return new ApiKey("JWT", "token", "header");
    }
    private SecurityContext securityContext() {
        return springfox
                .documentation
                .spi.service
                .contexts
                .SecurityContext
                .builder()
                .securityReferences(defaultAuth()).forPaths(PathSelectors.any()).build();
    }

    List<SecurityReference> defaultAuth() {
        AuthorizationScope authorizationScope = new AuthorizationScope("global", "accessEverything");
        AuthorizationScope[] authorizationScopes = new AuthorizationScope[1];
        authorizationScopes[0] = authorizationScope;
        return Arrays.asList(new SecurityReference("JWT", authorizationScopes));
    }


}



















