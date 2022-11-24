package com.server.stuffQuestion.service;

import com.server.exception.BusinessLogicException;
import com.server.exception.ExceptionCode;
import com.server.member.repository.MemberRepository;
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

import java.util.List;
import java.util.Optional;

@Service
@RequiredArgsConstructor
public class StuffQuestionService {

    private final StuffQuestionRepository stuffQuestionRepository;

    private final MemberRepository memberRepository;

    private final StuffAnswerRepository stuffAnswerRepository;


    public StuffQuestion createStuffQuestion(StuffQuestion stuffQuestion){

        if(!memberRepository.existsById(stuffQuestion.getMemberId())){
            throw new BusinessLogicException(ExceptionCode.Member_NOT_FOUND);
        }

        stuffQuestion.setStuffQuestionCreated(LocalDate.now());

        stuffQuestion.setCountAnswer(0);

        return stuffQuestionRepository.save(stuffQuestion);
    }


    public StuffQuestion updateStuffQuestion(StuffQuestion stuffQuestion){

        if(!memberRepository.existsById(stuffQuestion.getMemberId())){
            throw new BusinessLogicException(ExceptionCode.Member_NOT_FOUND);
        }

        StuffQuestion findStuffQuestion = findVerifiedStuffQuestion(stuffQuestion.getStuffQuestionId());

        Optional.ofNullable(stuffQuestion.getStuffQuestionTitle())
                .ifPresent(Title -> findStuffQuestion.setStuffQuestionTitle(Title));

        Optional.ofNullable(stuffQuestion.getStuffQuestionContent())
                .ifPresent(Content -> findStuffQuestion.setStuffQuestionContent(Content));

        Optional.ofNullable(stuffQuestion.getLocationTag())
                .ifPresent(Tag -> findStuffQuestion.setLocationTag(Tag));

        findStuffQuestion.setStuffQuestionModified(LocalDate.now());

        return stuffQuestionRepository.save(findStuffQuestion);

    }

    public StuffQuestion findVerifiedStuffQuestion(long stuffQuestionId){
        Optional<StuffQuestion> optionalStuffQuestion =
                stuffQuestionRepository.findById(stuffQuestionId);
        StuffQuestion findStuffQuestion =
                optionalStuffQuestion.orElseThrow(()->
                        new BusinessLogicException(ExceptionCode.StuffQuestion_NOT_FOUND));
        return findStuffQuestion;
    }


    public StuffQuestion findStuffQuestion(long stuffQuestionID){return findVerifiedStuffQuestion(stuffQuestionID);}


    public List<StuffQuestion> searchTitleStuffQuestion(String word){
        return stuffQuestionRepository.findByStuffQuestionTitleContainingOrderByStuffQuestionIdDesc(word);
    }

    public List<StuffQuestion> searchNameStuffQuestion(String word){
        return stuffQuestionRepository.findByNameContainingOrderByStuffQuestionIdDesc(word);
    }

    public List<StuffQuestion> searchContentStuffQuestion(String word){
        return stuffQuestionRepository.findByStuffQuestionContentContainingOrderByStuffQuestionIdDesc(word);
    }

    public List<StuffQuestion> searchTagStuffQuestion(String word){
        return stuffQuestionRepository.findByLocationTagContainingOrderByStuffQuestionIdDesc(word);
    }

    public Page<StuffQuestion> findStuffQuestions(int page, int size){
            return stuffQuestionRepository.findAll(PageRequest.of(page,size,
                    Sort.by("stuffQuestionId").descending()));
    }

    @Transactional
    public void deleteStuffQuestion(long stuffQuestionId){
        if(!stuffQuestionRepository.existsById(stuffQuestionId)){
            throw new BusinessLogicException(ExceptionCode.StuffQuestion_NOT_FOUND);
        }

        List<StuffAnswer> stuffAnswers=stuffAnswerRepository.findByStuffQuestionId(stuffQuestionId);

        stuffAnswerRepository.deleteAll(stuffAnswers);

        stuffQuestionRepository.deleteById(stuffQuestionId);
    }

    public StuffQuestion addViews(StuffQuestion stuffQuestion){
        long views = stuffQuestion.getViews();
        views++;
        stuffQuestion.setViews(views);

        return stuffQuestionRepository.save(stuffQuestion);

    }
}
