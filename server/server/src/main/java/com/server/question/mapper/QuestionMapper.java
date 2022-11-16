package com.server.question.mapper;


import com.server.question.dto.QuestionPatchDto;
import com.server.question.dto.QuestionPostDto;
import com.server.question.dto.QuestionResponseDto;
import com.server.question.entity.Question;
import org.mapstruct.Mapper;

import java.util.List;

@Mapper(componentModel = "spring")
public interface QuestionMapper {

    Question questionPostDtoToQuestion (QuestionPostDto questionPostDto);

    Question questionPatchDtoToQuestion (QuestionPatchDto questionPatchDto);

    QuestionResponseDto questionToQuestionResponseDto (Question question);

    List<QuestionResponseDto> questionsToQuestionResponseDtos (List<Question> questions);
}
