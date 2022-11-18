package com.server.stuffAnswer.dto;

import lombok.Getter;

@Getter
public class StuffAnswerPostDto {

    private Long stuffQuestionId;

    private Long memberId;

    private String name;

    private String stuffAnswerContent;

}
