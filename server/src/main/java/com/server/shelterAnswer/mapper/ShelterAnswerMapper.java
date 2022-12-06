package com.server.shelterAnswer.mapper;

import com.server.shelterAnswer.dto.ShelterAnswerPatchDto;
import com.server.shelterAnswer.dto.ShelterAnswerPostDto;
import com.server.shelterAnswer.dto.ShelterAnswerResponseDto;
import com.server.shelterAnswer.entity.ShelterAnswer;
import org.mapstruct.Mapper;

import java.util.List;

@Mapper(componentModel = "spring")
public interface ShelterAnswerMapper {

    ShelterAnswer shelterAnswerPostDtoToShelterAnswer(ShelterAnswerPostDto shelterAnswerPostDto);

    ShelterAnswer shelterAnswerPatchDtoToShelterAnswer(ShelterAnswerPatchDto shelterAnswerPatchDto);

    ShelterAnswerResponseDto shelterAnswerToShelterAnswerResponseDto(ShelterAnswer shelterAnswer);

    List<ShelterAnswerResponseDto> shelterAnswersToShelterAnswerResponseDtos(List<ShelterAnswer> answers);
}
