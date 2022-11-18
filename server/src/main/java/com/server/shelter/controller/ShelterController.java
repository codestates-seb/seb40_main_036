package com.server.shelter.controller;

import com.server.member.entity.Member;
import com.server.response.MultiResponseDto;
import com.server.response.SingleResponseDto;
import com.server.shelter.dto.ShelterPatchDto;
import com.server.shelter.dto.ShelterPostDto;
import com.server.shelter.entity.Shelter;
import com.server.shelter.mapper.ShelterMapper;
import com.server.shelter.service.ShelterService;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import org.springframework.data.domain.Page;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.validation.annotation.Validated;
import org.springframework.web.bind.annotation.*;

import javax.validation.Valid;
import javax.validation.constraints.Positive;
import java.util.List;


@RestController
@AllArgsConstructor
@Validated
@RequestMapping("/shelter")
public class ShelterController {

    private final ShelterService shelterService;
    private final ShelterMapper shelterMapper;

    @PostMapping
    public ResponseEntity postShelter(@Valid @RequestBody ShelterPostDto shelterPostDto){

        Shelter shelter = shelterService.createShelter(shelterMapper.shelterPostDtoToShelter(shelterPostDto));
        return new ResponseEntity<>(
                shelterMapper.shelterToShelterResponseDto(shelter),
                HttpStatus.CREATED);
    }

    @GetMapping("/{shelterId}")
    public ResponseEntity getShelter(@PathVariable("shelterId")
                                    @Positive long Id) {
        Shelter shelter = shelterService.findShelter(Id);

        return new ResponseEntity<>(

                new SingleResponseDto(shelterMapper.shelterToShelterResponseDto(shelter)),
                HttpStatus.OK);
    }

    @GetMapping
    public ResponseEntity getShelters(@Positive @RequestParam int page,
                                     @Positive @RequestParam int size) {
        Page<Shelter> pageMembers = shelterService.findShelters(page-1, size);
        List<Shelter> shelters = pageMembers.getContent();// 내용까지도

        return new ResponseEntity<>(
                new MultiResponseDto<>(shelterMapper.sheltersToShelterResponseDtos(shelters),
                        pageMembers),
                HttpStatus.OK);
    }


    @GetMapping("/search/{location}")
    public ResponseEntity searchShelter(@PathVariable("location")
                                        @Valid String location){
        List<Shelter> shelters = shelterService.searchShelter(location);

        return new ResponseEntity<>(shelterMapper.sheltersToShelterResponseDtos(shelters),HttpStatus.OK);
    }

    @DeleteMapping("/{shelterId}")
    public ResponseEntity deleteShelter(@PathVariable("shelterId")
                                       @Positive long Id){

        shelterService.deleteShelter(Id);
        return new ResponseEntity<>(HttpStatus.NO_CONTENT);
    }

    @PatchMapping("/{shelterId}")
    public ResponseEntity patchShelter(@PathVariable("shelterId") @Positive long Id,
                                    @Valid @RequestBody ShelterPatchDto shelterPatchDto) {
        shelterPatchDto.setShelterId(Id);
        Shelter response = shelterService.updateShelter(shelterMapper.shelterPatchDtoToShelter(shelterPatchDto));

        return new ResponseEntity<>(shelterMapper.shelterToShelterResponseDto(response), HttpStatus.OK);
    }
}
