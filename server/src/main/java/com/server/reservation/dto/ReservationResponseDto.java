package com.server.reservation.dto;

import lombok.*;

import java.time.LocalDateTime;

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
    private LocalDateTime createdAt;
    private LocalDateTime modifiedAt;
}
