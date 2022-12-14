package com.server.reservationInfo.controller;

import com.server.question.entity.Question;
import com.server.reservationInfo.entity.ReservationInfo;
import com.server.reservationInfo.mapper.ReservationInfoMapper;
import com.server.reservationInfo.repository.ReservationInfoRepository;
import com.server.reservationInfo.service.ReservationInfoService;
import com.server.response.MultiResponseDto;
import com.server.response.SingleResponseDto;
import com.server.shelterQuestion.entity.ShelterQuestion;
import io.swagger.annotations.Api;
import lombok.AllArgsConstructor;
import lombok.RequiredArgsConstructor;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Sort;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.transaction.annotation.Transactional;
import org.springframework.validation.annotation.Validated;
import org.springframework.web.bind.annotation.*;
import javax.validation.constraints.Positive;
import java.util.List;

@RestController
@RequiredArgsConstructor
@Validated
@RequestMapping("/reservationInfo")
@Transactional
@Api(tags ="ReservationInfo API")
public class ReservationInfoController {
    private final ReservationInfoService reservationInfoService;
    private final ReservationInfoMapper reservationInfoMapper;
    private final ReservationInfoRepository reservationInfoRepository;


    @GetMapping("/{reservationInfoId}")
    public ResponseEntity getReservationInfo(@PathVariable("reservationInfoId")
                                         @Positive long Id) {
        ReservationInfo reservationInfo = reservationInfoService.findReservationInfo(Id);

        return new ResponseEntity<>(

                new SingleResponseDto(reservationInfoMapper.reservationInfoToReservationInfoResponseDto(reservationInfo)),
                HttpStatus.OK);
    }

    @GetMapping
    public ResponseEntity getReservationInfos(@Positive @RequestParam int page,
                                          @Positive @RequestParam int size) {
        Page<ReservationInfo> pageReservationInfos = reservationInfoService.findReservationInfos(page-1, size);
        List<ReservationInfo> reservationInfos = pageReservationInfos.getContent();// ???????????????

        return new ResponseEntity<>(
                new MultiResponseDto<>(reservationInfoMapper.reservationInfosToReservationInfoResponseDtos(reservationInfos),
                        pageReservationInfos),
                HttpStatus.OK);
    }

    @GetMapping("/reservationInfos")
    public ResponseEntity getAllReservationInfos(){
        List<ReservationInfo> reservationInfoList=reservationInfoRepository.findAll(Sort.by(Sort.Direction.ASC, "reservationInfoId"));  // ?????? repository?????? ????????? ?????????

        return new ResponseEntity<>(reservationInfoMapper.reservationInfosToReservationInfoResponseDtos(reservationInfoList),HttpStatus.OK);
    }
}

