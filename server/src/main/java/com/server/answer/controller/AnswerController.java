package com.server.answer.controller;

import com.server.answer.mapper.AnswerMapper;
import com.server.answer.dto.AnswerPatchDto;
import com.server.answer.dto.AnswerPostDto;
import com.server.answer.entity.Answer;

import com.server.answer.service.AnswerService;
import com.server.response.MultiResponseDto;
import com.server.response.SingleResponseDto;
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
@RequestMapping("/answer")
@Validated
@RequiredArgsConstructor
@Transactional
@Api(tags ="Answer API")
public class AnswerController {

    private final AnswerService answerService;

    private final AnswerMapper answerMapper;


    @PostMapping
    public ResponseEntity postAnswer(@Valid @RequestBody AnswerPostDto answerPostDto){

        Answer answer = answerService.createAnswer(answerMapper.answerPostDtoToAnswer(answerPostDto));

        return new ResponseEntity<>(answerMapper.answerToAnswerResponseDto(answer), HttpStatus.CREATED);
    }


    @PatchMapping("/{answerId}")
    public ResponseEntity patchAnswer(@PathVariable("answerId") @Positive long answerId,
                                      @Valid @RequestBody AnswerPatchDto answerPatchDto){

        Answer answer = answerMapper.answerPatchDtoToAnswer(answerPatchDto);
        answer.setAnswerId(answerId);

        Answer responseAnswer = answerService.updateAnswer(answer);

        return new ResponseEntity<>(answerMapper.answerToAnswerResponseDto(responseAnswer),HttpStatus.OK);
    }


    @GetMapping("/{answerId}")
    public ResponseEntity getAnswer(@PathVariable("answerId")
                                    @Positive long Id) {
        Answer answer = answerService.findAnswer(Id);

        return new ResponseEntity<>(

                new SingleResponseDto(answerMapper.answerToAnswerResponseDto(answer)),
                HttpStatus.OK);
    }


    @GetMapping("/question/{questionId}")
    public ResponseEntity getQuestionAnswers (@PathVariable("questionId")
                                              @Positive long questionID){
        List<Answer> answerList = answerService.findQuestionAnswers(questionID);

        return new ResponseEntity<>(answerMapper.answersToAnswerResponseDtos(answerList),HttpStatus.OK);
    }


    @GetMapping
    public ResponseEntity getAnswers(@Positive @RequestParam int page,
                                     @Positive @RequestParam int size) {
        Page<Answer> pageAnswer = answerService.findAnswers(page-1, size);
        List<Answer> answer = pageAnswer.getContent();

        return new ResponseEntity<>(
                new MultiResponseDto<>(answerMapper.answersToAnswerResponseDtos(answer),pageAnswer),HttpStatus.OK);
    }


    @DeleteMapping("/{answerId}")
    public ResponseEntity deleteAnswer(@PathVariable("answerId") @Positive long answerId){

        answerService.deleteAnswer(answerId);

        return new ResponseEntity<>(HttpStatus.NO_CONTENT);
    }
}