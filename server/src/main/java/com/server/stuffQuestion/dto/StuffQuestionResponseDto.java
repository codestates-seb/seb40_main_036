package com.server.stuffQuestion.dto;

import com.server.answer.dto.AnswerResponseDto;
import com.server.stuffAnswer.dto.StuffAnswerResponseDto;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.Setter;

import java.util.List;

@AllArgsConstructor
@Getter
@Setter
public class StuffQuestionResponseDto {

    private Long stuffQuestionId;

    private Long memberId;

    private String  stuffQuestionTitle;

    private String  stuffQuestionContent;

    private String  stuffQuestionTag;

    private List<StuffAnswerResponseDto> stuffAnswers;
}
