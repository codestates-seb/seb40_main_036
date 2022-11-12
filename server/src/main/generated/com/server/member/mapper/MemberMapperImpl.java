package com.server.member.mapper;

import com.server.member.dto.MemberLoginDto;
import com.server.member.dto.MemberPostDto;
import com.server.member.dto.MemberResponseDto;
import com.server.member.entity.Member;
import javax.annotation.processing.Generated;
import org.springframework.stereotype.Component;

@Generated(
    value = "org.mapstruct.ap.MappingProcessor",
    date = "2022-11-12T20:50:51+0900",
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

        member.setName( memberPostDto.getName() );
        member.setEmail( memberPostDto.getEmail() );
        member.setPassword( memberPostDto.getPassword() );
        member.setPhone( memberPostDto.getPhone() );

        return member;
    }

    @Override
    public Member memberLoginDtoMember(MemberLoginDto memberLoginDto) {
        if ( memberLoginDto == null ) {
            return null;
        }

        Member member = new Member();

        member.setEmail( memberLoginDto.getEmail() );
        member.setPassword( memberLoginDto.getPassword() );

        return member;
    }

    @Override
    public MemberResponseDto memberToMemberResponseDto(Member member) {
        if ( member == null ) {
            return null;
        }

        long id = 0L;
        String name = null;
        String email = null;
        String phone = null;

        if ( member.getId() != null ) {
            id = member.getId();
        }
        name = member.getName();
        email = member.getEmail();
        phone = member.getPhone();

        MemberResponseDto memberResponseDto = new MemberResponseDto( id, name, email, phone );

        return memberResponseDto;
    }
}
