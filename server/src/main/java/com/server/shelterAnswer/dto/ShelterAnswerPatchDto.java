package com.server.shelterAnswer.dto;

import lombok.Getter;

@Getter
public class ShelterAnswerPatchDto {

    private Long shelterQuestionId;

    private Long memberId;

    private String shelterAnswerContent;
}
