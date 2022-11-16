package com.server.question.dto;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Getter;
import lombok.Setter;

import java.time.LocalDateTime;

@Builder
@AllArgsConstructor
@Getter
@Setter
public class QuestionResponseDto {

    private Long questionId;

    private Long memberId;

    private String questionTitle;

    private String questionContent;

    private String questionTag;

    private LocalDateTime questionCreated;

    private LocalDateTime questionModifed;

}
