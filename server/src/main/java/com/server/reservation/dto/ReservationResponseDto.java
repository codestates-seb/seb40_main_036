package com.server.reservation.dto;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import java.time.LocalDateTime;

@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
public class ReservationResponseDto {
    private long reservationId;
    private long memberId;
    private long shelterId;
    private long num;
    private LocalDateTime createdAt;
    private LocalDateTime modified;
}
