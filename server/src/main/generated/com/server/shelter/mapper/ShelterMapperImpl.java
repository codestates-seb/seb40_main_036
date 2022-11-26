package com.server.shelter.mapper;

import com.server.shelter.dto.ShelterPatchDto;
import com.server.shelter.dto.ShelterPostDto;
import com.server.shelter.dto.ShelterResponseDto;
import com.server.shelter.entity.Shelter;
import java.util.ArrayList;
import java.util.List;
import javax.annotation.processing.Generated;
import org.springframework.stereotype.Component;

@Generated(
    value = "org.mapstruct.ap.MappingProcessor",
    date = "2022-11-26T19:26:47+0900",
    comments = "version: 1.5.1.Final, compiler: javac, environment: Java 17.0.5 (Amazon.com Inc.)"
)
@Component
public class ShelterMapperImpl implements ShelterMapper {

    @Override
    public Shelter shelterPostDtoToShelter(ShelterPostDto shelterPostDto) {
        if ( shelterPostDto == null ) {
            return null;
        }

        Shelter shelter = new Shelter();

        shelter.setShelterId( shelterPostDto.getShelterId() );
        shelter.setShelterName( shelterPostDto.getShelterName() );
        shelter.setGeolocation( shelterPostDto.getGeolocation() );
        shelter.setX( shelterPostDto.getX() );
        shelter.setY( shelterPostDto.getY() );
        shelter.setCapacity( shelterPostDto.getCapacity() );

        return shelter;
    }

    @Override
    public List<Shelter> shelterPostDtosToShelters(List<ShelterPostDto> shelterPostDtos) {
        if ( shelterPostDtos == null ) {
            return null;
        }

        List<Shelter> list = new ArrayList<Shelter>( shelterPostDtos.size() );
        for ( ShelterPostDto shelterPostDto : shelterPostDtos ) {
            list.add( shelterPostDtoToShelter( shelterPostDto ) );
        }

        return list;
    }

    @Override
    public Shelter shelterPatchDtoToShelter(ShelterPatchDto shelterPatchDto) {
        if ( shelterPatchDto == null ) {
            return null;
        }

        Shelter shelter = new Shelter();

        shelter.setShelterId( shelterPatchDto.getShelterId() );
        shelter.setShelterName( shelterPatchDto.getShelterName() );
        shelter.setGeolocation( shelterPatchDto.getGeolocation() );
        shelter.setX( shelterPatchDto.getX() );
        shelter.setY( shelterPatchDto.getY() );
        shelter.setCapacity( shelterPatchDto.getCapacity() );

        return shelter;
    }

    @Override
    public ShelterResponseDto shelterToShelterResponseDto(Shelter shelter) {
        if ( shelter == null ) {
            return null;
        }

        ShelterResponseDto shelterResponseDto = new ShelterResponseDto();

        shelterResponseDto.setShelterId( shelter.getShelterId() );
        shelterResponseDto.setShelterName( shelter.getShelterName() );
        shelterResponseDto.setGeolocation( shelter.getGeolocation() );
        shelterResponseDto.setX( shelter.getX() );
        shelterResponseDto.setY( shelter.getY() );
        shelterResponseDto.setCapacity( shelter.getCapacity() );

        return shelterResponseDto;
    }

    @Override
    public List<ShelterResponseDto> sheltersToShelterResponseDtos(List<Shelter> shelters) {
        if ( shelters == null ) {
            return null;
        }

        List<ShelterResponseDto> list = new ArrayList<ShelterResponseDto>( shelters.size() );
        for ( Shelter shelter : shelters ) {
            list.add( shelterToShelterResponseDto( shelter ) );
        }

        return list;
    }
}
