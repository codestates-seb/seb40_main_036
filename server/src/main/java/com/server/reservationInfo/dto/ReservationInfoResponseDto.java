package com.server.reservationInfo.dto;

import lombok.*;

@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
@Builder
public class ReservationInfoResponseDto {
    private long reservationInfoId;
    private long reservationId;
    private String shelterName;
    private String location;
    private String geolocation;
    private int capacity;
    private int num;
}
