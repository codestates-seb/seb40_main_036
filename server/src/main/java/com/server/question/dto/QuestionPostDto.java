package com.server.question.dto;

import lombok.Getter;

@Getter
public class QuestionPostDto {

    private Long memberId;

    private String questionTitle;

    private String questionContent;

    private String locationTag;
}

