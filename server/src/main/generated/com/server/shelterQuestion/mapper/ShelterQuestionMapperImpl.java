package com.server.shelterQuestion.mapper;

import com.server.shelterAnswer.dto.ShelterAnswerResponseDto;
import com.server.shelterAnswer.entity.ShelterAnswer;
import com.server.shelterQuestion.dto.ShelterQuestionPatchDto;
import com.server.shelterQuestion.dto.ShelterQuestionPostDto;
import com.server.shelterQuestion.dto.ShelterQuestionResponseDto;
import com.server.shelterQuestion.entity.ShelterQuestion;
import java.time.LocalDate;
import java.util.ArrayList;
import java.util.List;
import javax.annotation.processing.Generated;
import org.springframework.stereotype.Component;

@Generated(
    value = "org.mapstruct.ap.MappingProcessor",
    date = "2022-12-01T10:22:38+0900",
    comments = "version: 1.5.1.Final, compiler: javac, environment: Java 17.0.5 (Amazon.com Inc.)"
)
@Component
public class ShelterQuestionMapperImpl implements ShelterQuestionMapper {

    @Override
    public ShelterQuestion shelterQuestionPostDtoToShelterQuestion(ShelterQuestionPostDto shelterQuestionPostDto) {
        if ( shelterQuestionPostDto == null ) {
            return null;
        }

        ShelterQuestion.ShelterQuestionBuilder shelterQuestion = ShelterQuestion.builder();

        shelterQuestion.memberId( shelterQuestionPostDto.getMemberId() );
        shelterQuestion.shelterQuestionTitle( shelterQuestionPostDto.getShelterQuestionTitle() );
        shelterQuestion.shelterQuestionContent( shelterQuestionPostDto.getShelterQuestionContent() );
        shelterQuestion.locationTag( shelterQuestionPostDto.getLocationTag() );

        return shelterQuestion.build();
    }

    @Override
    public ShelterQuestion shelterQuestionPatchDtoToShelterQuestion(ShelterQuestionPatchDto shelterQuestionPatchDto) {
        if ( shelterQuestionPatchDto == null ) {
            return null;
        }

        ShelterQuestion.ShelterQuestionBuilder shelterQuestion = ShelterQuestion.builder();

        shelterQuestion.memberId( shelterQuestionPatchDto.getMemberId() );
        shelterQuestion.shelterQuestionTitle( shelterQuestionPatchDto.getShelterQuestionTitle() );
        shelterQuestion.shelterQuestionContent( shelterQuestionPatchDto.getShelterQuestionContent() );
        shelterQuestion.locationTag( shelterQuestionPatchDto.getLocationTag() );

        return shelterQuestion.build();
    }

    @Override
    public ShelterQuestionResponseDto shelterQuestionToShelterQuestionResponseDto(ShelterQuestion shelterQuestion) {
        if ( shelterQuestion == null ) {
            return null;
        }

        Long shelterQuestionId = null;
        Long memberId = null;
        String name = null;
        String shelterQuestionTitle = null;
        String shelterQuestionContent = null;
        String locationTag = null;
        long views = 0L;
        long countAnswer = 0L;
        LocalDate shelterQuestionCreated = null;
        LocalDate shelterQuestionModified = null;
        List<ShelterAnswerResponseDto> shelterAnswers = null;

        shelterQuestionId = shelterQuestion.getShelterQuestionId();
        memberId = shelterQuestion.getMemberId();
        name = shelterQuestion.getName();
        shelterQuestionTitle = shelterQuestion.getShelterQuestionTitle();
        shelterQuestionContent = shelterQuestion.getShelterQuestionContent();
        locationTag = shelterQuestion.getLocationTag();
        views = shelterQuestion.getViews();
        countAnswer = shelterQuestion.getCountAnswer();
        shelterQuestionCreated = shelterQuestion.getShelterQuestionCreated();
        shelterQuestionModified = shelterQuestion.getShelterQuestionModified();
        shelterAnswers = shelterAnswerListToShelterAnswerResponseDtoList( shelterQuestion.getShelterAnswers() );

        ShelterQuestionResponseDto shelterQuestionResponseDto = new ShelterQuestionResponseDto( shelterQuestionId, memberId, name, shelterQuestionTitle, shelterQuestionContent, locationTag, views, countAnswer, shelterQuestionCreated, shelterQuestionModified, shelterAnswers );

        return shelterQuestionResponseDto;
    }

    @Override
    public List<ShelterQuestionResponseDto> shelterQuestionsToShelterQuestionResponseDtos(List<ShelterQuestion> shelterQuestions) {
        if ( shelterQuestions == null ) {
            return null;
        }

        List<ShelterQuestionResponseDto> list = new ArrayList<ShelterQuestionResponseDto>( shelterQuestions.size() );
        for ( ShelterQuestion shelterQuestion : shelterQuestions ) {
            list.add( shelterQuestionToShelterQuestionResponseDto( shelterQuestion ) );
        }

        return list;
    }

    protected ShelterAnswerResponseDto shelterAnswerToShelterAnswerResponseDto(ShelterAnswer shelterAnswer) {
        if ( shelterAnswer == null ) {
            return null;
        }

        ShelterAnswerResponseDto.ShelterAnswerResponseDtoBuilder shelterAnswerResponseDto = ShelterAnswerResponseDto.builder();

        shelterAnswerResponseDto.shelterAnswerId( shelterAnswer.getShelterAnswerId() );
        shelterAnswerResponseDto.shelterQuestionId( shelterAnswer.getShelterQuestionId() );
        shelterAnswerResponseDto.memberId( shelterAnswer.getMemberId() );
        shelterAnswerResponseDto.name( shelterAnswer.getName() );
        shelterAnswerResponseDto.shelterAnswerContent( shelterAnswer.getShelterAnswerContent() );
        shelterAnswerResponseDto.shelterAnswerCreated( shelterAnswer.getShelterAnswerCreated() );
        shelterAnswerResponseDto.shelterAnswerModified( shelterAnswer.getShelterAnswerModified() );

        return shelterAnswerResponseDto.build();
    }

    protected List<ShelterAnswerResponseDto> shelterAnswerListToShelterAnswerResponseDtoList(List<ShelterAnswer> list) {
        if ( list == null ) {
            return null;
        }

        List<ShelterAnswerResponseDto> list1 = new ArrayList<ShelterAnswerResponseDto>( list.size() );
        for ( ShelterAnswer shelterAnswer : list ) {
            list1.add( shelterAnswerToShelterAnswerResponseDto( shelterAnswer ) );
        }

        return list1;
    }
}
