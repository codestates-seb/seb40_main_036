package com.server.shelter.dto;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import javax.persistence.Column;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;

@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
public class ShelterResponseDto {
    private Long shelterId;

    private String location; // 군

    private String shelterName; // 대피소 이름

    private int uuid; // 대피소 고유 번호

    private String geolocation; // 대피소 주소

    private long updatedate; // 대피소 정보 수정 날짜

    private int capacity; // 대피소 수용가능 인원
}
