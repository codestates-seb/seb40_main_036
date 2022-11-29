package com.server.stuffAnswer.controller;


import com.server.response.MultiResponseDto;
import com.server.response.SingleResponseDto;
import com.server.stuffAnswer.dto.StuffAnswerPatchDto;
import com.server.stuffAnswer.dto.StuffAnswerPostDto;
import com.server.stuffAnswer.entity.StuffAnswer;
import com.server.stuffAnswer.mapper.StuffAnswerMapper;
import com.server.stuffAnswer.service.StuffAnswerService;
import io.swagger.annotations.Api;
import lombok.RequiredArgsConstructor;
import org.springframework.data.domain.Page;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.transaction.annotation.Transactional;
import org.springframework.validation.annotation.Validated;
import org.springframework.web.bind.annotation.*;

import javax.validation.Valid;
import javax.validation.constraints.Positive;
import java.util.List;

@RestController
@RequestMapping("/stuffAnswer")
@Validated
@RequiredArgsConstructor
@Transactional
@Api(tags ="StuffAnswer API")
public class StuffAnswerController {

    private final StuffAnswerService stuffAnswerService;

    private final StuffAnswerMapper stuffAnswerMapper;


    @PostMapping
    public ResponseEntity postStuffAnswer(@Valid @RequestBody StuffAnswerPostDto stuffAnswerPostDto){

        StuffAnswer stuffAnswer = stuffAnswerService.createStuffAnswer(stuffAnswerMapper.stuffAnswerPostDtoToStuffAnswer(stuffAnswerPostDto));

        return new ResponseEntity<>(stuffAnswerMapper.stuffAnswerToStuffAnswerResponseDto(stuffAnswer), HttpStatus.CREATED);
    }


    @PatchMapping("/{stuffAnswerId}")
    public ResponseEntity patchStuffAnswer(@PathVariable("stuffAnswerId") @Positive long stuffAnswerId,
                                           @Valid @RequestBody StuffAnswerPatchDto stuffAnswerPatchDto){

        StuffAnswer stuffAnswer = stuffAnswerMapper.stuffAnswerPatchDtoToStuffAnswer(stuffAnswerPatchDto);
        stuffAnswer.setStuffAnswerId(stuffAnswerId);

        StuffAnswer responseStuffAnswer = stuffAnswerService.updateStuffAnswer(stuffAnswer);

        return new ResponseEntity<>(stuffAnswerMapper.stuffAnswerToStuffAnswerResponseDto(responseStuffAnswer), HttpStatus.OK);

    }


    @GetMapping("/{stuffAnswerId}")
    public ResponseEntity getStuffAnswer(@PathVariable("stuffAnswerId") @Positive long Id) {

        StuffAnswer stuffAnswer = stuffAnswerService.findStuffAnswer(Id);

        return new ResponseEntity<>(

                new SingleResponseDto(stuffAnswerMapper.stuffAnswerToStuffAnswerResponseDto(stuffAnswer)),
                HttpStatus.OK);

    }


    @GetMapping("/stuffQuestion/{stuffQuestionId}")
    public ResponseEntity getStuffQuestionAnswers (@PathVariable("stuffQuestionId")
                                                   @Positive long stuffQuestionId){
        List<StuffAnswer> stuffAnswerList = stuffAnswerService.findStuffQuestionStuffAnswers(stuffQuestionId);

        return new ResponseEntity<>(stuffAnswerMapper.stuffAnswersToStuffAnswerResponseDtos(stuffAnswerList), HttpStatus.OK);
    }


    @GetMapping
    public ResponseEntity getStuffAnswers(@Positive @RequestParam int page,
                                     @Positive @RequestParam int size) {
        Page<StuffAnswer> pageStuffAnswer = stuffAnswerService.findStuffAnswers(page-1, size);
        List<StuffAnswer> stuffAnswer = pageStuffAnswer.getContent();

        return new ResponseEntity<>(
                new MultiResponseDto<>(stuffAnswerMapper.stuffAnswersToStuffAnswerResponseDtos(stuffAnswer),pageStuffAnswer),HttpStatus.OK);
    }


    @DeleteMapping("/{stuffAnswerId}")
    public ResponseEntity deleteStuffAnswer(@PathVariable("stuffAnswerId") @Positive long stuffAnswerId){

        stuffAnswerService.deleteStuffAnswer(stuffAnswerId);

        return new ResponseEntity<>(HttpStatus.NO_CONTENT);
    }
}
