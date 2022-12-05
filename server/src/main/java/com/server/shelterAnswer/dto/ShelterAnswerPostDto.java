package com.server.shelterAnswer.dto;

import lombok.Getter;

@Getter
public class ShelterAnswerPostDto {

    private Long shelterQuestionId;

    private Long memberId;

    private String shelterAnswerContent;

}
