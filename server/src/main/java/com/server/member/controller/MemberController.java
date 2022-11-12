package com.server.member.controller;

import com.server.member.dto.MemberPostDto;
import com.server.member.entity.Member;
import com.server.member.mapper.MemberMapper;
import com.server.member.service.MemberService;
import lombok.AllArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.validation.annotation.Validated;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import javax.validation.Valid;

@RestController
@RequestMapping("/member")
@AllArgsConstructor
@Validated
public class MemberController {

    private final MemberService memberService;

    private final MemberMapper memberMapper;

    @PostMapping("/join")
    public ResponseEntity postMember(@RequestBody @Valid MemberPostDto memberPostDto){
        Member member = memberMapper.memberPostDtoMember(memberPostDto);
        Member response = memberService.createMember(member);

        return new ResponseEntity<>(
                memberMapper.memberToMemberResponseDto(response),
                HttpStatus.CREATED);
    }

//    @PostMapping("/login")
//    public ResponseEntity<Object> loginMember(@RequestBody @Valid MemberLoginDto memberLoginDto){
//        Member member = memberMapper.memberLoginDtoMember(memberLoginDto);
//
//        return null;
//    }
}