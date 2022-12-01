package com.server.member.mapper;

import com.server.member.dto.MemberEmailDto;
import com.server.member.dto.MemberLoginDto;
import com.server.member.dto.MemberPhoneDto;
import com.server.member.dto.MemberPostDto;
import com.server.member.dto.MemberResponseDto;
import com.server.member.entity.Email;
import com.server.member.entity.Member;
import com.server.member.entity.Phone;
import java.util.ArrayList;
import java.util.List;
import javax.annotation.processing.Generated;
import org.springframework.stereotype.Component;

@Generated(
    value = "org.mapstruct.ap.MappingProcessor",
    date = "2022-12-01T10:28:45+0900",
    comments = "version: 1.5.1.Final, compiler: javac, environment: Java 17.0.2 (Oracle Corporation)"
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
    public Phone memberPhoneDtoToMember(MemberPhoneDto memberPhoneDto) {
        if ( memberPhoneDto == null ) {
            return null;
        }

        Phone phone = new Phone();

        phone.setPhone( memberPhoneDto.getPhone() );

        return phone;
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
