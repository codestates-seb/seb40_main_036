package com.server.stuffQuestion.controller;

import com.server.answer.entity.Answer;
import com.server.response.MultiResponseDto;
import com.server.response.SingleResponseDto;
import com.server.stuffQuestion.dto.StuffQuestionPatchDto;
import com.server.stuffQuestion.dto.StuffQuestionPostDto;
import com.server.stuffQuestion.entity.StuffQuestion;
import com.server.stuffQuestion.mapper.StuffQuestionMapper;
import com.server.stuffQuestion.service.StuffQuestionService;
import lombok.RequiredArgsConstructor;
import org.springframework.data.domain.Page;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.validation.annotation.Validated;
import org.springframework.web.bind.annotation.*;

import javax.validation.Valid;
import javax.validation.constraints.Positive;
import java.util.List;

@RestController
@RequestMapping("/stuffQuestion")
@Validated
@RequiredArgsConstructor
public class StuffQuestionController {

    private final StuffQuestionService stuffQuestionService;

    private final StuffQuestionMapper stuffQuestionMapper;

    @PostMapping
    public ResponseEntity postStuffQuestion(@Valid @RequestBody StuffQuestionPostDto stuffQuestionPostDto){

        StuffQuestion stuffQuestion = stuffQuestionService.createStuffQuestion(stuffQuestionMapper.stuffQuestionPostDtoToStuffQuestion(stuffQuestionPostDto));

        return new ResponseEntity<>(stuffQuestionMapper.stuffQuestionToStuffQuestionResponseDto(stuffQuestion), HttpStatus.CREATED);

    }

    @PatchMapping("/{stuffQuestionId}")
    public ResponseEntity patchStuffQuestion(@PathVariable("stuffQuestionId") @Positive long stuffQuestionId,
                                             @Valid @RequestBody StuffQuestionPatchDto stuffQuestionPatchDto){

        StuffQuestion stuffQuestion = stuffQuestionMapper.stuffQuestionPatchDtoToStuffQuestion(stuffQuestionPatchDto);
        stuffQuestion.setStuffQuestionId(stuffQuestionId);

        StuffQuestion responseStuffQuestion = stuffQuestionService.updateStuffQuestion(stuffQuestion);

        return new  ResponseEntity<>(stuffQuestionMapper.stuffQuestionToStuffQuestionResponseDto(responseStuffQuestion), HttpStatus.OK);

    }


    @GetMapping("/{stuffQuestionId}")
    public ResponseEntity getStuffQuestion(@PathVariable("stuffQuestionId") @Positive long Id){

        StuffQuestion stuffQuestion = stuffQuestionService.findStuffQuestion(Id);



//        question = questionService.addViews(question);
//        List<Answer> answers=answerService.findQuestionAnswers(Id);
//
//        return new ResponseEntity<>(questionMapper.AnswersToQuestionResponseDto(question,answers),HttpStatus.OK);




        return new ResponseEntity<>(

                new SingleResponseDto<>(stuffQuestionMapper.stuffQuestionToStuffQuestionResponseDto(stuffQuestion)), HttpStatus.OK);

    }

    @GetMapping("/search/{word}")
    public ResponseEntity searchStuffQuestion(@PathVariable("word") String word){
        List<StuffQuestion> stuffQuestionList = stuffQuestionService.searchStuffQuestion(word);

        return new ResponseEntity<>(stuffQuestionMapper.stuffQuestionsToStuffQuestionResponseDtos(stuffQuestionList), HttpStatus.OK);
    }

    @GetMapping
    public ResponseEntity getStuffQuestions(@Positive @RequestParam int page,
                                            @Positive @RequestParam int size) {
        Page<StuffQuestion> pageStuffQuestion = stuffQuestionService.findStuffQuestions(page-1, size);
        List<StuffQuestion> stuffQuestion = pageStuffQuestion.getContent();

        return new ResponseEntity<>(
                new MultiResponseDto<>(stuffQuestionMapper.stuffQuestionsToStuffQuestionResponseDtos(stuffQuestion), pageStuffQuestion), HttpStatus.OK);
    }


    @DeleteMapping("/{stuffQuestionId}")
    public ResponseEntity deleteStuffQuestion(@PathVariable("stuffQuestionId") @Positive long stuffQuestionId){

        stuffQuestionService.deleteStuffQuestion(stuffQuestionId);

        return new ResponseEntity<>(HttpStatus.NO_CONTENT);
    }

}
