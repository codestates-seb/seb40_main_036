package com.server.question.mapper;

import com.server.answer.mapper.AnswerMapper;
import com.server.question.dto.QuestionResponseDto;
import com.server.member.entity.Member;
import com.server.question.dto.QuestionPatchDto;
import com.server.question.dto.QuestionPostDto;
import com.server.question.entity.Question;
import org.mapstruct.Mapper;
import org.mapstruct.Mapping;
import java.util.List;
import java.util.stream.Collectors;

@Mapper(componentModel = "spring")
public interface QuestionMapper {
    default Question questionPostDtoToQuestion (QuestionPostDto questionPostDto){
        Question question =  new Question();
        Member member = new Member();
        // memberId
        member.setMemberId(questionPostDto.getMemberId());
        // questionTitle
        question.setQuestionTitle(questionPostDto.getQuestionTitle());
        // questionContent
        question.setQuestionContent(questionPostDto.getQuestionContent());
        // locationTag
        question.setLocationTag(questionPostDto.getLocationTag());
        return question;
    }

    default Question questionPatchDtoToQuestion (QuestionPatchDto questionPatchDto){
        Question question =  new Question();
        Member member = new Member();
        // memberId
        member.setMemberId(questionPatchDto.getMemberId());
        // questionTitle
        question.setQuestionTitle(questionPatchDto.getQuestionTitle());
        // questionContent
        question.setQuestionContent(questionPatchDto.getQuestionContent());
        // locationTag
        question.setLocationTag(questionPatchDto.getLocationTag());
        return question;
    }

    @Mapping(target = "answers", expression = "java(answerMapper.answersToAnswerResponseDtos(question.getAnswers()))")
    @Mapping(target = "views", expression = "java(question.getViews())")
    @Mapping(target = "name", expression = "java(question.getMember().getName())")
    QuestionResponseDto questionToQuestionResponseDto (Question question, AnswerMapper answerMapper);

    default List<QuestionResponseDto> questionsToQuestionResponseDtos (List<Question> questions){
        return questions.stream()
                .map(question -> QuestionResponseDto
                        .builder()
                        .questionId(question.getQuestionId())
                        .memberId(question.getMemberId())
                        .name(question.getMember().getName())
                        .questionTitle(question.getQuestionTitle())
                        .questionContent(question.getQuestionContent())
                        .locationTag(question.getLocationTag())
                        .views(question.getViews())
                        .questionCreated(question.getQuestionCreated())
                        .questionModified(question.getQuestionModified())
                        .countAnswer(question.getAnswers().size()) // 답변 수 세기
                        .build())
                .collect(Collectors.toList());

    }
}
