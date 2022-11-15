package com.server.reservationInfo.dto;

import lombok.*;

@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
@Builder
public class ReservationInfoResponseDto {
    private long reservationInfoId;
    private long shelterId;
    private int capacity;
    private int num;
}
