package com.server.shelterAnswer.service;

import com.server.exception.BusinessLogicException;
import com.server.exception.ExceptionCode;
import com.server.member.repository.MemberRepository;
import com.server.shelterAnswer.entity.ShelterAnswer;
import com.server.shelterAnswer.repository.ShelterAnswerRepository;
import com.server.shelterQuestion.entity.ShelterQuestion;
import com.server.shelterQuestion.repository.ShelterQuestionRepository;
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
public class ShelterAnswerService {

    private final ShelterAnswerRepository shelterAnswerRepository;

    private final ShelterQuestionRepository shelterQuestionRepository;

    private final MemberRepository memberRepository;


    public ShelterAnswer createShelterAnswer(ShelterAnswer shelterAnswer) {
        if (!memberRepository.existsById(shelterAnswer.getMemberId())) {
            throw new BusinessLogicException(ExceptionCode.Member_NOT_FOUND);
        }
        if (!shelterQuestionRepository.existsById(shelterAnswer.getShelterQuestionId())) {
            throw new BusinessLogicException(ExceptionCode.StuffQuestion_NOT_FOUND);
        }

        shelterAnswer.setShelterAnswerCreated(LocalDate.now());

        /////////////////////////////////////////////////////////////
        // 답변 개수 갱신

        ShelterQuestion shelterQuestion=shelterQuestionRepository.findByShelterQuestionId(shelterAnswer.getShelterQuestionId());

        Long count=shelterQuestion.getCountAnswer();
        count++;
        shelterQuestion.setCountAnswer(count);

        shelterQuestionRepository.save(shelterQuestion);

        /////////////////////////////////////////////////////////////

        return shelterAnswerRepository.save(shelterAnswer);
    }


    public ShelterAnswer updateShelterAnswer(ShelterAnswer shelterAnswer) {
        if (!memberRepository.existsById(shelterAnswer.getMemberId())) {
            throw new BusinessLogicException(ExceptionCode.Member_NOT_FOUND);
        }
        ShelterAnswer findShelterAnswer = findVerifiedShelterAnswer(shelterAnswer.getShelterAnswerId());

        Optional.ofNullable(shelterAnswer.getShelterAnswerContent())
                .ifPresent(Content -> findShelterAnswer.setShelterAnswerContent(Content));

        findShelterAnswer.setShelterAnswerModified(LocalDate.now());

        return shelterAnswerRepository.save(findShelterAnswer);
    }


    public ShelterAnswer findVerifiedShelterAnswer(long shelterAnswerId) {
        Optional<ShelterAnswer> optionalShelterAnswer =
                shelterAnswerRepository.findById(shelterAnswerId);
        ShelterAnswer findShelterAnswer =
                optionalShelterAnswer.orElseThrow(() ->
                        new BusinessLogicException(ExceptionCode.Answer_NOT_FOUND));
        return findShelterAnswer;

    }


    public ShelterAnswer findShelterAnswer(long shelterAnswerId) {
        return findVerifiedShelterAnswer(shelterAnswerId);
    }


    public List<ShelterAnswer> findShelterQuestionShelterAnswers(long shelterQuestionId) {
        return shelterAnswerRepository.findByShelterQuestionId(shelterQuestionId);
    }


    public Page<ShelterAnswer> findShelterAnswers(int page, int size) {
        return shelterAnswerRepository.findAll(PageRequest.of(page, size,
                Sort.by("shelterAnswerId").descending()));
    }


    @Transactional
    public void deleteShelterAnswer(long shelterAnswerId) {
        ShelterAnswer shelterAnswer = findVerifiedShelterAnswer(shelterAnswerId);
        shelterAnswerRepository.delete(shelterAnswer);

    }
}