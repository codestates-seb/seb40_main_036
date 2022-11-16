package com.server.answer.dto;

import lombok.*;

import java.time.LocalDateTime;

@Builder
@AllArgsConstructor
@Getter
@Setter
public class AnswerResponseDto {

    private Long answerId;

    private Long questionId;

    private Long memberId;

    private String answerContent;

    private LocalDateTime answerCreatedAt;

    private LocalDateTime answerModifiedAt;

}