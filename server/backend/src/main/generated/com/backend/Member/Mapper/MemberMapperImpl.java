package com.backend.Member.Mapper;

import com.backend.Member.Dto.MemberLoginDto;
import com.backend.Member.Dto.MemberPostDto;
import com.backend.Member.Dto.MemberResponseDto;
import com.backend.Member.Entity.Member;
import javax.annotation.processing.Generated;
import org.springframework.stereotype.Component;

@Generated(
    value = "org.mapstruct.ap.MappingProcessor",
    date = "2022-11-11T15:47:31+0900",
    comments = "version: 1.4.2.Final, compiler: javac, environment: Java 11.0.17 (Azul Systems, Inc.)"
)
@Component
public class MemberMapperImpl implements MemberMapper {

    @Override
    public Member memberPostDtoMember(MemberPostDto memberPostDto) {
        if ( memberPostDto == null ) {
            return null;
        }

        Member member = new Member();

        member.setMemberName( memberPostDto.getMemberName() );
        member.setMemberEmail( memberPostDto.getMemberEmail() );
        member.setMemberPassword( memberPostDto.getMemberPassword() );
        member.setMemberPhone( memberPostDto.getMemberPhone() );

        return member;
    }

    @Override
    public Member memberLoginDtoMember(MemberLoginDto memberLoginDto) {
        if ( memberLoginDto == null ) {
            return null;
        }

        Member member = new Member();

        member.setMemberEmail( memberLoginDto.getMemberEmail() );
        member.setMemberPassword( memberLoginDto.getMemberPassword() );

        return member;
    }

    @Override
    public MemberResponseDto memberToMemberResponseDto(Member member) {
        if ( member == null ) {
            return null;
        }

        long memberId = 0L;
        String memberName = null;
        String memberEmail = null;
        String memberPhone = null;

        if ( member.getMemberId() != null ) {
            memberId = member.getMemberId();
        }
        memberName = member.getMemberName();
        memberEmail = member.getMemberEmail();
        memberPhone = member.getMemberPhone();

        MemberResponseDto memberResponseDto = new MemberResponseDto( memberId, memberName, memberEmail, memberPhone );

        return memberResponseDto;
    }
}
