package com.server.answer.service;

import com.server.answer.entity.Answer;
import com.server.answer.repository.AnswerRepository;
import com.server.exception.BusinessLogicException;
import com.server.exception.ExceptionCode;
import com.server.member.repository.MemberRepository;
import com.server.question.repository.QuestionRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Sort;
import org.springframework.stereotype.Service;
import java.time.LocalDate;
import java.util.List;
import java.util.Optional;

@Service
@RequiredArgsConstructor
public class AnswerService {

    private final AnswerRepository answerRepository;

    private final QuestionRepository questionRepository;

    private final MemberRepository memberRepository;


    public Answer createAnswer(Answer answer) {
        if (!memberRepository.existsById(answer.getMemberId())) {
            throw new BusinessLogicException(ExceptionCode.Member_NOT_FOUND);
        }

        if (!questionRepository.existsById(answer.getQuestionId())) {
            throw new BusinessLogicException(ExceptionCode.Question_NOT_FOUND);
        }

        answer.setAnswerCreated(LocalDate.now());

        return answerRepository.save(answer);

    }


    public Answer updateAnswer(Answer answer) {
        if (!memberRepository.existsById(answer.getMemberId())) {
            throw new BusinessLogicException(ExceptionCode.Member_NOT_FOUND);
        }
        Answer findAnswer = findVerifiedAnswer(answer.getAnswerId());

        Optional.ofNullable(answer.getAnswerContent())
                .ifPresent(Content -> findAnswer.setAnswerContent(Content));

        findAnswer.setAnswerModified(LocalDate.now());

        return answerRepository.save(findAnswer);
    }


    public Answer findVerifiedAnswer(long answerId){
        Optional<Answer> optionalAnswer =
                answerRepository.findById(answerId);
        Answer findAnswer =
                optionalAnswer.orElseThrow(()->
                        new  BusinessLogicException(ExceptionCode.Answer_NOT_FOUND));
        return  findAnswer;
    }


    public Answer findAnswer(long answerId){return findVerifiedAnswer(answerId);}


    public List<Answer> findQuestionAnswers (long questionId){
        return answerRepository.findByQuestionId(questionId);
    }


    public Page<Answer> findAnswers(int page, int size){
        return answerRepository.findAll(PageRequest.of(page,size,
                Sort.by("answerId").descending()));
    }


    public void deleteAnswer(long answerId){
        Answer answer= findVerifiedAnswer(answerId);
        answerRepository.delete(answer);

    }
}