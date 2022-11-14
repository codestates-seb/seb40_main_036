package com.server.member.dto;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
public class MemberPostDto { // 회원가입할 때 필요한 post

    private String name;

    private String password;

    private String email;

    private String phone;
}