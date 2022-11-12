package com.server.member.service;


import com.server.exception.BusinessLogicException;
import com.server.exception.ExceptionCode;
import com.server.member.entity.Member;
import com.server.member.repository.MemberRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

@Service
@RequiredArgsConstructor // 생성자주입 알아서 해주는 어노테이션
public class MemberService {

    private final MemberRepository memberRepository;

    public Member createMember(Member member){

        Member mem = memberRepository.findByEmail(member.getEmail());
        if(mem!=null){ // 있으면
            throw new BusinessLogicException(ExceptionCode.MEMBER_EXISTS);
        }
        return memberRepository.save(member);
    }

//    public void LoginMember(Member member){ // 리턴값을 토큰값으로~
//
//        String memberEmail = member.getMemberEmail();
//        String memberPassword = member.getMemberPassword();
//
//        Member mem = memberRepository.findByMemberEmailAndMemberPassword(member.getMemberEmail(), member.getMemberPassword());
//    }
}