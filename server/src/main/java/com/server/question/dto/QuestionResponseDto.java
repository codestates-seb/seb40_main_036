package com.server.question.dto;

import com.server.answer.dto.AnswerResponseDto;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.Setter;
import java.time.LocalDate;
import java.util.List;

@AllArgsConstructor
@Getter
@Setter
public class QuestionResponseDto {

    private Long questionId;

    private Long memberId;

    private String name;

    private String questionTitle;

    private String questionContent;

    private String locationTag;

    private String views; // 조회수

    private LocalDate questionCreated;

    private LocalDate questionModified;

    private List<AnswerResponseDto> answers;

}
