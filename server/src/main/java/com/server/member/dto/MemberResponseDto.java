package com.server.member.dto;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
@AllArgsConstructor
@Builder
public class MemberResponseDto {
    private long memberId;

    private String name;

    private String email;

    private String phone;

    private String token;
}