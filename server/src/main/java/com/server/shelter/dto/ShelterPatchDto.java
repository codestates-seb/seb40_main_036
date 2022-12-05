package com.server.shelter.dto;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
public class ShelterPatchDto {
    private Long shelterId;

    private String shelterName; // 대피소 이름

    private String geolocation; // 대피소 주소

    private String x; // 위도

    private String y; // 경도

    private int capacity; // 대피소 수용가능 인원
}
