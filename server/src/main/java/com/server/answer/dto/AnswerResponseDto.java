package com.server.answer.dto;

import lombok.*;

import javax.persistence.Column;
import java.time.LocalDate;

@Builder
@AllArgsConstructor
@Getter
@Setter
public class AnswerResponseDto {

    private Long answerId;

    private Long questionId;

    private Long memberId;

    private String name;

    private String answerContent;

    private LocalDate answerCreated;

    private LocalDate answerModified;

}