package com.server.reservation.mapper;

import com.server.reservation.dto.ReservationPatchDto;
import com.server.reservation.dto.ReservationPostDto;
import com.server.reservation.dto.ReservationResponseDto;
import com.server.reservation.entity.Reservation;
import java.time.LocalDate;
import java.util.ArrayList;
import java.util.List;
import javax.annotation.processing.Generated;
import org.springframework.stereotype.Component;

@Generated(
    value = "org.mapstruct.ap.MappingProcessor",
    date = "2022-11-23T16:24:58+0900",
    comments = "version: 1.5.1.Final, compiler: javac, environment: Java 17.0.2 (Oracle Corporation)"
)
@Component
public class ReservationMapperImpl implements ReservationMapper {

    @Override
    public Reservation reservationPostDtoToReservation(ReservationPostDto reservationPostDto) {
        if ( reservationPostDto == null ) {
            return null;
        }

        Reservation reservation = new Reservation();

        reservation.setMemberId( reservationPostDto.getMemberId() );
        reservation.setShelterId( reservationPostDto.getShelterId() );
        reservation.setNum( reservationPostDto.getNum() );

        return reservation;
    }

    @Override
    public Reservation reservationPatchDtoToReservation(ReservationPatchDto reservationPatchDto) {
        if ( reservationPatchDto == null ) {
            return null;
        }

        Reservation reservation = new Reservation();

        reservation.setReservationId( reservationPatchDto.getReservationId() );
        reservation.setMemberId( reservationPatchDto.getMemberId() );
        reservation.setShelterId( reservationPatchDto.getShelterId() );
        reservation.setNum( reservationPatchDto.getNum() );

        return reservation;
    }

    @Override
    public ReservationResponseDto reservationToReservationResponseDto(Reservation reservation) {
        if ( reservation == null ) {
            return null;
        }

        long reservationId = 0L;
        long memberId = 0L;
        long shelterId = 0L;
        int num = 0;
        LocalDate reservationCreated = null;
        LocalDate reservationModified = null;

        if ( reservation.getReservationId() != null ) {
            reservationId = reservation.getReservationId();
        }
        if ( reservation.getMemberId() != null ) {
            memberId = reservation.getMemberId();
        }
        if ( reservation.getShelterId() != null ) {
            shelterId = reservation.getShelterId();
        }
        num = reservation.getNum();
        reservationCreated = reservation.getReservationCreated();
        reservationModified = reservation.getReservationModified();

        ReservationResponseDto reservationResponseDto = new ReservationResponseDto( reservationId, memberId, shelterId, num, reservationCreated, reservationModified );

        return reservationResponseDto;
    }

    @Override
    public List<ReservationResponseDto> reservationsToReservationResponseDtos(List<Reservation> reservations) {
        if ( reservations == null ) {
            return null;
        }

        List<ReservationResponseDto> list = new ArrayList<ReservationResponseDto>( reservations.size() );
        for ( Reservation reservation : reservations ) {
            list.add( reservationToReservationResponseDto( reservation ) );
        }

        return list;
    }
}
