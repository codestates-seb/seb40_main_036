package com.server.shelterAnswer.mapper;

import com.server.shelterAnswer.dto.ShelterAnswerPatchDto;
import com.server.shelterAnswer.dto.ShelterAnswerPostDto;
import com.server.shelterAnswer.dto.ShelterAnswerResponseDto;
import com.server.shelterAnswer.entity.ShelterAnswer;
import java.util.ArrayList;
import java.util.List;
import javax.annotation.processing.Generated;
import org.springframework.stereotype.Component;

@Generated(
    value = "org.mapstruct.ap.MappingProcessor",
    date = "2022-12-01T10:28:45+0900",
    comments = "version: 1.5.1.Final, compiler: javac, environment: Java 17.0.2 (Oracle Corporation)"
)
@Component
public class ShelterAnswerMapperImpl implements ShelterAnswerMapper {

    @Override
    public ShelterAnswer shelterAnswerPostDtoToShelterAnswer(ShelterAnswerPostDto shelterAnswerPostDto) {
        if ( shelterAnswerPostDto == null ) {
            return null;
        }

        ShelterAnswer shelterAnswer = new ShelterAnswer();

        shelterAnswer.setShelterQuestionId( shelterAnswerPostDto.getShelterQuestionId() );
        shelterAnswer.setMemberId( shelterAnswerPostDto.getMemberId() );
        shelterAnswer.setShelterAnswerContent( shelterAnswerPostDto.getShelterAnswerContent() );

        return shelterAnswer;
    }

    @Override
    public ShelterAnswer shelterAnswerPatchDtoToShelterAnswer(ShelterAnswerPatchDto shelterAnswerPatchDto) {
        if ( shelterAnswerPatchDto == null ) {
            return null;
        }

        ShelterAnswer shelterAnswer = new ShelterAnswer();

        shelterAnswer.setShelterQuestionId( shelterAnswerPatchDto.getShelterQuestionId() );
        shelterAnswer.setMemberId( shelterAnswerPatchDto.getMemberId() );
        shelterAnswer.setShelterAnswerContent( shelterAnswerPatchDto.getShelterAnswerContent() );

        return shelterAnswer;
    }

    @Override
    public ShelterAnswerResponseDto shelterAnswerToShelterAnswerResponseDto(ShelterAnswer shelterAnswer) {
        if ( shelterAnswer == null ) {
            return null;
        }

        ShelterAnswerResponseDto.ShelterAnswerResponseDtoBuilder shelterAnswerResponseDto = ShelterAnswerResponseDto.builder();

        shelterAnswerResponseDto.shelterAnswerId( shelterAnswer.getShelterAnswerId() );
        shelterAnswerResponseDto.shelterQuestionId( shelterAnswer.getShelterQuestionId() );
        shelterAnswerResponseDto.memberId( shelterAnswer.getMemberId() );
        shelterAnswerResponseDto.name( shelterAnswer.getName() );
        shelterAnswerResponseDto.shelterAnswerContent( shelterAnswer.getShelterAnswerContent() );
        shelterAnswerResponseDto.shelterAnswerCreated( shelterAnswer.getShelterAnswerCreated() );
        shelterAnswerResponseDto.shelterAnswerModified( shelterAnswer.getShelterAnswerModified() );

        return shelterAnswerResponseDto.build();
    }

    @Override
    public List<ShelterAnswerResponseDto> shelterAnswersToShelterAnswerResponseDtos(List<ShelterAnswer> answers) {
        if ( answers == null ) {
            return null;
        }

        List<ShelterAnswerResponseDto> list = new ArrayList<ShelterAnswerResponseDto>( answers.size() );
        for ( ShelterAnswer shelterAnswer : answers ) {
            list.add( shelterAnswerToShelterAnswerResponseDto( shelterAnswer ) );
        }

        return list;
    }
}
