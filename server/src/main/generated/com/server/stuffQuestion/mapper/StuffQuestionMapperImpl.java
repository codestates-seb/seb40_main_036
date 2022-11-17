package com.server.stuffQuestion.mapper;

import com.server.stuffAnswer.dto.StuffAnswerResponseDto;
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
    date = "2022-11-17T11:09:01+0900",
    comments = "version: 1.5.1.Final, compiler: javac, environment: Java 17.0.5 (Amazon.com Inc.)"
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

        stuffQuestionId = stuffQuestion.getStuffQuestionId();
        memberId = stuffQuestion.getMemberId();
        stuffQuestionTitle = stuffQuestion.getStuffQuestionTitle();
        stuffQuestionContent = stuffQuestion.getStuffQuestionContent();
        stuffQuestionTag = stuffQuestion.getStuffQuestionTag();

        List<StuffAnswerResponseDto> stuffAnswers = null;

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
}
