package com.server.member.mapper;

import com.server.member.dto.EmailResponseDto;
import com.server.member.dto.MemberEmailDto;
import com.server.member.dto.MemberLoginDto;
import com.server.member.dto.MemberPostDto;
import com.server.member.dto.MemberResponseDto;
import com.server.member.entity.Email;
import com.server.member.entity.Member;
import java.util.ArrayList;
import java.util.List;
import javax.annotation.processing.Generated;
import org.springframework.stereotype.Component;

@Generated(
    value = "org.mapstruct.ap.MappingProcessor",
    date = "2022-11-30T02:03:55+0900",
    comments = "version: 1.5.1.Final, compiler: javac, environment: Java 17.0.5 (Amazon.com Inc.)"
)
@Component
public class MemberMapperImpl implements MemberMapper {

    @Override
    public Member memberPostDtoToMember(MemberPostDto memberPostDto) {
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
    public Email memberEmailDtoToMember(MemberEmailDto memberEmailDto) {
        if ( memberEmailDto == null ) {
            return null;
        }

        Email email = new Email();

        email.setEmail( memberEmailDto.getEmail() );

        return email;
    }

    @Override
    public Member memberLoginDtoToMember(MemberLoginDto memberLoginDto) {
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

        MemberResponseDto.MemberResponseDtoBuilder memberResponseDto = MemberResponseDto.builder();

        if ( member.getMemberId() != null ) {
            memberResponseDto.memberId( member.getMemberId() );
        }
        memberResponseDto.name( member.getName() );
        memberResponseDto.email( member.getEmail() );
        memberResponseDto.phone( member.getPhone() );
        memberResponseDto.token( member.getToken() );

        return memberResponseDto.build();
    }

    @Override
    public EmailResponseDto emailToEmailResponseDto(Email email) {
        if ( email == null ) {
            return null;
        }

        EmailResponseDto.EmailResponseDtoBuilder emailResponseDto = EmailResponseDto.builder();

        emailResponseDto.email( email.getEmail() );

        return emailResponseDto.build();
    }

    @Override
    public List<MemberResponseDto> membersToMemberResponseDtos(List<Member> members) {
        if ( members == null ) {
            return null;
        }

        List<MemberResponseDto> list = new ArrayList<MemberResponseDto>( members.size() );
        for ( Member member : members ) {
            list.add( memberToMemberResponseDto( member ) );
        }

        return list;
    }
}
