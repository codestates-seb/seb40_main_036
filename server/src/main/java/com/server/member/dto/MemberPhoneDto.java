package com.server.member.dto;


import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import javax.validation.constraints.NotBlank;

@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
public class MemberPhoneDto {

    @NotBlank(message = "휴대폰 번호는 필수 입력값입니다.")
    private String phone;
}
