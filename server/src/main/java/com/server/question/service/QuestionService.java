package com.server.question.service;

import com.server.exception.BusinessLogicException;
import com.server.exception.ExceptionCode;
import com.server.member.entity.Member;
import com.server.member.repository.MemberRepository;
import com.server.member.service.MemberService;
import com.server.question.entity.Question;
import com.server.question.repository.QuestionRepository;

import lombok.RequiredArgsConstructor;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Sort;
import org.springframework.stereotype.Service;

import java.time.LocalDateTime;
import java.util.List;
import java.util.Optional;


@Service
@RequiredArgsConstructor
public class QuestionService {

    private final QuestionRepository questionRepository;

    private final MemberRepository memberRepository;


    public Question createQuestion(Question question){

        if(!memberRepository.existsById(question.getMemberId())){
            throw new BusinessLogicException(ExceptionCode.Member_NOT_FOUND);
        }

        question.setQuestionCreated(LocalDateTime.now());

        return questionRepository.save(question);
    }

    public Question updateQuestion(Question question){

        if(!memberRepository.existsById(question.getMemberId())){
            throw new BusinessLogicException(ExceptionCode.Member_NOT_FOUND);
        }

        Question findquestion = findVerifiedQuestion(question.getQuestionId());

        // address 수정
        Optional.ofNullable(question.getQuestionTitle())
                .ifPresent(Title->findquestion.setQuestionTitle(Title));
        // name 수정
        Optional.ofNullable(question.getQuestionContent())
                .ifPresent(Content ->findquestion.setQuestionContent(Content));
        // 수용 가능 인원 수정
        Optional.ofNullable(question.getQuestionTag())
                .ifPresent(Tag->findquestion.setQuestionTag(Tag));

        findquestion.setQuestionModified(LocalDateTime.now());

        return questionRepository.save(findquestion);

    }
    public Question findVerifiedQuestion(long questionId){
        Optional<Question> optionalquestion=
                questionRepository.findById(questionId);
        Question findquestion =
                optionalquestion.orElseThrow(()->
                        new BusinessLogicException(ExceptionCode.Question_NOT_FOUND));
        return findquestion;
    }

    public Question findQuestion(long questionId){
        return findVerifiedQuestion(questionId);
    }

    public List<Question> searchQuestion(String word){
        return questionRepository.findByQuestionContentContaining(word);
    }

    public Page<Question> findQuestions(int page, int size){
        return questionRepository.findAll(PageRequest.of(page,size,
                Sort.by("memberId").descending()));
    }

    public void deleteQuestion(long questionId){
        Question question=findVerifiedQuestion(questionId);
        questionRepository.delete(question);
    }

}
