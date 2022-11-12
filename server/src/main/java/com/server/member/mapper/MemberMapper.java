package com.server.member.mapper;


import com.server.member.dto.MemberLoginDto;
import com.server.member.dto.MemberPostDto;
import com.server.member.dto.MemberResponseDto;
import com.server.member.entity.Member;
import org.mapstruct.Mapper;

@Mapper(componentModel = "spring")
public interface MemberMapper {

    Member memberPostDtoMember(MemberPostDto memberPostDto);

    Member memberLoginDtoMember(MemberLoginDto memberLoginDto);

    MemberResponseDto memberToMemberResponseDto(Member member);
}