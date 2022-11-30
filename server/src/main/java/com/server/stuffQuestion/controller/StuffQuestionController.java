package com.server.stuffQuestion.controller;

import com.server.response.MultiResponseDto;
import com.server.response.SingleResponseDto;
import com.server.stuffQuestion.dto.StuffQuestionPatchDto;
import com.server.stuffQuestion.dto.StuffQuestionPostDto;
import com.server.stuffQuestion.entity.StuffQuestion;
import com.server.stuffQuestion.mapper.StuffQuestionMapper;
import com.server.stuffQuestion.repository.StuffQuestionRepository;
import com.server.stuffQuestion.service.StuffQuestionService;
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
@RequestMapping("/stuffQuestion")
@Validated
@RequiredArgsConstructor
@Transactional
@Api(tags ="StuffQuestion API")
public class StuffQuestionController {

    private final StuffQuestionService stuffQuestionService;

    private final StuffQuestionMapper stuffQuestionMapper;

    private final StuffQuestionRepository stuffQuestionRepository;

    @PostMapping
    public ResponseEntity postStuffQuestion(@Valid @RequestBody StuffQuestionPostDto stuffQuestionPostDto){

        StuffQuestion stuffQuestion = stuffQuestionService.createStuffQuestion(stuffQuestionMapper.stuffQuestionPostDtoToStuffQuestion(stuffQuestionPostDto));

        return new ResponseEntity<>(stuffQuestionMapper.stuffQuestionToStuffQuestionResponseDto(stuffQuestion), HttpStatus.CREATED);

    }

    @PatchMapping("/{stuffQuestionId}")
    public ResponseEntity patchStuffQuestion(@PathVariable("stuffQuestionId") @Positive long stuffQuestionId,
                                             @Valid @RequestBody StuffQuestionPatchDto stuffQuestionPatchDto){

        StuffQuestion stuffQuestion = stuffQuestionMapper.stuffQuestionPatchDtoToStuffQuestion(stuffQuestionPatchDto);
        stuffQuestion.setStuffQuestionId(stuffQuestionId);

        StuffQuestion responseStuffQuestion = stuffQuestionService.updateStuffQuestion(stuffQuestion);

        return new  ResponseEntity<>(stuffQuestionMapper.stuffQuestionToStuffQuestionResponseDto(responseStuffQuestion), HttpStatus.OK);

    }


    @GetMapping("/{stuffQuestionId}")
    public ResponseEntity getStuffQuestion(@PathVariable("stuffQuestionId") @Positive long Id){

        StuffQuestion stuffQuestion = stuffQuestionService.findStuffQuestion(Id);

        stuffQuestion=stuffQuestionService.addViews(stuffQuestion);


        return new ResponseEntity<>(

                new SingleResponseDto<>(stuffQuestionMapper.stuffQuestionToStuffQuestionResponseDto(stuffQuestion)), HttpStatus.OK);

    }

    @GetMapping("/search/title/{word}")
    public ResponseEntity searchTitleStuffQuestion(@PathVariable("word") String word,
                                                   @Positive @RequestParam int page,
                                                   @Positive @RequestParam int size){
        Page<StuffQuestion> pageStuffQuestion = stuffQuestionService.findStuffQuestions(page-1, size);
        List<StuffQuestion> stuffQuestionTitle=stuffQuestionService.searchTitleStuffQuestion(word);

        return new ResponseEntity<>(
                new MultiResponseDto<>(stuffQuestionMapper.stuffQuestionsToStuffQuestionResponseDtos(stuffQuestionTitle),pageStuffQuestion), HttpStatus.OK);
    }


    @GetMapping("/search/name/{word}")
    public ResponseEntity searchNameStuffQuestion(@PathVariable("word") String word,
                                                  @Positive @RequestParam int page,
                                                  @Positive @RequestParam int size){
        Page<StuffQuestion> pageStuffQuestion = stuffQuestionService.findStuffQuestions(page-1,size);
        List<StuffQuestion> stuffQuestionName = pageStuffQuestion.getContent();

        return new ResponseEntity<>(
                new MultiResponseDto<>(stuffQuestionMapper.stuffQuestionsToStuffQuestionResponseDtos(stuffQuestionName),pageStuffQuestion), HttpStatus.OK);
    }

    @GetMapping("/search/content/{word}")
    public ResponseEntity searchContentStuffQuestion(@PathVariable("word") String word,
                                                     @Positive @RequestParam int page,
                                                     @Positive @RequestParam int size){
        Page<StuffQuestion> pageStuffQuestion = stuffQuestionService.findStuffQuestions(page-1, size);
        List<StuffQuestion> stuffQuestionContent=pageStuffQuestion.getContent();

        return new ResponseEntity<>(
                new MultiResponseDto<>(stuffQuestionMapper.stuffQuestionsToStuffQuestionResponseDtos(stuffQuestionContent),pageStuffQuestion), HttpStatus.OK);
    }


    @GetMapping("/search/tag/{word}")
    public ResponseEntity searchTagStuffQuestion(@PathVariable("word") String word,
                                                @Positive @RequestParam int page,
                                                @Positive @RequestParam int size) {
        Page<StuffQuestion> pageStuffQuestion = stuffQuestionService.findStuffQuestions(page-1, size);
        List<StuffQuestion> stuffQuestionTag = pageStuffQuestion.getContent();

        return new ResponseEntity<>(
                new MultiResponseDto<>(stuffQuestionMapper.stuffQuestionsToStuffQuestionResponseDtos(stuffQuestionTag), pageStuffQuestion), HttpStatus.OK);
    }

    @GetMapping("/stuffQuestions")
    public ResponseEntity getAllStuffQuestions(){
        List<StuffQuestion> stuffQuestionList=stuffQuestionRepository.findAll(Sort.by(Sort.Direction.DESC, "stuffQuestionId"));  // 바로 repository에서 데이터 가져옴

        return new ResponseEntity<>(stuffQuestionMapper.stuffQuestionsToStuffQuestionResponseDtos(stuffQuestionList),HttpStatus.OK);
    }


    @GetMapping
    public ResponseEntity getStuffQuestions(@Positive @RequestParam int page,
                                            @Positive @RequestParam int size) {
        Page<StuffQuestion> pageStuffQuestion = stuffQuestionService.findStuffQuestions(page-1, size);
        List<StuffQuestion> stuffQuestion = pageStuffQuestion.getContent();

        return new ResponseEntity<>(
                new MultiResponseDto<>(stuffQuestionMapper.stuffQuestionsToStuffQuestionResponseDtos(stuffQuestion), pageStuffQuestion), HttpStatus.OK);
    }


    @DeleteMapping("/{stuffQuestionId}")
    public ResponseEntity deleteStuffQuestion(@PathVariable("stuffQuestionId") @Positive long stuffQuestionId){

        stuffQuestionService.deleteStuffQuestion(stuffQuestionId);

        return new ResponseEntity<>(HttpStatus.NO_CONTENT);
    }

}