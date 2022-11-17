package com.server.reservation.mapper;

import com.server.reservation.dto.ReservationPatchDto;
import com.server.reservation.entity.Reservation;
import javax.annotation.processing.Generated;
import org.springframework.stereotype.Component;

@Generated(
    value = "org.mapstruct.ap.MappingProcessor",
<<<<<<< HEAD
    date = "2022-11-17T15:07:31+0900",
    comments = "version: 1.5.1.Final, compiler: javac, environment: Java 17.0.5 (Amazon.com Inc.)"
=======
    date = "2022-11-17T15:26:00+0900",
    comments = "version: 1.5.1.Final, compiler: javac, environment: Java 17.0.2 (Oracle Corporation)"
>>>>>>> a61e73b573a6096e2b21fe6944e605e55b19d79b
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
