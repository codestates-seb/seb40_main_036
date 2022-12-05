package com.server.reservationInfo.dto;

import lombok.*;

@AllArgsConstructor
@Getter
@Setter
public class ReservationInfoResponseDto {

    private long reservationInfoId; // 전체 대피소 예약번호

    private String shelterName;

    private String geolocation;

    private int capacity;

    private int reservedNum;
}
