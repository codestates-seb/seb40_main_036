package com.backend.Member.Dto;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
public class MemberPostDto { // 회원가입할 때 필요한 post

    private String memberName;

    private String memberPassword;

    private String memberEmail;

    private String memberPhone;
}
