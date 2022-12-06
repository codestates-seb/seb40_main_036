package com.server.stuffQuestion.mapper;


import com.server.stuffQuestion.dto.StuffQuestionPatchDto;
import com.server.stuffQuestion.dto.StuffQuestionPostDto;
import com.server.stuffQuestion.dto.StuffQuestionResponseDto;
import com.server.stuffQuestion.entity.StuffQuestion;
import org.mapstruct.Mapper;

import java.util.List;

@Mapper(componentModel = "spring")
public interface StuffQuestionMapper {

    StuffQuestion stuffQuestionPostDtoToStuffQuestion(StuffQuestionPostDto stuffQuestionPostDto);

    StuffQuestion stuffQuestionPatchDtoToStuffQuestion(StuffQuestionPatchDto stuffQuestionPatchDto);

    StuffQuestionResponseDto stuffQuestionToStuffQuestionResponseDto(StuffQuestion stuffQuestion);

    List<StuffQuestionResponseDto> stuffQuestionsToStuffQuestionResponseDtos (List<StuffQuestion> stuffQuestions);
}
