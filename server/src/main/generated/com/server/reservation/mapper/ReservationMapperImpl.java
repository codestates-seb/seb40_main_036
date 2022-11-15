package com.server.reservation.mapper;

import com.server.reservation.dto.ReservationPatchDto;
import com.server.reservation.dto.ReservationPostDto;
import com.server.reservation.dto.ReservationResponseDto;
import com.server.reservation.entity.Reservation;
import java.util.ArrayList;
import java.util.List;
import javax.annotation.processing.Generated;
import org.springframework.stereotype.Component;

@Generated(
    value = "org.mapstruct.ap.MappingProcessor",
    date = "2022-11-15T14:40:55+0900",
    comments = "version: 1.4.2.Final, compiler: javac, environment: Java 17.0.2 (Oracle Corporation)"
)
@Component
public class ReservationMapperImpl implements ReservationMapper {

    @Override
    public Reservation reservationPostDtoToReservation(ReservationPostDto reservationPostDto) {
        if ( reservationPostDto == null ) {
            return null;
        }

        Reservation reservation = new Reservation();

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
        reservation.setNum( reservationPatchDto.getNum() );

        return reservation;
    }

    @Override
    public ReservationResponseDto reservationToReservationResponseDto(Reservation reservation) {
        if ( reservation == null ) {
            return null;
        }

        ReservationResponseDto reservationResponseDto = new ReservationResponseDto();

        if ( reservation.getReservationId() != null ) {
            reservationResponseDto.setReservationId( reservation.getReservationId() );
        }
        reservationResponseDto.setNum( reservation.getNum() );
        reservationResponseDto.setCreatedAt( reservation.getCreatedAt() );
        reservationResponseDto.setModifiedAt( reservation.getModifiedAt() );

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
