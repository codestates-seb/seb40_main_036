package com.server.member.controller;

import com.server.member.dto.MemberLoginDto;
import com.server.member.dto.MemberPostDto;
import com.server.member.entity.Member;
import com.server.member.mapper.MemberMapper;
import com.server.member.service.MemberService;
import com.server.response.MultiResponseDto;
import com.server.response.SingleResponseDto;
import io.swagger.annotations.Api;
import io.swagger.annotations.ApiImplicitParam;
import io.swagger.annotations.ApiOperation;
import lombok.AllArgsConstructor;
import org.springframework.data.domain.Page;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.validation.annotation.Validated;
import org.springframework.web.bind.annotation.*;

import javax.validation.Valid;
import javax.validation.constraints.Positive;
import java.util.List;

@RestController
@RequestMapping("/member")
@AllArgsConstructor
@Validated
@Api(tags ="Member API")
public class MemberController {

    private final MemberService memberService;

    private final MemberMapper memberMapper;

    @PostMapping("/join")
    public ResponseEntity postMember(@RequestBody @Valid MemberPostDto memberPostDto){
        Member member = memberMapper.memberPostDtoToMember(memberPostDto);
        Member response = memberService.createMember(member);

        return new ResponseEntity<>(
                memberMapper.memberToMemberResponseDto(response),
                HttpStatus.CREATED);
    }

    @GetMapping("/{memberId}")
    public ResponseEntity getMember(@PathVariable("memberId")
                                    @Positive long Id) {
        Member member = memberService.findMember(Id);

        return new ResponseEntity<>(

                new SingleResponseDto(memberMapper.memberToMemberResponseDto(member)),
                HttpStatus.OK);

    }

    @GetMapping
    public ResponseEntity getMembers(@Positive @RequestParam int page,
                                     @Positive @RequestParam int size) {
        Page<Member> pageMembers = memberService.findMembers(page-1, size);
        List<Member> members = pageMembers.getContent();// 내용까지도

        return new ResponseEntity<>(
                new MultiResponseDto<>(memberMapper.membersToMemberResponseDtos(members),
                        pageMembers),
                HttpStatus.OK);
    }

    @PostMapping("/login")
    public ResponseEntity<Object> loginMember(@RequestBody MemberLoginDto memberLoginDto) {
        Member member = memberMapper.memberLoginDtoToMember(memberLoginDto);
        Member response = memberService.LoginMember(member);

        return new ResponseEntity<>(memberMapper.memberToMemberResponseDto(response), HttpStatus.OK);
    }


    @PostMapping("/logout")
    public ResponseEntity<Object> logoutMember() {

        return new ResponseEntity<>("", HttpStatus.OK);
    }

    @DeleteMapping("/{memberId}")
    public ResponseEntity deleteMember(@PathVariable("memberId")
                                       @Positive long Id){

        memberService.deleteMember(Id);
        return new ResponseEntity<>(HttpStatus.NO_CONTENT);
    }

}