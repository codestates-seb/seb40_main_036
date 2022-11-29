package com.server.question.mapper;

import com.server.answer.dto.AnswerResponseDto;
import com.server.answer.entity.Answer;
import com.server.question.dto.QuestionPatchDto;
import com.server.question.dto.QuestionPostDto;
import com.server.question.dto.QuestionResponseDto;
import com.server.question.entity.Question;
import java.time.LocalDate;
import java.util.ArrayList;
import java.util.List;
import javax.annotation.processing.Generated;
import org.springframework.stereotype.Component;

@Generated(
    value = "org.mapstruct.ap.MappingProcessor",
    date = "2022-11-29T13:33:23+0900",
    comments = "version: 1.5.1.Final, compiler: javac, environment: Java 17.0.5 (Amazon.com Inc.)"
)
@Component
public class QuestionMapperImpl implements QuestionMapper {

    @Override
    public Question questionPostDtoToQuestion(QuestionPostDto questionPostDto) {
        if ( questionPostDto == null ) {
            return null;
        }

        Question question = new Question();

        question.setMemberId( questionPostDto.getMemberId() );
        question.setName( questionPostDto.getName() );
        question.setQuestionTitle( questionPostDto.getQuestionTitle() );
        question.setQuestionContent( questionPostDto.getQuestionContent() );
        question.setLocationTag( questionPostDto.getLocationTag() );

        return question;
    }

    @Override
    public Question questionPatchDtoToQuestion(QuestionPatchDto questionPatchDto) {
        if ( questionPatchDto == null ) {
            return null;
        }

        Question question = new Question();

        question.setMemberId( questionPatchDto.getMemberId() );
        question.setQuestionTitle( questionPatchDto.getQuestionTitle() );
        question.setQuestionContent( questionPatchDto.getQuestionContent() );
        question.setLocationTag( questionPatchDto.getLocationTag() );

        return question;
    }

    @Override
    public QuestionResponseDto questionToQuestionResponseDto(Question question) {
        if ( question == null ) {
            return null;
        }

        Long questionId = null;
        Long memberId = null;
        String name = null;
        String questionTitle = null;
        String questionContent = null;
        String locationTag = null;
        long views = 0L;
        long countAnswer = 0L;
        LocalDate questionCreated = null;
        LocalDate questionModified = null;
        List<AnswerResponseDto> answers = null;

        questionId = question.getQuestionId();
        memberId = question.getMemberId();
        name = question.getName();
        questionTitle = question.getQuestionTitle();
        questionContent = question.getQuestionContent();
        locationTag = question.getLocationTag();
        views = question.getViews();
        countAnswer = question.getCountAnswer();
        questionCreated = question.getQuestionCreated();
        questionModified = question.getQuestionModified();
        answers = answerListToAnswerResponseDtoList( question.getAnswers() );

        QuestionResponseDto questionResponseDto = new QuestionResponseDto( questionId, memberId, name, questionTitle, questionContent, locationTag, views, countAnswer, questionCreated, questionModified, answers );

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
        answerResponseDto.name( answer.getName() );
        answerResponseDto.answerContent( answer.getAnswerContent() );
        answerResponseDto.answerCreated( answer.getAnswerCreated() );
        answerResponseDto.answerModified( answer.getAnswerModified() );

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
