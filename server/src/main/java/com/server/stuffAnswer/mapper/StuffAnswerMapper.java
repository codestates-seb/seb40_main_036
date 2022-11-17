package com.server.stuffAnswer.mapper;

import com.server.stuffAnswer.dto.StuffAnswerPatchDto;
import com.server.stuffAnswer.dto.StuffAnswerPostDto;
import com.server.stuffAnswer.dto.StuffAnswerResponseDto;
import com.server.stuffAnswer.entity.StuffAnswer;
import org.mapstruct.Mapper;

import java.util.List;

@Mapper(componentModel = "spring")
public interface StuffAnswerMapper {

    StuffAnswer stuffAnswerPostDtoToStuffAnswer(StuffAnswerPostDto stuffAnswerPostDto);

    StuffAnswer stuffAnswerPatchDtoToStuffAnswer(StuffAnswerPatchDto stuffAnswerPatchDto);

    StuffAnswerResponseDto stuffAnswerToStuffAnswerResponseDto(StuffAnswer stuffAnswer);

    List<StuffAnswerResponseDto> stuffAnswersToStuffAnswerResponseDtos(List<StuffAnswer> answers);
}
