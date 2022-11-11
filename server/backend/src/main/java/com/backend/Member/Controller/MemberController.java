package com.backend.Member.Controller;

import com.backend.Member.Dto.MemberLoginDto;
import com.backend.Member.Dto.MemberPostDto;
import com.backend.Member.Entity.Member;
import com.backend.Member.Mapper.MemberMapper;
import com.backend.Member.Service.MemberService;
import lombok.AllArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.slf4j.LoggerFactory;
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
