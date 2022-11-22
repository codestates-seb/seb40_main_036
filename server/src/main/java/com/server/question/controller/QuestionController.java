package com.server.question.controller;

import com.server.answer.entity.Answer;
import com.server.answer.repository.AnswerRepository;
import com.server.answer.service.AnswerService;
import com.server.member.entity.Member;
import com.server.question.dto.QuestionPatchDto;
import com.server.question.dto.QuestionPostDto;
import com.server.question.entity.Question;
import com.server.question.mapper.QuestionMapper;
import com.server.question.repository.QuestionRepository;
import com.server.question.service.QuestionService;
import com.server.response.MultiResponseDto;
import com.server.response.SingleResponseDto;
import lombok.RequiredArgsConstructor;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Sort;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.validation.annotation.Validated;
import org.springframework.web.bind.annotation.*;

import javax.validation.Valid;
import javax.validation.constraints.Positive;
import java.util.List;

@RestController
@RequestMapping("/question")
@Validated
@RequiredArgsConstructor
public class QuestionController {

    private final QuestionService questionService;

    private final QuestionMapper questionMapper;

    private final QuestionRepository questionRepository;


    @PostMapping
    public ResponseEntity postQuestion(@Valid @RequestBody QuestionPostDto questionPostDto){

        Question question=questionService.createQuestion(questionMapper.questionPostDtoToQuestion(questionPostDto));


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


    @GetMapping("/search/{word}")
    public ResponseEntity searchQuestion(@PathVariable("word") String word){
        List<Question> questionList=questionService.searchQuestion(word);

        return new ResponseEntity<>(questionMapper.questionsToQuestionResponseDtos(questionList),HttpStatus.OK);
    }

    @GetMapping("/search/name/{word}")
    public ResponseEntity searchNameQuestion(@PathVariable("word") String word){
        List<Question> questionList=questionService.searchNameQuestion(word);

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

    @DeleteMapping("/{questionId}")
    public ResponseEntity deleteQuestion(@PathVariable("questionId") @Positive long questionId){

        questionService.deleteQuestion(questionId);

        return new ResponseEntity<>(HttpStatus.NO_CONTENT);
    }

}
