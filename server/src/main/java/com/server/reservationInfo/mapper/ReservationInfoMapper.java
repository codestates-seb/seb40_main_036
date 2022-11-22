package com.server.reservationInfo.mapper;

import com.server.reservationInfo.dto.ReservationInfoResponseDto;
import com.server.reservationInfo.entity.ReservationInfo;
import org.mapstruct.Mapper;

import java.util.List;
import java.util.stream.Collectors;
@Mapper(componentModel = "spring")
public interface ReservationInfoMapper{
    default ReservationInfoResponseDto reservationInfoToReservationInfoResponseDto(ReservationInfo reservationInfo){
        ReservationInfoResponseDto reservationInfoResponseDto = new ReservationInfoResponseDto();
        // reservationInfoId
        reservationInfoResponseDto.setReservationInfoId(reservationInfo.getReservationInfoId()); // long
        // reservationId
        reservationInfoResponseDto.setReservationId(reservationInfo.getReservation().getReservationId()); // long
        // shelterName
        reservationInfoResponseDto.setShelterName(reservationInfo.getShelter().getShelterName()); // String
        // location
        reservationInfoResponseDto.setLocation(reservationInfo.getShelter().getLocation()); // String
        //geolocation
        reservationInfoResponseDto.setGeolocation(reservationInfo.getShelter().getGeolocation()); // String
        // capaticy
        reservationInfoResponseDto.setCapacity(reservationInfo.getShelter().getCapacity()); // int
        // num
        reservationInfoResponseDto.setNum(reservationInfo.getReservation().getNum()); // int

        return reservationInfoResponseDto;
    }
    default List<ReservationInfoResponseDto> reservationInfosToReservationInfoResponseDtos(List<ReservationInfo> reservationInfos){
        return reservationInfos.stream()
                .map(reservationInfo -> ReservationInfoResponseDto
                .builder()
                        .reservationInfoId(reservationInfo.getReservationInfoId())
                        .reservationId(reservationInfo.getReservation().getReservationId())
                        .shelterName(reservationInfo.getShelter().getShelterName())
                        .location(reservationInfo.getShelter().getLocation())
                        .geolocation(reservationInfo.getShelter().getGeolocation())
                        .capacity(reservationInfo.getShelter().getCapacity())
                        .num(reservationInfo.getReservation().getNum())
                        .build())
                .collect(Collectors.toList());
    }
}
