package com.server.stuffAnswer.dto;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Getter;
import lombok.Setter;
import java.time.LocalDate;

@Builder
@AllArgsConstructor
@Getter
@Setter
public class StuffAnswerResponseDto {

    private Long stuffAnswerId;

    private Long stuffQuestionId;

    private Long memberId;

    private String name;

    private String stuffAnswerContent;

    private LocalDate stuffAnswerCreated;

    private LocalDate stuffAnswerModified;
}
