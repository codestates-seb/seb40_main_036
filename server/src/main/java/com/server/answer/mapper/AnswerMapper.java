package com.server.answer.mapper;

import com.server.answer.dto.AnswerPatchDto;
import com.server.answer.dto.AnswerPostDto;
import com.server.answer.dto.AnswerResponseDto;
import com.server.answer.entity.Answer;
import com.server.member.entity.Member;
import org.mapstruct.Mapper;
import org.mapstruct.Mapping;

import java.util.List;
import java.util.stream.Collectors;

@Mapper(componentModel = "spring")
public interface AnswerMapper {
    default Answer answerPostDtoToAnswer(AnswerPostDto answerPostDto){
        Answer answer = new Answer();
        Member member = new Member();
        // memberId
        member.setMemberId(answerPostDto.getMemberId());
        // answerContent
        answer.setAnswerContent(answerPostDto.getAnswerContent());
        return answer;
    }

    default Answer answerPatchDtoToAnswer(AnswerPatchDto answerPatchDto){
        Answer answer = new Answer();
        Member member = new Member();
        // memberId
        member.setMemberId(answerPatchDto.getMemberId());
        // answerContent
        answer.setAnswerContent(answerPatchDto.getAnswerContent());
        return answer;
    }

    @Mapping(source = "answer.question.questionId", target = "questionId")
    @Mapping(source = "answer.member.name", target = "name")
    AnswerResponseDto answerToAnswerResponseDto(Answer answer);

    default List<AnswerResponseDto> answersToAnswerResponseDtos(List<Answer> answers){
        return answers.stream()
                .map(answer -> AnswerResponseDto
                        .builder()
                        .questionId(answer.getQuestion().getQuestionId())
                        .name(answer.getMember().getName())
                        .answerContent(answer.getAnswerContent())
                        .answerCreated(answer.getAnswerCreated())
                        .answerModified(answer.getAnswerModified())
                        .build())
                .collect(Collectors.toList());
    }
}