package com.server.reservation.mapper;

import com.server.member.entity.Member;
import com.server.reservation.dto.ReservationPatchDto;
import com.server.reservation.dto.ReservationPostDto;
import com.server.reservation.dto.ReservationResponseDto;
import com.server.reservation.entity.Reservation;
import com.server.shelter.entity.Shelter;
import org.mapstruct.Mapper;
import java.util.List;

@Mapper(componentModel = "spring")
public interface ReservationMapper {
    default Reservation reservationPostDtoToReservation(ReservationPostDto reservationPostDto){
        Member member = new Member();
        Shelter shelter = new Shelter();
        Reservation reservation = new Reservation();

        // memberId
        member.setMemberId(reservationPostDto.getMemberId());

        // shelterId
        shelter.setShelterId(reservationPostDto.getShelterId());

        // num
        reservation.setNum(reservationPostDto.getNum());

        reservation.setMember(member);
        reservation.setShelter(shelter);
        return reservation;
    }

    Reservation reservationPatchDtoToReservation(ReservationPatchDto reservationPatchDto);
    ReservationResponseDto reservationToReservationResponseDto(Reservation reservation);

//    default ReservationResponseDto reservationToReservationResponseDto(Reservation reservation) {
//        ReservationResponseDto reservationResponseDto = new ReservationResponseDto();
//
//        // reservationId
//        reservationResponseDto.setReservationId(reservation.getReservationId());
//        // memberId
//        reservationResponseDto.setMemberId(reservationResponseDto.getMemberId());
//        // shelterId
//        reservationResponseDto.setShelterId(reservationResponseDto.getShelterId());
//        // num
//        reservationResponseDto.setNum(reservationResponseDto.getNum());
//        return reservationResponseDto;
//    }

    List<ReservationResponseDto> reservationsToReservationResponseDtos(List<Reservation> reservations);
}
