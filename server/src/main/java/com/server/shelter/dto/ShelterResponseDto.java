package com.server.shelter.dto;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor

public class ShelterResponseDto {
    private Long id;
    private String name;
    private String address;
    private int num;
}
