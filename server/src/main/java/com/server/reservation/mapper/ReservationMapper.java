package com.server.reservation.mapper;

import com.server.member.entity.Member;
import com.server.reservation.dto.ReservationPatchDto;
import com.server.reservation.dto.ReservationPostDto;
import com.server.reservation.dto.ReservationResponseDto;
import com.server.reservation.entity.Reservation;
import com.server.shelter.entity.Shelter;
import org.mapstruct.Mapper;
import java.util.List;
import java.util.stream.Collectors;

@Mapper(componentModel = "spring")
public interface ReservationMapper {
    Reservation reservationPostDtoToReservation(ReservationPostDto reservationPostDto);

    Reservation reservationPatchDtoToReservation(ReservationPatchDto reservationPatchDto);
    // ReservationResponseDto reservationToReservationResponseDto(Reservation reservation);

    ReservationResponseDto reservationToReservationResponseDto(Reservation reservation);

    List<ReservationResponseDto> reservationsToReservationResponseDtos(List<Reservation> reservations);

}
