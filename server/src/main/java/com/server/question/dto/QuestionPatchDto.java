package com.server.question.dto;

import lombok.Getter;

@Getter
public class QuestionPatchDto {

    private Long memberId;

    private String title;

    private String content;

    private String tag;
}
