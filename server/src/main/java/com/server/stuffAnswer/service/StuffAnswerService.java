package com.server.stuffAnswer.service;

import com.server.exception.BusinessLogicException;
import com.server.exception.ExceptionCode;
import com.server.member.repository.MemberRepository;
import com.server.question.entity.Question;
import com.server.stuffAnswer.entity.StuffAnswer;
import com.server.stuffAnswer.repository.StuffAnswerRepository;
import com.server.stuffQuestion.entity.StuffQuestion;
import com.server.stuffQuestion.repository.StuffQuestionRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Sort;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.time.LocalDate;
import java.time.LocalDateTime;
import java.util.List;
import java.util.Optional;

@Service
@RequiredArgsConstructor
public class StuffAnswerService {

    private final StuffAnswerRepository stuffAnswerRepository;

    private final StuffQuestionRepository stuffQuestionRepository;

    private final MemberRepository memberRepository;


    public StuffAnswer createStuffAnswer(StuffAnswer stuffAnswer) {
        if (!memberRepository.existsById(stuffAnswer.getMemberId())) {
            throw new BusinessLogicException(ExceptionCode.Member_NOT_FOUND);
        }
        if (!stuffQuestionRepository.existsById(stuffAnswer.getStuffQuestionId())) {
            throw new BusinessLogicException(ExceptionCode.StuffQuestion_NOT_FOUND);
        }

        stuffAnswer.setStuffAnswerCreated(LocalDate.now());

        /////////////////////////////////////////////////////////////
        // 답변 개수 갱신

        StuffQuestion stuffQuestion=stuffQuestionRepository.findByStuffQuestionId(stuffAnswer.getStuffQuestionId());

        Long count=stuffQuestion.getCountAnswer();
        count++;
        stuffQuestion.setCountAnswer(count);

        stuffQuestionRepository.save(stuffQuestion);

        /////////////////////////////////////////////////////////////

        return stuffAnswerRepository.save(stuffAnswer);
    }


    public StuffAnswer updateStuffAnswer(StuffAnswer stuffAnswer) {
        if (!memberRepository.existsById(stuffAnswer.getMemberId())) {
            throw new BusinessLogicException(ExceptionCode.Member_NOT_FOUND);
        }
        StuffAnswer findStuffAnswer = findVerifiedStuffAnswer(stuffAnswer.getStuffAnswerId());

        Optional.ofNullable(stuffAnswer.getStuffAnswerContent())
                .ifPresent(Content -> findStuffAnswer.setStuffAnswerContent(Content));

        findStuffAnswer.setStuffAnswerModified(LocalDate.now());

        return stuffAnswerRepository.save(findStuffAnswer);
    }


    public StuffAnswer findVerifiedStuffAnswer(long stuffAnswerId) {
        Optional<StuffAnswer> optionalStuffAnswer =
                stuffAnswerRepository.findById(stuffAnswerId);
        StuffAnswer findStuffAnswer =
                optionalStuffAnswer.orElseThrow(() ->
                        new BusinessLogicException(ExceptionCode.Answer_NOT_FOUND));
        return findStuffAnswer;

    }


    public StuffAnswer findStuffAnswer(long stuffAnswerId) {
        return findVerifiedStuffAnswer(stuffAnswerId);
    }


    public List<StuffAnswer> findStuffQuestionStuffAnswers(long stuffQuestionId) {
        return stuffAnswerRepository.findByStuffQuestionId(stuffQuestionId);
    }


    public Page<StuffAnswer> findStuffAnswers(int page, int size) {
        return stuffAnswerRepository.findAll(PageRequest.of(page, size,
                Sort.by("stuffAnswerId").descending()));
    }


    @Transactional
    public void deleteStuffAnswer(long stuffAnswerId) {
        StuffAnswer stuffAnswer = findVerifiedStuffAnswer(stuffAnswerId);

        /////////////////////////////////////////////////////////////
        // 답변 개수 갱신

        StuffQuestion stuffQuestion=stuffQuestionRepository.findByStuffQuestionId(stuffAnswer.getStuffQuestionId());

        Long count=stuffQuestion.getCountAnswer();
        count--;
        stuffQuestion.setCountAnswer(count);

        stuffQuestionRepository.save(stuffQuestion);

        /////////////////////////////////////////////////////////////

        stuffAnswerRepository.delete(stuffAnswer);

    }
}
