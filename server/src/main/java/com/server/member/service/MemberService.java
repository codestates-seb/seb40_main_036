package com.server.member.service;


import com.server.config.jwt.JwtTokenProvider;
import com.server.exception.BusinessLogicException;
import com.server.exception.ExceptionCode;
import com.server.member.entity.Member;
import com.server.member.repository.MemberRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Sort;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

import java.util.Optional;

@Service
@RequiredArgsConstructor // 생성자주입 알아서 해주는 어노테이션
public class MemberService {

    private final MemberRepository memberRepository;

    private final PasswordEncoder passwordEncoder;

    private final JwtTokenProvider jwtTokenProvider;

    public Member createMember(Member member){

        Member mem = memberRepository.findByEmail(member.getEmail());
        if(mem!=null){ // 있으면
            throw new BusinessLogicException(ExceptionCode.MEMBER_EXISTS);
        }

        member.setPassword(passwordEncoder.encode(member.getPassword()));

        return memberRepository.save(member);
    }

    public Member LoginMember(Member member){ // 리턴값을 토큰값으로~

        //String memberEmail = member.getEmail();
        //String memberPassword = member.getPassword();

        Member mem=memberRepository.findByEmail(member.getEmail());
        if(mem==null){
            throw new BusinessLogicException(ExceptionCode.Member_NOT_FOUND);
        }


        if(!passwordEncoder.matches(member.getPassword(),mem.getPassword())){
            throw new BusinessLogicException(ExceptionCode.Member_NOT_FOUND);
        }

        //Member mem = memberRepository.findByEmailAndPassword(member.getEmail(), member.getPassword());
        //return mem;
        mem.setToken(jwtTokenProvider.createToken(mem.getEmail()));
        return mem;
    }

    public Member findMember(long memberId){
        return findVerifiedMember(memberId);
    }


    public Page<Member> findMembers(int page, int size){
        return memberRepository.findAll(PageRequest.of(page,size,
                Sort.by("memberId").descending()));
    }

    public void deleteMember(long memberId){

        Member findMember = findVerifiedMember(memberId);
        memberRepository.delete(findMember);

    }

    public Member findVerifiedMember(long memberId){
        Optional<Member> optionalMember=
                memberRepository.findById(memberId);
        Member findMember =
                optionalMember.orElseThrow(()->
                        new BusinessLogicException(ExceptionCode.Member_NOT_FOUND));
        return findMember;
    }

}