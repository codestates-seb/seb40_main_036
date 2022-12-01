package com.server.question.mapper;

import com.server.answer.mapper.AnswerMapper;
import com.server.member.dto.MemberPostDto;
import com.server.member.repository.MemberRepository;
import com.server.question.dto.QuestionResponseDto;
import com.server.member.entity.Member;
import com.server.question.dto.QuestionPatchDto;
import com.server.question.dto.QuestionPostDto;
import com.server.question.entity.Question;
import lombok.RequiredArgsConstructor;
import org.mapstruct.Mapper;
import org.mapstruct.Mapping;
import java.util.List;
import java.util.stream.Collectors;

@Mapper(componentModel = "spring")
public interface QuestionMapper {
    Question questionPostDtoToQuestion (QuestionPostDto questionPostDto);
    Question questionPatchDtoToQuestion (QuestionPatchDto questionPatchDto);
    QuestionResponseDto questionToQuestionResponseDto (Question question);

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
                        // .questionCreated(question.getQuestionCreated())
                        .questionModified(question.getQuestionModified())
                        .countAnswer(question.getAnswers().size()) // 답변 수 세기
                        .build())
                .collect(Collectors.toList());

    }
}
