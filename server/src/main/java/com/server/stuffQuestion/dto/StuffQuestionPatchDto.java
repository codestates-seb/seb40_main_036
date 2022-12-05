package com.server.stuffQuestion.dto;

import lombok.Getter;

@Getter
public class StuffQuestionPatchDto {

    private Long memberId;

    private String  stuffQuestionTitle;

    private String  stuffQuestionContent;

    private String  locationTag;
}
