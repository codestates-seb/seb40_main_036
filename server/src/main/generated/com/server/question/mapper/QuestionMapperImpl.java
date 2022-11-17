package com.server.question.mapper;

import com.server.answer.dto.AnswerResponseDto;
import com.server.answer.entity.Answer;
import com.server.question.dto.QuestionPatchDto;
import com.server.question.dto.QuestionPostDto;
import com.server.question.dto.QuestionResponseDto;
import com.server.question.entity.Question;
import java.time.LocalDateTime;
import java.util.ArrayList;
import java.util.List;
import javax.annotation.processing.Generated;
import org.springframework.stereotype.Component;

@Generated(
    value = "org.mapstruct.ap.MappingProcessor",
    date = "2022-11-17T15:07:31+0900",
    comments = "version: 1.5.1.Final, compiler: javac, environment: Java 17.0.5 (Amazon.com Inc.)"
)
@Component
public class QuestionMapperImpl implements QuestionMapper {

    @Override
    public Question questionPostDtoToQuestion(QuestionPostDto questionPostDto) {
        if ( questionPostDto == null ) {
            return null;
        }

        Question.QuestionBuilder question = Question.builder();

        question.memberId( questionPostDto.getMemberId() );
        question.questionTitle( questionPostDto.getQuestionTitle() );
        question.questionContent( questionPostDto.getQuestionContent() );
        question.questionTag( questionPostDto.getQuestionTag() );

        return question.build();
    }

    @Override
    public Question questionPatchDtoToQuestion(QuestionPatchDto questionPatchDto) {
        if ( questionPatchDto == null ) {
            return null;
        }

        Question.QuestionBuilder question = Question.builder();

        question.memberId( questionPatchDto.getMemberId() );

        return question.build();
    }

    @Override
    public QuestionResponseDto questionToQuestionResponseDto(Question question) {
        if ( question == null ) {
            return null;
        }

        Long questionId = null;
        Long memberId = null;
        String questionTitle = null;
        String questionContent = null;
        String questionTag = null;
        LocalDateTime questionCreated = null;
        LocalDateTime questionModified = null;

        questionId = question.getQuestionId();
        memberId = question.getMemberId();
        questionTitle = question.getQuestionTitle();
        questionContent = question.getQuestionContent();
        questionTag = question.getQuestionTag();
        questionCreated = question.getQuestionCreated();
        questionModified = question.getQuestionModified();

        List<AnswerResponseDto> answers = null;

        QuestionResponseDto questionResponseDto = new QuestionResponseDto( questionId, memberId, questionTitle, questionContent, questionTag, questionCreated, questionModified, answers );

        return questionResponseDto;
    }

    @Override
    public QuestionResponseDto AnswersToQuestionResponseDto(Question question, List<Answer> answers) {
        if ( question == null && answers == null ) {
            return null;
        }

        Long questionId = null;
        Long memberId = null;
        String questionTitle = null;
        String questionContent = null;
        String questionTag = null;
        LocalDateTime questionCreated = null;
        LocalDateTime questionModified = null;
        if ( question != null ) {
            questionId = question.getQuestionId();
            memberId = question.getMemberId();
            questionTitle = question.getQuestionTitle();
            questionContent = question.getQuestionContent();
            questionTag = question.getQuestionTag();
            questionCreated = question.getQuestionCreated();
            questionModified = question.getQuestionModified();
        }
        List<AnswerResponseDto> answers1 = null;
        answers1 = answerListToAnswerResponseDtoList( answers );

        QuestionResponseDto questionResponseDto = new QuestionResponseDto( questionId, memberId, questionTitle, questionContent, questionTag, questionCreated, questionModified, answers1 );

        return questionResponseDto;
    }

    @Override
    public List<QuestionResponseDto> questionsToQuestionResponseDtos(List<Question> questions) {
        if ( questions == null ) {
            return null;
        }

        List<QuestionResponseDto> list = new ArrayList<QuestionResponseDto>( questions.size() );
        for ( Question question : questions ) {
            list.add( questionToQuestionResponseDto( question ) );
        }

        return list;
    }

    protected AnswerResponseDto answerToAnswerResponseDto(Answer answer) {
        if ( answer == null ) {
            return null;
        }

        AnswerResponseDto.AnswerResponseDtoBuilder answerResponseDto = AnswerResponseDto.builder();

        answerResponseDto.answerId( answer.getAnswerId() );
        answerResponseDto.questionId( answer.getQuestionId() );
        answerResponseDto.memberId( answer.getMemberId() );
        answerResponseDto.answerContent( answer.getAnswerContent() );
        answerResponseDto.answerCreatedAt( answer.getAnswerCreatedAt() );
        answerResponseDto.answerModifiedAt( answer.getAnswerModifiedAt() );

        return answerResponseDto.build();
    }

    protected List<AnswerResponseDto> answerListToAnswerResponseDtoList(List<Answer> list) {
        if ( list == null ) {
            return null;
        }

        List<AnswerResponseDto> list1 = new ArrayList<AnswerResponseDto>( list.size() );
        for ( Answer answer : list ) {
            list1.add( answerToAnswerResponseDto( answer ) );
        }

        return list1;
    }
}
