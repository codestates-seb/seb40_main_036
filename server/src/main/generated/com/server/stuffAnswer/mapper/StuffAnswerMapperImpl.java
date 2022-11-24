package com.server.stuffAnswer.mapper;

import com.server.stuffAnswer.dto.StuffAnswerPatchDto;
import com.server.stuffAnswer.dto.StuffAnswerPostDto;
import com.server.stuffAnswer.dto.StuffAnswerResponseDto;
import com.server.stuffAnswer.entity.StuffAnswer;
import java.util.ArrayList;
import java.util.List;
import javax.annotation.processing.Generated;
import org.springframework.stereotype.Component;

@Generated(
    value = "org.mapstruct.ap.MappingProcessor",
    date = "2022-11-24T18:06:51+0900",
    comments = "version: 1.5.1.Final, compiler: javac, environment: Java 17.0.5 (Amazon.com Inc.)"
)
@Component
public class StuffAnswerMapperImpl implements StuffAnswerMapper {

    @Override
    public StuffAnswer stuffAnswerPostDtoToStuffAnswer(StuffAnswerPostDto stuffAnswerPostDto) {
        if ( stuffAnswerPostDto == null ) {
            return null;
        }

        StuffAnswer stuffAnswer = new StuffAnswer();

        stuffAnswer.setStuffQuestionId( stuffAnswerPostDto.getStuffQuestionId() );
        stuffAnswer.setMemberId( stuffAnswerPostDto.getMemberId() );
        stuffAnswer.setName( stuffAnswerPostDto.getName() );
        stuffAnswer.setStuffAnswerContent( stuffAnswerPostDto.getStuffAnswerContent() );

        return stuffAnswer;
    }

    @Override
    public StuffAnswer stuffAnswerPatchDtoToStuffAnswer(StuffAnswerPatchDto stuffAnswerPatchDto) {
        if ( stuffAnswerPatchDto == null ) {
            return null;
        }

        StuffAnswer stuffAnswer = new StuffAnswer();

        stuffAnswer.setStuffQuestionId( stuffAnswerPatchDto.getStuffQuestionId() );
        stuffAnswer.setMemberId( stuffAnswerPatchDto.getMemberId() );
        stuffAnswer.setStuffAnswerContent( stuffAnswerPatchDto.getStuffAnswerContent() );

        return stuffAnswer;
    }

    @Override
    public StuffAnswerResponseDto stuffAnswerToStuffAnswerResponseDto(StuffAnswer stuffAnswer) {
        if ( stuffAnswer == null ) {
            return null;
        }

        StuffAnswerResponseDto.StuffAnswerResponseDtoBuilder stuffAnswerResponseDto = StuffAnswerResponseDto.builder();

        stuffAnswerResponseDto.stuffAnswerId( stuffAnswer.getStuffAnswerId() );
        stuffAnswerResponseDto.stuffQuestionId( stuffAnswer.getStuffQuestionId() );
        stuffAnswerResponseDto.memberId( stuffAnswer.getMemberId() );
        stuffAnswerResponseDto.name( stuffAnswer.getName() );
        stuffAnswerResponseDto.stuffAnswerContent( stuffAnswer.getStuffAnswerContent() );
        stuffAnswerResponseDto.stuffAnswerCreated( stuffAnswer.getStuffAnswerCreated() );
        stuffAnswerResponseDto.stuffAnswerModified( stuffAnswer.getStuffAnswerModified() );

        return stuffAnswerResponseDto.build();
    }

    @Override
    public List<StuffAnswerResponseDto> stuffAnswersToStuffAnswerResponseDtos(List<StuffAnswer> answers) {
        if ( answers == null ) {
            return null;
        }

        List<StuffAnswerResponseDto> list = new ArrayList<StuffAnswerResponseDto>( answers.size() );
        for ( StuffAnswer stuffAnswer : answers ) {
            list.add( stuffAnswerToStuffAnswerResponseDto( stuffAnswer ) );
        }

        return list;
    }
}
