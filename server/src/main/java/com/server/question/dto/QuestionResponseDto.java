package com.server.question.dto;

import com.server.answer.dto.AnswerResponseDto;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Getter;
import lombok.Setter;

import java.time.LocalDateTime;
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

    private String questionTag;

    private LocalDateTime questionCreated;

<<<<<<< HEAD
    private LocalDateTime questionModified;
=======
    private LocalDateTime questionModfied;
>>>>>>> a61e73b573a6096e2b21fe6944e605e55b19d79b

    private List<AnswerResponseDto> answers;

}
