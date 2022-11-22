package com.server.question.service;

import com.server.answer.entity.Answer;
import com.server.answer.repository.AnswerRepository;
import com.server.exception.BusinessLogicException;
import com.server.exception.ExceptionCode;
import com.server.member.repository.MemberRepository;
import com.server.question.entity.Question;
import com.server.question.repository.QuestionRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Sort;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.time.LocalDate;
import java.util.List;
import java.util.Optional;

@Service
@RequiredArgsConstructor
public class QuestionService {

    private final QuestionRepository questionRepository;

    private final MemberRepository memberRepository;

    private final AnswerRepository answerRepository;


    public Question createQuestion(Question question){

        if(!memberRepository.existsById(question.getMemberId())){
            throw new BusinessLogicException(ExceptionCode.Member_NOT_FOUND);
        }

        question.setQuestionCreated(LocalDate.now());

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
        Optional.ofNullable(question.getLocationTag())
                .ifPresent(Tag->findquestion.setLocationTag(Tag));

        findquestion.setQuestionModified(LocalDate.now());

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
        return questionRepository.findByQuestionTitleContainingOrderByQuestionIdDesc(word);
    }

    public List<Question> searchNameQuestion(String word){
        return questionRepository.findByNameContainingOrderByQuestionIdDesc(word);
    }

    public Page<Question> findQuestions(int page, int size){
        return questionRepository.findAll(PageRequest.of(page,size,
                Sort.by("questionId").descending()));
    }

    @Transactional
    public void deleteQuestion(long questionId){

        if(!questionRepository.existsById(questionId)){
            throw new BusinessLogicException(ExceptionCode.Question_NOT_FOUND);
        }

        List<Answer> answers=answerRepository.findByQuestionId(questionId);

        answerRepository.deleteAll(answers);

        questionRepository.deleteById(questionId);
    }

    public Question addViews(Question question){
        long views = question.getViews();
        views++;
        question.setViews(views);

        return questionRepository.save(question);
    }

}
