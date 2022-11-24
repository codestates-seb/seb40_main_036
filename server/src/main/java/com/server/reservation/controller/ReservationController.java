package com.server.reservation.controller;

import com.server.member.service.MemberService;
import com.server.reservation.dto.ReservationPatchDto;
import com.server.reservation.dto.ReservationPostDto;
import com.server.reservation.entity.Reservation;
import com.server.reservation.mapper.ReservationMapper;
import com.server.reservation.service.ReservationService;
import com.server.response.MultiResponseDto;
import com.server.response.SingleResponseDto;
import com.server.shelter.service.ShelterService;
import lombok.AllArgsConstructor;
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
@RequestMapping("/reservation")
public class ReservationController {

    private final ReservationService reservationService;
    private final ReservationMapper reservationMapper;
    private final MemberService memberService;
    private final ShelterService shelterService;

    @PostMapping
    public ResponseEntity postReservation(@Valid @RequestBody ReservationPostDto reservationPostDto){

        Reservation reservation = reservationService.createReservation(reservationMapper.reservationPostDtoToReservation(reservationPostDto));
        return new ResponseEntity<>(
                new SingleResponseDto<>(reservationMapper.reservationToReservationResponseDto(reservation)), HttpStatus.CREATED);
    }

//    @PatchMapping("/{reservationId}")
//    public ResponseEntity patchReservation(@PathVariable("reservationId") @Positive long Id,
//                                       @Valid @RequestBody ReservationPatchDto reservationPatchDto) {
//        reservationPatchDto.setReservationId(Id);
//        Reservation response = reservationService.updateReservation(reservationMapper.reservationPatchDtoToReservation(reservationPatchDto));
//
//        return new ResponseEntity<>(reservationMapper.reservationToReservationResponseDto(response), HttpStatus.OK);
//    }

    @GetMapping("/{reservationId}")
    public ResponseEntity getReservation(@PathVariable("reservationId")
                                     @Positive long Id) {
        Reservation reservation = reservationService.findReservation(Id);

        return new ResponseEntity<>(

                new SingleResponseDto(reservationMapper.reservationToReservationResponseDto(reservation)),
                HttpStatus.OK);
    }

    @GetMapping
    public ResponseEntity getReservations(@Positive @RequestParam int page,
                                      @Positive @RequestParam int size) {
        Page<Reservation> pageReservations = reservationService.findReservations(page-1, size);
        List<Reservation> reservations = pageReservations.getContent();// 내용까지도

        return new ResponseEntity<>(
                new MultiResponseDto<>(reservationMapper.reservationsToReservationResponseDtos(reservations),
                        pageReservations),
                HttpStatus.OK);
    }

    @DeleteMapping("/{reservationId}")
    public ResponseEntity deleteReservation(@PathVariable("reservationId")
                                        @Positive long Id){

        reservationService.deleteReservation(Id);
        return new ResponseEntity<>(HttpStatus.NO_CONTENT);
    }
}
