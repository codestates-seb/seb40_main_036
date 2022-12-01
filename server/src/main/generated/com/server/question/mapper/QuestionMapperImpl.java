package com.server.question.mapper;

import com.server.answer.dto.AnswerResponseDto;
import com.server.answer.entity.Answer;
import com.server.question.dto.QuestionPatchDto;
import com.server.question.dto.QuestionPostDto;
import com.server.question.dto.QuestionResponseDto;
import com.server.question.entity.Question;
import java.util.ArrayList;
import java.util.List;
import javax.annotation.processing.Generated;
import org.springframework.stereotype.Component;

@Generated(
    value = "org.mapstruct.ap.MappingProcessor",
    date = "2022-12-01T10:22:38+0900",
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

        QuestionResponseDto.QuestionResponseDtoBuilder questionResponseDto = QuestionResponseDto.builder();

        questionResponseDto.questionId( question.getQuestionId() );
        questionResponseDto.memberId( question.getMemberId() );
        questionResponseDto.name( question.getName() );
        questionResponseDto.questionTitle( question.getQuestionTitle() );
        questionResponseDto.questionContent( question.getQuestionContent() );
        questionResponseDto.locationTag( question.getLocationTag() );
        questionResponseDto.views( question.getViews() );
        questionResponseDto.countAnswer( question.getCountAnswer() );
        questionResponseDto.questionCreated( question.getQuestionCreated() );
        questionResponseDto.questionModified( question.getQuestionModified() );
        questionResponseDto.answers( answerListToAnswerResponseDtoList( question.getAnswers() ) );

        return questionResponseDto.build();
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
