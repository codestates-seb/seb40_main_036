package com.server.shelterAnswer.controller;

import com.server.response.MultiResponseDto;
import com.server.response.SingleResponseDto;
import com.server.shelterAnswer.dto.ShelterAnswerPatchDto;
import com.server.shelterAnswer.dto.ShelterAnswerPostDto;
import com.server.shelterAnswer.entity.ShelterAnswer;
import com.server.shelterAnswer.mapper.ShelterAnswerMapper;
import com.server.shelterAnswer.service.ShelterAnswerService;
import lombok.RequiredArgsConstructor;
import org.springframework.data.domain.Page;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.validation.annotation.Validated;
import org.springframework.web.bind.annotation.*;

import javax.validation.Valid;
import javax.validation.constraints.Positive;
import java.util.List;

@RestController
@RequestMapping("/shelterAnswer")
@Validated
@RequiredArgsConstructor

public class ShelterAnswerController {

    private final ShelterAnswerService shelterAnswerService;

    private final ShelterAnswerMapper shelterAnswerMapper;


    @PostMapping
    public ResponseEntity postShelterAnswer(@Valid @RequestBody ShelterAnswerPostDto shelterAnswerPostDto){

        ShelterAnswer shelterAnswer = shelterAnswerService.createShelterAnswer(shelterAnswerMapper.shelterAnswerPostDtoToShelterAnswer(shelterAnswerPostDto));

        return new ResponseEntity<>(shelterAnswerMapper.shelterAnswerToShelterAnswerResponseDto(shelterAnswer), HttpStatus.CREATED);
    }


    @PatchMapping("/{shelterAnswerId}")
    public ResponseEntity patchShelterAnswer(@PathVariable("shelterAnswerId") @Positive long shelterAnswerId,
                                           @Valid @RequestBody ShelterAnswerPatchDto shelterAnswerPatchDto){

        ShelterAnswer shelterAnswer = shelterAnswerMapper.shelterAnswerPatchDtoToShelterAnswer(shelterAnswerPatchDto);
        shelterAnswer.setShelterAnswerId(shelterAnswerId);

        ShelterAnswer responseShelterAnswer = shelterAnswerService.updateShelterAnswer(shelterAnswer);

        return new ResponseEntity<>(shelterAnswerMapper.shelterAnswerToShelterAnswerResponseDto(responseShelterAnswer), HttpStatus.OK);

    }


    @GetMapping("/{shelterAnswerId}")
    public ResponseEntity getShelterAnswer(@PathVariable("shelterAnswerId") @Positive long Id) {

        ShelterAnswer shelterAnswer = shelterAnswerService.findShelterAnswer(Id);

        return new ResponseEntity<>(

                new SingleResponseDto(shelterAnswerMapper.shelterAnswerToShelterAnswerResponseDto(shelterAnswer)),
                HttpStatus.OK);

    }


    @GetMapping("/shelterQuestion/{shelterQuestionId}")
    public ResponseEntity getShelterQuestionAnswers (@PathVariable("shelterQuestionId")
                                                   @Positive long shelterQuestionId){
        List<ShelterAnswer> shelterAnswerList = shelterAnswerService.findShelterQuestionShelterAnswers(shelterQuestionId);

        return new ResponseEntity<>(shelterAnswerMapper.shelterAnswersToShelterAnswerResponseDtos(shelterAnswerList), HttpStatus.OK);
    }


    @GetMapping
    public ResponseEntity getShelterAnswers(@Positive @RequestParam int page,
                                          @Positive @RequestParam int size) {
        Page<ShelterAnswer> pageShelterAnswer = shelterAnswerService.findShelterAnswers(page-1, size);
        List<ShelterAnswer> shelterAnswer = pageShelterAnswer.getContent();

        return new ResponseEntity<>(
                new MultiResponseDto<>(shelterAnswerMapper.shelterAnswersToShelterAnswerResponseDtos(shelterAnswer),pageShelterAnswer),HttpStatus.OK);
    }


    @DeleteMapping("/{shelterAnswerId}")
    public ResponseEntity deleteShelterAnswer(@PathVariable("shelterAnswerId") @Positive long shelterAnswerId){

        shelterAnswerService.deleteShelterAnswer(shelterAnswerId);

        return new ResponseEntity<>(HttpStatus.NO_CONTENT);
    }
}
