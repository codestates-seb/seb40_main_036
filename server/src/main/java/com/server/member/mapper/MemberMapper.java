package com.server.member.mapper;


import com.server.member.dto.*;
import com.server.member.entity.Email;
import com.server.member.entity.Member;
import com.server.member.entity.Phone;
import org.mapstruct.Mapper;

import java.util.List;

@Mapper(componentModel = "spring")
public interface MemberMapper {

    Member memberPostDtoToMember(MemberPostDto memberPostDto);

    Email memberEmailDtoToMember(MemberEmailDto memberEmailDto);

    Phone memberPhoneDtoToMember(MemberPhoneDto memberPhoneDto);

    Member memberLoginDtoToMember(MemberLoginDto memberLoginDto);

    MemberResponseDto memberToMemberResponseDto(Member member);

    List <MemberResponseDto> membersToMemberResponseDtos(List<Member> members);

}