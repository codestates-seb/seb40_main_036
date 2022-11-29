package com.server.answer.mapper;

import com.server.answer.dto.AnswerResponseDto;
import com.server.answer.entity.Answer;
import com.server.member.entity.Member;
import com.server.question.entity.Question;
import javax.annotation.processing.Generated;
import org.springframework.stereotype.Component;

@Generated(
    value = "org.mapstruct.ap.MappingProcessor",
    date = "2022-11-29T11:32:06+0900",
    comments = "version: 1.5.1.Final, compiler: javac, environment: Java 17.0.5 (Amazon.com Inc.)"
)
@Component
public class AnswerMapperImpl implements AnswerMapper {

    @Override
    public AnswerResponseDto answerToAnswerResponseDto(Answer answer) {
        if ( answer == null ) {
            return null;
        }

        AnswerResponseDto.AnswerResponseDtoBuilder answerResponseDto = AnswerResponseDto.builder();

        answerResponseDto.questionId( answerQuestionQuestionId( answer ) );
        answerResponseDto.name( answerMemberName( answer ) );
        answerResponseDto.answerId( answer.getAnswerId() );
        answerResponseDto.memberId( answer.getMemberId() );
        answerResponseDto.answerContent( answer.getAnswerContent() );
        answerResponseDto.answerCreated( answer.getAnswerCreated() );
        answerResponseDto.answerModified( answer.getAnswerModified() );

        return answerResponseDto.build();
    }

    private Long answerQuestionQuestionId(Answer answer) {
        if ( answer == null ) {
            return null;
        }
        Question question = answer.getQuestion();
        if ( question == null ) {
            return null;
        }
        Long questionId = question.getQuestionId();
        if ( questionId == null ) {
            return null;
        }
        return questionId;
    }

    private String answerMemberName(Answer answer) {
        if ( answer == null ) {
            return null;
        }
        Member member = answer.getMember();
        if ( member == null ) {
            return null;
        }
        String name = member.getName();
        if ( name == null ) {
            return null;
        }
        return name;
    }
}
