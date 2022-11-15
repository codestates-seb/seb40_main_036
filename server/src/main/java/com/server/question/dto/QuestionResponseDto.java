package com.server.question.dto;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.Setter;

@AllArgsConstructor
@Getter
@Setter
public class QuestionResponseDto {

    private Long Id;

    private Long memberId;

    private String title;

    private String content;

    private String tag;

    private String questionCreated;

    private String questionModifed;

}
