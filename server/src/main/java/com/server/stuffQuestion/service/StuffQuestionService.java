package com.server.stuffQuestion.service;

import com.server.exception.BusinessLogicException;
import com.server.exception.ExceptionCode;
import com.server.member.entity.Member;
import com.server.member.repository.MemberRepository;
import com.server.stuffAnswer.entity.StuffAnswer;
import com.server.stuffAnswer.repository.StuffAnswerRepository;
import com.server.stuffQuestion.dto.StuffQuestionResponseDto;
import com.server.stuffQuestion.entity.StuffQuestion;
import com.server.stuffQuestion.mapper.StuffQuestionMapper;
import com.server.stuffQuestion.repository.StuffQuestionRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Sort;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.time.LocalDate;

import java.util.*;

@Service
@RequiredArgsConstructor
public class StuffQuestionService {

    private final StuffQuestionRepository stuffQuestionRepository;

    private final MemberRepository memberRepository;

    private final StuffAnswerRepository stuffAnswerRepository;

    private final StuffQuestionMapper stuffQuestionMapper;


    public StuffQuestion createStuffQuestion(StuffQuestion stuffQuestion){

        if(!memberRepository.existsById(stuffQuestion.getMemberId())){
            throw new BusinessLogicException(ExceptionCode.Member_NOT_FOUND);
        }

        stuffQuestion.setStuffQuestionCreated(LocalDate.now());

        stuffQuestion.setCountAnswer(0);

        Member member = memberRepository.findByMemberId(stuffQuestion.getMemberId());
        stuffQuestion.setName(member.getName());

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


    public Page<StuffQuestion> searchTagStuffQuestion(String word, int page, int size){
        return stuffQuestionRepository.findByLocationTagContainingOrderByStuffQuestionIdDesc(PageRequest.of(page, size, Sort.by("stuffQuestionId").descending()),word);
    }

    public Page<StuffQuestion> searchContentStuffQuestion(String word, int page, int size){
        return stuffQuestionRepository.findByStuffQuestionContentContainingOrderByStuffQuestionIdDesc(PageRequest.of(page, size, Sort.by("stuffQuestionId").descending()),word);
    }

    public Page<StuffQuestion> searchTitleStuffQuestion(String word, int page, int size){
        return stuffQuestionRepository.findByStuffQuestionTitleContainingOrderByStuffQuestionIdDesc(PageRequest.of(page, size, Sort.by("stuffQuestionId").descending()),word);
    }

    public Page<StuffQuestion> searchNameStuffQuestion(String word, int page, int size){
        return stuffQuestionRepository.findByNameContainingOrderByStuffQuestionIdDesc(PageRequest.of(page, size, Sort.by("stuffQuestionId").descending()),word);
    }



    public Page<StuffQuestion> findStuffQuestions(int page, int size){
            return stuffQuestionRepository.findAll(PageRequest.of(page,size,
                    Sort.by("stuffQuestionId").descending()));
    }

    public List<StuffQuestionResponseDto> getValue(List<StuffQuestion> stuffQuestions){
        List<StuffQuestionResponseDto> value = new ArrayList<>();

        Iterator iter = stuffQuestions.iterator();

        while(iter.hasNext()){
            StuffQuestion stuffQuestion = (StuffQuestion) iter.next();
            value.add(stuffQuestionMapper.stuffQuestionToStuffQuestionResponseDto(stuffQuestion));

        }
        return value;
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
