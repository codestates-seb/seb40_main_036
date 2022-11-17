package com.server.stuffQuestion.dto;

import lombok.Getter;

@Getter
public class StuffQuestionPostDto {

    private Long memberId;

    private String  stuffQuestionTitle;

    private String  stuffQuestionContent;

    private String  stuffQuestionTag;
}
