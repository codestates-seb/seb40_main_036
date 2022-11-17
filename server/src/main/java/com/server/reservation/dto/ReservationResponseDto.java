package com.server.reservation.dto;

import lombok.*;
import java.time.LocalDate;

@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
@Builder
public class ReservationResponseDto {
    private long reservationId;
    private long memberId;
    private long shelterId;
    private long num;
    private LocalDate reservationCreated;
    private LocalDate reservationModified;
}
