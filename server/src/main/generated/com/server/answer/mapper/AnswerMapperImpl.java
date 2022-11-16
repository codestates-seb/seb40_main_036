package com.server.answer.mapper;

import com.server.answer.dto.AnswerPatchDto;
import com.server.answer.dto.AnswerPostDto;
import com.server.answer.dto.AnswerResponseDto;
import com.server.answer.dto.AnswerResponseDto.AnswerResponseDtoBuilder;
import com.server.answer.entity.Answer;
import java.util.ArrayList;
import java.util.List;
import javax.annotation.processing.Generated;
import org.springframework.stereotype.Component;

@Generated(
    value = "org.mapstruct.ap.MappingProcessor",
    date = "2022-11-17T01:09:34+0900",
    comments = "version: 1.4.2.Final, compiler: javac, environment: Java 17.0.5 (Amazon.com Inc.)"
)
@Component
public class AnswerMapperImpl implements AnswerMapper {

    @Override
    public Answer answerPostDtoToAnswer(AnswerPostDto answerPostDto) {
        if ( answerPostDto == null ) {
            return null;
        }

        Answer answer = new Answer();

        answer.setQuestionId( answerPostDto.getQuestionId() );
        answer.setMemberId( answerPostDto.getMemberId() );
        answer.setAnswerContent( answerPostDto.getAnswerContent() );

        return answer;
    }

    @Override
    public Answer answerPatchDtoToAnswer(AnswerPatchDto answerPatchDto) {
        if ( answerPatchDto == null ) {
            return null;
        }

        Answer answer = new Answer();

        answer.setQuestionId( answerPatchDto.getQuestionId() );
        answer.setMemberId( answerPatchDto.getMemberId() );
        answer.setAnswerContent( answerPatchDto.getAnswerContent() );

        return answer;
    }

    @Override
    public AnswerResponseDto answerToAnswerResponseDto(Answer answer) {
        if ( answer == null ) {
            return null;
        }

        AnswerResponseDtoBuilder answerResponseDto = AnswerResponseDto.builder();

        answerResponseDto.answerId( answer.getAnswerId() );
        answerResponseDto.questionId( answer.getQuestionId() );
        answerResponseDto.memberId( answer.getMemberId() );
        answerResponseDto.answerContent( answer.getAnswerContent() );
        answerResponseDto.answerCreatedAt( answer.getAnswerCreatedAt() );
        answerResponseDto.answerModifiedAt( answer.getAnswerModifiedAt() );

        return answerResponseDto.build();
    }

    @Override
    public List<AnswerResponseDto> answersToAnswersResponseDtos(List<Answer> answers) {
        if ( answers == null ) {
            return null;
        }

        List<AnswerResponseDto> list = new ArrayList<AnswerResponseDto>( answers.size() );
        for ( Answer answer : answers ) {
            list.add( answerToAnswerResponseDto( answer ) );
        }

        return list;
    }
}
