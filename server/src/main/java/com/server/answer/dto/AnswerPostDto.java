package com.server.answer.dto;

import lombok.Getter;

@Getter
public class AnswerPostDto {

    private Long questionId;
    private Long memberId;
    private String answerContent;
}