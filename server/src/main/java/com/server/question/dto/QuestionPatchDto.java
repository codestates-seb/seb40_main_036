package com.server.question.dto;

import lombok.Getter;

@Getter
public class QuestionPatchDto {

    private Long memberId;

    private String questionTitle;

    private String questionContent;

    private String questionTag;
}
