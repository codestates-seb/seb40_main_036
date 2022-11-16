package com.server.question.mapper;

import com.server.question.dto.QuestionPatchDto;
import com.server.question.dto.QuestionPostDto;
import com.server.question.dto.QuestionResponseDto;
import com.server.question.dto.QuestionResponseDto.QuestionResponseDtoBuilder;
import com.server.question.entity.Question;
import com.server.question.entity.Question.QuestionBuilder;
import java.util.ArrayList;
import java.util.List;
import javax.annotation.processing.Generated;
import org.springframework.stereotype.Component;

@Generated(
    value = "org.mapstruct.ap.MappingProcessor",
    date = "2022-11-16T14:53:20+0900",
    comments = "version: 1.4.2.Final, compiler: javac, environment: Java 17.0.5 (Amazon.com Inc.)"
)
@Component
public class QuestionMapperImpl implements QuestionMapper {

    @Override
    public Question questionPostDtoToQuestion(QuestionPostDto questionPostDto) {
        if ( questionPostDto == null ) {
            return null;
        }

        QuestionBuilder question = Question.builder();

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

        QuestionBuilder question = Question.builder();

        question.memberId( questionPatchDto.getMemberId() );

        return question.build();
    }

    @Override
    public QuestionResponseDto questionToQuestionResponseDto(Question question) {
        if ( question == null ) {
            return null;
        }

        QuestionResponseDtoBuilder questionResponseDto = QuestionResponseDto.builder();

        questionResponseDto.questionId( question.getQuestionId() );
        questionResponseDto.memberId( question.getMemberId() );
        questionResponseDto.questionTitle( question.getQuestionTitle() );
        questionResponseDto.questionContent( question.getQuestionContent() );
        questionResponseDto.questionTag( question.getQuestionTag() );

        return questionResponseDto.build();
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
}
