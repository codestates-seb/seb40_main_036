package com.server.shelterQuestion.dto;

import com.server.shelterAnswer.dto.ShelterAnswerResponseDto;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.Setter;
import java.time.LocalDate;
import java.util.List;

@AllArgsConstructor
@Getter
@Setter
public class ShelterQuestionResponseDto {

    private Long shelterQuestionId;

    private Long memberId;

    private String name;

    private String  shelterQuestionTitle;

    private String  shelterQuestionContent;

    private String  locationTag;

    private long views; // 조회수

    private long countAnswer;

    private LocalDate shelterQuestionCreated;

    private LocalDate shelterQuestionModified;

    private List<ShelterAnswerResponseDto> shelterAnswers;
}
