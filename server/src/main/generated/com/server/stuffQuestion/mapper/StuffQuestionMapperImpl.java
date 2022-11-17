package com.server.stuffQuestion.mapper;

import com.server.stuffAnswer.dto.StuffAnswerResponseDto;
import com.server.stuffAnswer.entity.StuffAnswer;
import com.server.stuffQuestion.dto.StuffQuestionPatchDto;
import com.server.stuffQuestion.dto.StuffQuestionPostDto;
import com.server.stuffQuestion.dto.StuffQuestionResponseDto;
import com.server.stuffQuestion.entity.StuffQuestion;
import java.util.ArrayList;
import java.util.List;
import javax.annotation.processing.Generated;
import org.springframework.stereotype.Component;

@Generated(
    value = "org.mapstruct.ap.MappingProcessor",
    date = "2022-11-17T15:25:59+0900",
    comments = "version: 1.5.1.Final, compiler: javac, environment: Java 17.0.2 (Oracle Corporation)"
)
@Component
public class StuffQuestionMapperImpl implements StuffQuestionMapper {

    @Override
    public StuffQuestion stuffQuestionPostDtoToStuffQuestion(StuffQuestionPostDto stuffQuestionPostDto) {
        if ( stuffQuestionPostDto == null ) {
            return null;
        }

        StuffQuestion.StuffQuestionBuilder stuffQuestion = StuffQuestion.builder();

        stuffQuestion.memberId( stuffQuestionPostDto.getMemberId() );
        stuffQuestion.stuffQuestionTitle( stuffQuestionPostDto.getStuffQuestionTitle() );
        stuffQuestion.stuffQuestionContent( stuffQuestionPostDto.getStuffQuestionContent() );
        stuffQuestion.stuffQuestionTag( stuffQuestionPostDto.getStuffQuestionTag() );

        return stuffQuestion.build();
    }

    @Override
    public StuffQuestion stuffQuestionPatchDtoToStuffQuestion(StuffQuestionPatchDto stuffQuestionPatchDto) {
        if ( stuffQuestionPatchDto == null ) {
            return null;
        }

        StuffQuestion.StuffQuestionBuilder stuffQuestion = StuffQuestion.builder();

        stuffQuestion.memberId( stuffQuestionPatchDto.getMemberId() );
        stuffQuestion.stuffQuestionTitle( stuffQuestionPatchDto.getStuffQuestionTitle() );
        stuffQuestion.stuffQuestionContent( stuffQuestionPatchDto.getStuffQuestionContent() );
        stuffQuestion.stuffQuestionTag( stuffQuestionPatchDto.getStuffQuestionTag() );

        return stuffQuestion.build();
    }

    @Override
    public StuffQuestionResponseDto stuffQuestionToStuffQuestionResponseDto(StuffQuestion stuffQuestion) {
        if ( stuffQuestion == null ) {
            return null;
        }

        Long stuffQuestionId = null;
        Long memberId = null;
        String stuffQuestionTitle = null;
        String stuffQuestionContent = null;
        String stuffQuestionTag = null;
        List<StuffAnswerResponseDto> stuffAnswers = null;

        stuffQuestionId = stuffQuestion.getStuffQuestionId();
        memberId = stuffQuestion.getMemberId();
        stuffQuestionTitle = stuffQuestion.getStuffQuestionTitle();
        stuffQuestionContent = stuffQuestion.getStuffQuestionContent();
        stuffQuestionTag = stuffQuestion.getStuffQuestionTag();
        stuffAnswers = stuffAnswerListToStuffAnswerResponseDtoList( stuffQuestion.getStuffAnswers() );

        StuffQuestionResponseDto stuffQuestionResponseDto = new StuffQuestionResponseDto( stuffQuestionId, memberId, stuffQuestionTitle, stuffQuestionContent, stuffQuestionTag, stuffAnswers );

        return stuffQuestionResponseDto;
    }

    @Override
    public List<StuffQuestionResponseDto> stuffQuestionsToStuffQuestionResponseDtos(List<StuffQuestion> stuffQuestions) {
        if ( stuffQuestions == null ) {
            return null;
        }

        List<StuffQuestionResponseDto> list = new ArrayList<StuffQuestionResponseDto>( stuffQuestions.size() );
        for ( StuffQuestion stuffQuestion : stuffQuestions ) {
            list.add( stuffQuestionToStuffQuestionResponseDto( stuffQuestion ) );
        }

        return list;
    }

    protected StuffAnswerResponseDto stuffAnswerToStuffAnswerResponseDto(StuffAnswer stuffAnswer) {
        if ( stuffAnswer == null ) {
            return null;
        }

        StuffAnswerResponseDto.StuffAnswerResponseDtoBuilder stuffAnswerResponseDto = StuffAnswerResponseDto.builder();

        stuffAnswerResponseDto.stuffAnswerId( stuffAnswer.getStuffAnswerId() );
        stuffAnswerResponseDto.stuffQuestionId( stuffAnswer.getStuffQuestionId() );
        stuffAnswerResponseDto.memberId( stuffAnswer.getMemberId() );
        stuffAnswerResponseDto.stuffAnswerContent( stuffAnswer.getStuffAnswerContent() );
        stuffAnswerResponseDto.stuffAnswerCreatedAt( stuffAnswer.getStuffAnswerCreatedAt() );
        stuffAnswerResponseDto.stuffAnswerModifiedAt( stuffAnswer.getStuffAnswerModifiedAt() );

        return stuffAnswerResponseDto.build();
    }

    protected List<StuffAnswerResponseDto> stuffAnswerListToStuffAnswerResponseDtoList(List<StuffAnswer> list) {
        if ( list == null ) {
            return null;
        }

        List<StuffAnswerResponseDto> list1 = new ArrayList<StuffAnswerResponseDto>( list.size() );
        for ( StuffAnswer stuffAnswer : list ) {
            list1.add( stuffAnswerToStuffAnswerResponseDto( stuffAnswer ) );
        }

        return list1;
    }
}
