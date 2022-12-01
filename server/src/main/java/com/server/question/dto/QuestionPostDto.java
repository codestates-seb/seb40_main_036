package com.server.question.dto;

import lombok.Getter;
import org.springframework.web.multipart.MultipartFile;

@Getter
public class QuestionPostDto {

    private Long memberId;

    private String questionTitle;

    private String questionContent;

    private String locationTag;
}

