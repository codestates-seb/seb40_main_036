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
    // ReservationResponseDto reservationToReservationResponseDto(Reservation reservation);

    default ReservationResponseDto reservationToReservationResponseDto(Reservation reservation) {
        ReservationResponseDto reservationResponseDto = new ReservationResponseDto();
        // reservationId
        reservationResponseDto.setReservationId(reservation.getReservationId());
        // memberId
        reservationResponseDto.setMemberId(reservation.getMember().getMemberId());
        // shelterId
        reservationResponseDto.setShelterId(reservation.getShelter().getShelterId());
        // num
        reservationResponseDto.setNum(reservation.getNum());
        // createdAt
        reservationResponseDto.setReservationCreated(reservation.getReservationCreated());
        // modifiedAt
        reservationResponseDto.setReservationModified(reservation.getReservationModified());

        return reservationResponseDto;
    }

    default List<ReservationResponseDto> reservationsToReservationResponseDtos(List<Reservation> reservations){
        return reservations.stream()
                .map(reservation -> ReservationResponseDto
                .builder()
                        .reservationId(reservation.getReservationId())
                        .memberId(reservation.getMember().getMemberId())
                        .shelterId(reservation.getShelter().getShelterId())
                        .num(reservation.getNum())
                        .reservationCreated(reservation.getReservationCreated())
                        .reservationModified(reservation.getReservationModified())
                        .build())
                .collect(Collectors.toList());
    }
}
