package com.server.stuffAnswer.dto;

import lombok.Getter;

@Getter
public class StuffAnswerPatchDto {

    private Long stuffQuestionId;

    private Long memberId;

    private String stuffAnswerContent;
}
