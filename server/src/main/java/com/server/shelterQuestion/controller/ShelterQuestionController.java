package com.server.shelterQuestion.controller;

import com.server.response.MultiResponseDto;
import com.server.response.SingleResponseDto;
import com.server.shelterQuestion.dto.ShelterQuestionPatchDto;
import com.server.shelterQuestion.dto.ShelterQuestionPostDto;
import com.server.shelterQuestion.entity.ShelterQuestion;
import com.server.shelterQuestion.mapper.ShelterQuestionMapper;
import com.server.shelterQuestion.repository.ShelterQuestionRepository;
import com.server.shelterQuestion.service.ShelterQuestionService;
import io.swagger.annotations.Api;
import lombok.RequiredArgsConstructor;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Sort;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.core.parameters.P;
import org.springframework.transaction.annotation.Transactional;
import org.springframework.validation.annotation.Validated;
import org.springframework.web.bind.annotation.*;
import javax.validation.Valid;
import javax.validation.constraints.Positive;
import java.util.List;

@RestController
@RequestMapping("/shelterQuestion")
@Validated
@RequiredArgsConstructor
@Transactional
@Api(tags ="ShelterQuestion API")
public class ShelterQuestionController {

    private final ShelterQuestionService shelterQuestionService;

    private final ShelterQuestionMapper shelterQuestionMapper;

    private final ShelterQuestionRepository shelterQuestionRepository;

    @PostMapping
    public ResponseEntity postShelterQuestion(@Valid @RequestBody ShelterQuestionPostDto shelterQuestionPostDto){

        ShelterQuestion shelterQuestion = shelterQuestionService.createShelterQuestion(shelterQuestionMapper.shelterQuestionPostDtoToShelterQuestion(shelterQuestionPostDto));

        return new ResponseEntity<>(shelterQuestionMapper.shelterQuestionToShelterQuestionResponseDto(shelterQuestion), HttpStatus.CREATED);

    }

    @PatchMapping("/{shelterQuestionId}")
    public ResponseEntity patchShelterQuestion(@PathVariable("shelterQuestionId") @Positive long shelterQuestionId,
                                             @Valid @RequestBody ShelterQuestionPatchDto shelterQuestionPatchDto){

        ShelterQuestion shelterQuestion = shelterQuestionMapper.shelterQuestionPatchDtoToShelterQuestion(shelterQuestionPatchDto);
        shelterQuestion.setShelterQuestionId(shelterQuestionId);

        ShelterQuestion responseShelterQuestion = shelterQuestionService.updateShelterQuestion(shelterQuestion);

        return new  ResponseEntity<>(shelterQuestionMapper.shelterQuestionToShelterQuestionResponseDto(responseShelterQuestion), HttpStatus.OK);

    }


    @GetMapping("/{shelterQuestionId}")
    public ResponseEntity getShelterQuestion(@PathVariable("shelterQuestionId") @Positive long Id){

        ShelterQuestion shelterQuestion = shelterQuestionService.findShelterQuestion(Id);

        shelterQuestion=shelterQuestionService.addViews(shelterQuestion);


        return new ResponseEntity<>(

                new SingleResponseDto<>(shelterQuestionMapper.shelterQuestionToShelterQuestionResponseDto(shelterQuestion)), HttpStatus.OK);

    }

    @GetMapping("/search/title/{word}")
    public ResponseEntity searchTitleShelterQuestion(@PathVariable("word") String word){
        List<ShelterQuestion> shelterQuestionList=shelterQuestionService.searchTitleShelterQuestion(word);

        return new ResponseEntity<>(shelterQuestionMapper.shelterQuestionsToShelterQuestionResponseDtos(shelterQuestionList), HttpStatus.OK);
    }


    @GetMapping("/search/name/{word}")
    public ResponseEntity searchNameShelterQuestion(@PathVariable("word") String word){
        List<ShelterQuestion> shelterQuestionList=shelterQuestionService.searchNameShelterQuestion(word);

        return new ResponseEntity<>(shelterQuestionMapper.shelterQuestionsToShelterQuestionResponseDtos(shelterQuestionList),HttpStatus.OK);
    }

    @GetMapping("/search/content/{word}")
    public ResponseEntity searchContentShelterQuestion(@PathVariable("word") String word){
        List<ShelterQuestion> shelterQuestionList=shelterQuestionService.searchContentShelterQuestion(word);

        return new ResponseEntity<>(shelterQuestionMapper.shelterQuestionsToShelterQuestionResponseDtos(shelterQuestionList),HttpStatus.OK);
    }

    @GetMapping("/search/tag/{word}")
    public ResponseEntity searchTagShelterQuestion(@PathVariable("word") String word){
        List<ShelterQuestion> shelterQuestionList=shelterQuestionService.searchTagShelterQuestion(word);

        return new ResponseEntity<>(shelterQuestionMapper.shelterQuestionsToShelterQuestionResponseDtos(shelterQuestionList),HttpStatus.OK);
    }



    @GetMapping("/shelterQuestions")
    public ResponseEntity getAllShelterQuestions(){
        List<ShelterQuestion> shelterQuestionList=shelterQuestionRepository.findAll(Sort.by(Sort.Direction.DESC, "shelterQuestionId"));  // 바로 repository에서 데이터 가져옴

        return new ResponseEntity<>(shelterQuestionMapper.shelterQuestionsToShelterQuestionResponseDtos(shelterQuestionList),HttpStatus.OK);
    }



    @GetMapping
    public ResponseEntity getShelterQuestions(@Positive @RequestParam int page,
                                            @Positive @RequestParam int size) {
        Page<ShelterQuestion> pageShelterQuestion = shelterQuestionService.findShelterQuestions(page-1, size);
        List<ShelterQuestion> shelterQuestion = pageShelterQuestion.getContent();

        return new ResponseEntity<>(
                new MultiResponseDto<>(shelterQuestionMapper.shelterQuestionsToShelterQuestionResponseDtos(shelterQuestion), pageShelterQuestion), HttpStatus.OK);
    }


    @DeleteMapping("/{shelterQuestionId}")
    public ResponseEntity deleteShelterQuestion(@PathVariable("shelterQuestionId") @Positive long shelterQuestionId){

        shelterQuestionService.deleteShelterQuestion(shelterQuestionId);

        return new ResponseEntity<>(HttpStatus.NO_CONTENT);
    }

}
