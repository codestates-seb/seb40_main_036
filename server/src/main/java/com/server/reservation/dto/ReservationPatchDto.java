package com.server.reservation.dto;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
public class ReservationPatchDto {
    private long reservationId;
    private long memberId;
    private long shelterId;
    private int num;
}
