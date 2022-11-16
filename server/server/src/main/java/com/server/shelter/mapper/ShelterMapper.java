package com.server.shelter.mapper;

import com.server.shelter.dto.ShelterPatchDto;
import com.server.shelter.dto.ShelterPostDto;
import com.server.shelter.dto.ShelterResponseDto;
import com.server.shelter.entity.Shelter;
import org.mapstruct.Mapper;

import javax.persistence.ManyToOne;
import java.util.List;

@Mapper(componentModel = "spring")
public interface ShelterMapper {
    Shelter shelterPostDtoToShelter(ShelterPostDto shelterPostDto);
    Shelter shelterPatchDtoToShelter(ShelterPatchDto shelterPatchDto);
    ShelterResponseDto shelterToShelterResponseDto(Shelter shelter);
    List<ShelterResponseDto> sheltersToShelterResponseDtos(List<Shelter> shelters);
}
