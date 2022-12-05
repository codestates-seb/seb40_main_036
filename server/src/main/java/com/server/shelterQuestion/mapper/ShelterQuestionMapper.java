package com.server.shelterQuestion.mapper;


import com.server.shelterQuestion.dto.ShelterQuestionPatchDto;
import com.server.shelterQuestion.dto.ShelterQuestionPostDto;
import com.server.shelterQuestion.dto.ShelterQuestionResponseDto;
import com.server.shelterQuestion.entity.ShelterQuestion;
import org.mapstruct.Mapper;

import java.util.List;

@Mapper(componentModel = "spring")
public interface ShelterQuestionMapper {

    ShelterQuestion shelterQuestionPostDtoToShelterQuestion(ShelterQuestionPostDto shelterQuestionPostDto);

    ShelterQuestion shelterQuestionPatchDtoToShelterQuestion(ShelterQuestionPatchDto shelterQuestionPatchDto);

    ShelterQuestionResponseDto shelterQuestionToShelterQuestionResponseDto(ShelterQuestion shelterQuestion);

    List<ShelterQuestionResponseDto> shelterQuestionsToShelterQuestionResponseDtos (List<ShelterQuestion> shelterQuestions);
}