package com.server.reservation.mapper;

import com.server.reservation.dto.ReservationPatchDto;
import com.server.reservation.entity.Reservation;
import javax.annotation.processing.Generated;
import org.springframework.stereotype.Component;

@Generated(
    value = "org.mapstruct.ap.MappingProcessor",
    date = "2022-11-18T01:06:27+0900",
    comments = "version: 1.5.1.Final, compiler: javac, environment: Java 17.0.5 (Amazon.com Inc.)"
)
@Component
public class ReservationMapperImpl implements ReservationMapper {

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
}
