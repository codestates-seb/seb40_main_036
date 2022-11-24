package com.server.shelterQuestion.service;

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
public class ShelterQuestionService {

    private final ShelterQuestionRepository shelterQuestionRepository;

    private final MemberRepository memberRepository;

    private final ShelterAnswerRepository shelterAnswerRepository;


    public ShelterQuestion createShelterQuestion(ShelterQuestion shelterQuestion){

        if(!memberRepository.existsById(shelterQuestion.getMemberId())){
            throw new BusinessLogicException(ExceptionCode.Member_NOT_FOUND);
        }

        shelterQuestion.setShelterQuestionCreated(LocalDate.now());

        shelterQuestion.setCountAnswer(0);

        return shelterQuestionRepository.save(shelterQuestion);
    }


    public ShelterQuestion updateShelterQuestion(ShelterQuestion shelterQuestion){

        if(!memberRepository.existsById(shelterQuestion.getMemberId())){
            throw new BusinessLogicException(ExceptionCode.Member_NOT_FOUND);
        }

        ShelterQuestion findShelterQuestion = findVerifiedShelterQuestion(shelterQuestion.getShelterQuestionId());

        Optional.ofNullable(shelterQuestion.getShelterQuestionTitle())
                .ifPresent(Title -> findShelterQuestion.setShelterQuestionTitle(Title));

        Optional.ofNullable(shelterQuestion.getShelterQuestionContent())
                .ifPresent(Content -> findShelterQuestion.setShelterQuestionContent(Content));

        Optional.ofNullable(shelterQuestion.getLocationTag())
                .ifPresent(Tag -> findShelterQuestion.setLocationTag(Tag));

        findShelterQuestion.setShelterQuestionModified(LocalDate.now());

        return shelterQuestionRepository.save(findShelterQuestion);

    }

    public ShelterQuestion findVerifiedShelterQuestion(long shelterQuestionId){
        Optional<ShelterQuestion> optionalShelterQuestion =
                shelterQuestionRepository.findById(shelterQuestionId);
        ShelterQuestion findShelterQuestion =
                optionalShelterQuestion.orElseThrow(()->
                        new BusinessLogicException(ExceptionCode.ShelterQuestion_NOT_FOUND));
        return findShelterQuestion;
    }


    public ShelterQuestion findShelterQuestion(long shelterQuestionID){
        return findVerifiedShelterQuestion(shelterQuestionID);}


    public List<ShelterQuestion> searchTitleShelterQuestion(String word){
        return shelterQuestionRepository.findByShelterQuestionTitleContainingOrderByShelterQuestionIdDesc(word);
    }

    public List<ShelterQuestion> searchNameShelterQuestion(String word){
        return shelterQuestionRepository.findByNameContainingOrderByShelterQuestionIdDesc(word);
    }

    public List<ShelterQuestion> searchContentShelterQuestion(String word){
        return shelterQuestionRepository.findByShelterQuestionContentContainingOrderByShelterQuestionIdDesc(word);
    }

    public List<ShelterQuestion> searchTagShelterQuestion(String word){
        return shelterQuestionRepository.findByLocationTagContainingOrderByShelterQuestionIdDesc(word);
    }

    public Page<ShelterQuestion> findShelterQuestions(int page, int size){
        return shelterQuestionRepository.findAll(PageRequest.of(page,size,
                Sort.by("shelterQuestionId").descending()));
    }

    @Transactional
    public void deleteShelterQuestion(long shelterQuestionId){
        if(!shelterQuestionRepository.existsById(shelterQuestionId)){
            throw new BusinessLogicException(ExceptionCode.StuffQuestion_NOT_FOUND);
        }

        List<ShelterAnswer> shelterAnswers=shelterAnswerRepository.findByShelterQuestionId(shelterQuestionId);

        shelterAnswerRepository.deleteAll(shelterAnswers);

        shelterQuestionRepository.deleteById(shelterQuestionId);
    }

    public ShelterQuestion addViews(ShelterQuestion shelterQuestion){
        long views = shelterQuestion.getViews();
        views++;
        shelterQuestion.setViews(views);

        return shelterQuestionRepository.save(shelterQuestion);

    }
}