package com.server.question.dto;

//import com.server.answer.dto.AnswerResponseDto;
import com.server.answer.dto.AnswerResponseDto;
import lombok.*;

import java.time.LocalDate;
import java.util.List;

@AllArgsConstructor
@NoArgsConstructor
@Getter
@Setter
@Builder
public class QuestionResponseDto {

    private Long questionId;

    private Long memberId;

    private String name; // 작성자

    private String questionTitle;

    private String questionContent;

    private String locationTag;

    private long views; // 조회수

    private long countAnswer; // 답변 개수

    private LocalDate questionCreated;

    private LocalDate questionModified;

    private List<AnswerResponseDto> answers;

}
