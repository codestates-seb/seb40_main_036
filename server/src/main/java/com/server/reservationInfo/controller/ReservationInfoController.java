package com.server.reservationInfo.controller;

import com.server.reservationInfo.entity.ReservationInfo;
import com.server.reservationInfo.mapper.ReservationInfoMapper;
import com.server.reservationInfo.service.ReservationInfoService;
import com.server.response.MultiResponseDto;
import com.server.response.SingleResponseDto;
import lombok.AllArgsConstructor;
import lombok.RequiredArgsConstructor;
import org.springframework.data.domain.Page;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.validation.annotation.Validated;
import org.springframework.web.bind.annotation.*;
import javax.validation.constraints.Positive;
import java.util.List;

@RestController
@RequiredArgsConstructor
@Validated
@RequestMapping("/reservationInfo")
public class ReservationInfoController {
    private final ReservationInfoService reservationInfoService;
    private final ReservationInfoMapper reservationInfoMapper;

    // post가 없는데 어떻게 이걸 get하지? -> post는 reservationService create에서 진행함


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
        List<ReservationInfo> reservationInfos = pageReservationInfos.getContent();// 내용까지도

        return new ResponseEntity<>(
                new MultiResponseDto<>(reservationInfoMapper.reservationInfosToReservationInfoResponseDtos(reservationInfos),
                        pageReservationInfos),
                HttpStatus.OK);
    }
}
