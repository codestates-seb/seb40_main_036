package com.server.shelterQuestion.dto;

import lombok.Getter;

@Getter
public class ShelterQuestionPostDto {

    private Long memberId;

    private String  shelterQuestionTitle;

    private String  shelterQuestionContent;

    private String  locationTag;
}