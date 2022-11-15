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
        reservationInfoResponseDto.setReservationInfoId(reservationInfo.getReservationInfoId());
        // shelterId
        reservationInfoResponseDto.setShelterId(reservationInfo.getShelter().getShelterId());
        // capaticy
        reservationInfoResponseDto.setCapacity(reservationInfo.getShelter().getCapacity());
        // num
        reservationInfoResponseDto.setNum(reservationInfo.getReservation().getNum());

        return reservationInfoResponseDto;
    }
    default List<ReservationInfoResponseDto> reservationInfosToReservationInfoResponseDtos(List<ReservationInfo> reservationInfos){
        return reservationInfos.stream()
                .map(reservationInfo -> ReservationInfoResponseDto
                .builder()
                        .reservationInfoId(reservationInfo.getReservationInfoId())
                        .shelterId(reservationInfo.getShelter().getShelterId())
                        .capacity(reservationInfo.getShelter().getCapacity())
                        .num(reservationInfo.getReservation().getNum())
                        .build())
                .collect(Collectors.toList());
    }
}
