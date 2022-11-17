package com.server.answer.dto;

import lombok.*;
import java.time.LocalDate;

@Builder
@AllArgsConstructor
@Getter
@Setter
public class AnswerResponseDto {

    private Long answerId;

    private Long questionId;

    private Long memberId;

    private String answerContent;

    private LocalDate answerCreated;

    private LocalDate answerModified;

}