package com.server.question.mapper;

import com.server.question.dto.QuestionPatchDto;
import com.server.question.dto.QuestionPostDto;
import com.server.question.dto.QuestionResponseDto;
import com.server.question.entity.Question;
import java.time.format.DateTimeFormatter;
import java.util.ArrayList;
import java.util.List;
import javax.annotation.processing.Generated;
import org.springframework.stereotype.Component;

@Generated(
    value = "org.mapstruct.ap.MappingProcessor",
    date = "2022-11-15T14:40:55+0900",
    comments = "version: 1.4.2.Final, compiler: javac, environment: Java 17.0.2 (Oracle Corporation)"
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
        question.setQuestionTag( questionPostDto.getQuestionTag() );

        return question;
    }

    @Override
    public Question questionPatchDtoToQuestion(QuestionPatchDto questionPatchDto) {
        if ( questionPatchDto == null ) {
            return null;
        }

        Question question = new Question();

        question.setMemberId( questionPatchDto.getMemberId() );

        return question;
    }

    @Override
    public QuestionResponseDto questionToQuestionResponseDto(Question question) {
        if ( question == null ) {
            return null;
        }

        Long memberId = null;
        String questionCreated = null;
        String questionModifed = null;

        memberId = question.getMemberId();
        if ( question.getQuestionCreated() != null ) {
            questionCreated = DateTimeFormatter.ISO_LOCAL_DATE_TIME.format( question.getQuestionCreated() );
        }
        if ( question.getQuestionModifed() != null ) {
            questionModifed = DateTimeFormatter.ISO_LOCAL_DATE_TIME.format( question.getQuestionModifed() );
        }

        Long id = null;
        String title = null;
        String content = null;
        String tag = null;

        QuestionResponseDto questionResponseDto = new QuestionResponseDto( id, memberId, title, content, tag, questionCreated, questionModifed );

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
}
