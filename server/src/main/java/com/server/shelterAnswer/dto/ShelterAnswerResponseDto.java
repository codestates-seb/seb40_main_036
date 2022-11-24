package com.server.shelterAnswer.dto;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Getter;
import lombok.Setter;
import java.time.LocalDate;

@Builder
@AllArgsConstructor
@Getter
@Setter
public class ShelterAnswerResponseDto {

    private Long shelterAnswerId;

    private Long shelterQuestionId;

    private Long memberId;

    private String name;

    private String shelterAnswerContent;

    private LocalDate shelterAnswerCreated;

    private LocalDate shelterAnswerModified;
}