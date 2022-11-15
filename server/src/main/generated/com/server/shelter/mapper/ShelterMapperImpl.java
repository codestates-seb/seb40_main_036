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
    date = "2022-11-15T19:50:46+0900",
    comments = "version: 1.4.2.Final, compiler: javac, environment: Java 17.0.5 (Amazon.com Inc.)"
)
@Component
public class ShelterMapperImpl implements ShelterMapper {

    @Override
    public Shelter shelterPostDtoToShelter(ShelterPostDto shelterPostDto) {
        if ( shelterPostDto == null ) {
            return null;
        }

        Shelter shelter = new Shelter();

        shelter.setName( shelterPostDto.getName() );
        shelter.setAddress( shelterPostDto.getAddress() );
        shelter.setNum( shelterPostDto.getNum() );

        return shelter;
    }

    @Override
    public Shelter shelterPatchDtoToShelter(ShelterPatchDto shelterPatchDto) {
        if ( shelterPatchDto == null ) {
            return null;
        }

        Shelter shelter = new Shelter();

        shelter.setShelterId( shelterPatchDto.getShelterId() );
        shelter.setName( shelterPatchDto.getName() );
        shelter.setAddress( shelterPatchDto.getAddress() );
        shelter.setNum( shelterPatchDto.getNum() );

        return shelter;
    }

    @Override
    public ShelterResponseDto shelterToShelterResponseDto(Shelter shelter) {
        if ( shelter == null ) {
            return null;
        }

        ShelterResponseDto shelterResponseDto = new ShelterResponseDto();

        shelterResponseDto.setShelterId( shelter.getShelterId() );
        shelterResponseDto.setName( shelter.getName() );
        shelterResponseDto.setAddress( shelter.getAddress() );
        shelterResponseDto.setNum( shelter.getNum() );

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
