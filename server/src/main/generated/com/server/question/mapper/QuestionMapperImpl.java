package com.server.question.mapper;

import com.server.answer.mapper.AnswerMapper;
import com.server.question.dto.QuestionResponseDto;
import com.server.question.entity.Question;
import javax.annotation.processing.Generated;
import org.springframework.stereotype.Component;

@Generated(
    value = "org.mapstruct.ap.MappingProcessor",
    date = "2022-11-29T11:54:31+0900",
    comments = "version: 1.5.1.Final, compiler: javac, environment: Java 17.0.5 (Amazon.com Inc.)"
)
@Component
public class QuestionMapperImpl implements QuestionMapper {

    @Override
    public QuestionResponseDto questionToQuestionResponseDto(Question question, AnswerMapper answerMapper) {
        if ( question == null && answerMapper == null ) {
            return null;
        }

        QuestionResponseDto.QuestionResponseDtoBuilder questionResponseDto = QuestionResponseDto.builder();

        if ( question != null ) {
            questionResponseDto.questionId( question.getQuestionId() );
            questionResponseDto.memberId( question.getMemberId() );
            questionResponseDto.questionTitle( question.getQuestionTitle() );
            questionResponseDto.questionContent( question.getQuestionContent() );
            questionResponseDto.locationTag( question.getLocationTag() );
            questionResponseDto.countAnswer( question.getCountAnswer() );
            questionResponseDto.questionCreated( question.getQuestionCreated() );
            questionResponseDto.questionModified( question.getQuestionModified() );
        }
        questionResponseDto.answers( answerMapper.answersToAnswerResponseDtos(question.getAnswers()) );
        questionResponseDto.views( question.getViews() );
        questionResponseDto.name( question.getMember().getName() );

        return questionResponseDto.build();
    }
}
