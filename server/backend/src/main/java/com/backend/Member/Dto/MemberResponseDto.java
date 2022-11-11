package com.backend.Member.Dto;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
@AllArgsConstructor
public class MemberResponseDto {
    private long memberId;

    private String memberName;

    private String memberEmail;

    private String memberPhone;
}
