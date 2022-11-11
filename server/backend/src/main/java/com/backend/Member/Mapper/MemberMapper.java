package com.backend.Member.Mapper;

import com.backend.Member.Dto.MemberLoginDto;
import com.backend.Member.Dto.MemberPostDto;
import com.backend.Member.Dto.MemberResponseDto;
import com.backend.Member.Entity.Member;
import org.mapstruct.Mapper;

@Mapper(componentModel = "spring")
public interface MemberMapper {

    Member memberPostDtoMember(MemberPostDto memberPostDto);

    Member memberLoginDtoMember(MemberLoginDto memberLoginDto);

    MemberResponseDto memberToMemberResponseDto(Member member);
}
