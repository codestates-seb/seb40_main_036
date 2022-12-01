package com.server.question.controller;

import com.server.answer.mapper.AnswerMapper;
import com.server.question.dto.QuestionPatchDto;
import com.server.question.dto.QuestionPostDto;
import com.server.question.entity.Question;
import com.server.question.mapper.QuestionMapper;
import com.server.question.repository.QuestionRepository;
import com.server.question.service.QuestionService;
import com.server.response.MultiResponseDto;
import io.swagger.annotations.Api;
import lombok.RequiredArgsConstructor;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Sort;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.transaction.annotation.Transactional;
import org.springframework.validation.annotation.Validated;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;

import javax.validation.Valid;
import javax.validation.constraints.Positive;
import java.io.IOException;
import java.util.List;

@RestController
@RequestMapping("/question")
@Validated
@RequiredArgsConstructor
@Transactional
@Api(tags ="Question API")
public class QuestionController {

    private final QuestionService questionService;

    private final QuestionMapper questionMapper;

    private final QuestionRepository questionRepository;

    private final AnswerMapper answerMapper;

    @PostMapping
    public ResponseEntity postQuestion(@Valid
                                           @RequestPart(value="image", required = false) List<MultipartFile> images,
                                           @RequestPart(value="question") QuestionPostDto questionPostDto) throws Exception {

        Question question=questionService.createQuestion(questionMapper.questionPostDtoToQuestion(questionPostDto),images);


        return new ResponseEntity<>(questionMapper.questionToQuestionResponseDto(question), HttpStatus.CREATED);


    }

    @PatchMapping("/{questionId}")
    public ResponseEntity patchQuestion(@PathVariable("questionId") @Positive long questionId,
                                    @Valid @RequestBody QuestionPatchDto questionPatchDto){

        Question question=questionMapper.questionPatchDtoToQuestion(questionPatchDto);
        question.setQuestionId(questionId);

        Question responseQuestion=questionService.updateQuestion(question);

        return new ResponseEntity<>(questionMapper.questionToQuestionResponseDto(responseQuestion),HttpStatus.OK);

    }


    @GetMapping("/{questionId}")
    public ResponseEntity getQuestion(@PathVariable("questionId")
                                    @Positive long Id) {

        Question question = questionService.findQuestion(Id);
        question = questionService.addViews(question);

        return new ResponseEntity<>(questionMapper.questionToQuestionResponseDto(question),HttpStatus.OK);

    }


    @GetMapping("/search/title/{word}")
    public ResponseEntity searchQuestion(@PathVariable("word") String word){
        List<Question> questionList=questionService.searchTitleQuestion(word);

        return new ResponseEntity<>(questionMapper.questionsToQuestionResponseDtos(questionList),HttpStatus.OK);
    }

    @GetMapping("/search/name/{word}")
    public ResponseEntity searchNameQuestion(@PathVariable("word") String word){
        List<Question> questionList=questionService.searchNameQuestion(word);

        return new ResponseEntity<>(questionMapper.questionsToQuestionResponseDtos(questionList),HttpStatus.OK);
    }

    @GetMapping("/search/content/{word}")
    public ResponseEntity searchContentQuestion(@PathVariable("word") String word){
        List<Question> questionList=questionService.searchContentQuestion(word);

        return new ResponseEntity<>(questionMapper.questionsToQuestionResponseDtos(questionList),HttpStatus.OK);
    }

    @GetMapping("/search/tag/{word}")
    public ResponseEntity searchTagQuestion(@PathVariable("word") String word){
        List<Question> questionList=questionService.searchTagQuestion(word);

        return new ResponseEntity<>(questionMapper.questionsToQuestionResponseDtos(questionList),HttpStatus.OK);
    }
    @GetMapping("/questions")
    public ResponseEntity getAllQuestions(){
        List<Question> questionList=questionRepository.findAll(Sort.by(Sort.Direction.DESC, "questionId"));  // 바로 repository에서 데이터 가져옴

        return new ResponseEntity<>(questionMapper.questionsToQuestionResponseDtos(questionList),HttpStatus.OK);
    }



    @GetMapping
    public ResponseEntity getQuestions(@Positive @RequestParam int page,
                                     @Positive @RequestParam int size) {
        Page<Question> pageQuestion = questionService.findQuestions(page-1, size);
        List<Question> question = pageQuestion.getContent();// 내용까지도

        return new ResponseEntity<>(
                new MultiResponseDto<>(questionMapper.questionsToQuestionResponseDtos(question),pageQuestion),
                HttpStatus.OK);
    }

//    @DeleteMapping("/{questionId}")
//    public ResponseEntity deleteQuestion(@PathVariable("questionId") @Positive long questionId){
//
//        questionService.deleteQuestion(questionId);
//
//        return new ResponseEntity<>(HttpStatus.NO_CONTENT);
//    }

}
