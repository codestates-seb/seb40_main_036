package com.backend.Member.Service;

import com.backend.Exceptioin.BusinessLogicException;
import com.backend.Exceptioin.ExceptionCode;
import com.backend.Member.Entity.Member;
import com.backend.Member.Repository.MemberRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

@Service
@RequiredArgsConstructor // 생성자주입 알아서 해주는 어노테이션
public class MemberService {

    private final MemberRepository memberRepository;

    public Member createMember(Member member){

        Member mem = memberRepository.findByMemberEmail(member.getMemberEmail());
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
