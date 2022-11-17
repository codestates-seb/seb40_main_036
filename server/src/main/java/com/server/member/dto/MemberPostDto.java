package com.server.member.dto;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import javax.validation.constraints.Email;
import javax.validation.constraints.NotBlank;
import javax.validation.constraints.Pattern;

@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
public class MemberPostDto { // 회원가입할 때 필요한 post

    @NotBlank(message = "이름은 필수 입력값입니다.")
    private String name;

    @NotBlank(message = "비밀번호 형식에 맞지 않습니다.")
    @Pattern(regexp = "(?=.*[a-zA-Z])(?=.*[!@#$%^+=-])(?=.*[0-9]).{8,25}",
            message = "비밀번호는 영문 대,소문자와 숫자, 특수기호가 적어도 1개 이상 포함된 8자 ~ 25자의 비밀번호여야 합니다.")
    private String password;

    @Email(message = "이메일 형식에 맞지 않습니다.")
    @Pattern(regexp = "[A-Za-z0-9_]+[A-Za-z0-9]*[@]{1}[A-Za-z0-9]+[A-Za-z0-9]*[.]{1}[A-Za-z]{1,3}")
    private String email;

    @NotBlank(message = "휴대폰 번호는 필수 입력값입니다.")
    private String phone;
}