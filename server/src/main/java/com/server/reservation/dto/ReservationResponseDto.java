package com.server.reservation.dto;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.Setter;

import java.time.LocalDate;

@AllArgsConstructor
@Getter
@Setter
public class ReservationResponseDto {

    private long reservationId;

    private long memberId;

    private long shelterId;

    private int num;

    private LocalDate reservationCreated;

//    private LocalDate reservationModified;

}
