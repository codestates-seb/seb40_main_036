package com.server.stuffQuestion.service;

import com.server.exception.BusinessLogicException;
import com.server.exception.ExceptionCode;
import com.server.member.repository.MemberRepository;
import com.server.stuffQuestion.entity.StuffQuestion;
import com.server.stuffQuestion.repository.StuffQuestionRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Sort;
import org.springframework.stereotype.Service;
import java.time.LocalDate;
import java.time.LocalDateTime;
import java.util.List;
import java.util.Optional;

@Service
@RequiredArgsConstructor
public class StuffQuestionService {

    private final StuffQuestionRepository stuffQuestionRepository;

    private final MemberRepository memberRepository;


    public StuffQuestion createStuffQuestion(StuffQuestion stuffQuestion){

        if(!memberRepository.existsById(stuffQuestion.getMemberId())){
            throw new BusinessLogicException(ExceptionCode.Member_NOT_FOUND);
        }

        stuffQuestion.setStuffQuestionCreated(LocalDate.now());

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

        Optional.ofNullable(stuffQuestion.getStuffQuestionTag())
                .ifPresent(Tag -> findStuffQuestion.setStuffQuestionTag(Tag));

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

        public List<StuffQuestion> searchStuffQuestion(String word){
            return stuffQuestionRepository.findByStuffQuestionContentContaining(word);
    }

    public Page<StuffQuestion> findStuffQuestions(int page, int size){
            return stuffQuestionRepository.findAll(PageRequest.of(page,size,
                    Sort.by("stuffQuestionId").descending()));
    }


    public void deleteStuffQuestion(long stuffQuestionId){
        StuffQuestion stuffQuestion = findVerifiedStuffQuestion(stuffQuestionId);
        stuffQuestionRepository.delete(stuffQuestion);
    }

//    public StuffQuestion addViews(StuffQuestion stuffQuestion){
//        long views = stuffQuestion.getViews();
//        views++;
//        stuffQuestion.setViews(views);
//
//        return stuffQuestionRepository.save(stuffQuestion);
//
//    }


}
