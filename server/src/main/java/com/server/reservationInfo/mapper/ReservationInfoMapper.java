package com.server.reservationInfo.mapper;

import com.server.reservationInfo.dto.ReservationInfoResponseDto;
import com.server.reservationInfo.entity.ReservationInfo;
import org.mapstruct.Mapper;

import java.util.List;
import java.util.stream.Collectors;
@Mapper(componentModel = "spring")
public interface ReservationInfoMapper{
    ReservationInfoResponseDto reservationInfoToReservationInfoResponseDto(ReservationInfo reservationInfo);

    List<ReservationInfoResponseDto> reservationInfosToReservationInfoResponseDtos(List<ReservationInfo> reservationInfos);
}
