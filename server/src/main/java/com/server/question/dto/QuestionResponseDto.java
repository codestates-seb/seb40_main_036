package com.server.question.dto;

import com.server.answer.dto.AnswerResponseDto;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Getter;
import lombok.Setter;

import java.util.List;

@AllArgsConstructor
@Getter
@Setter
public class QuestionResponseDto {

    private Long questionId;

    private Long memberId;

    private String questionTitle;

    private String questionContent;

    private String questionTag;

    private List<AnswerResponseDto> answers;

}
