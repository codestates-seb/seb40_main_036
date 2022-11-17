package com.server.reservation.repository;

import com.server.reservation.entity.Reservation;
import org.springframework.data.jpa.repository.JpaRepository;

public interface ReservationRepository extends JpaRepository<Reservation,Long> {
    Reservation findByReservationId(long reservationId);
}
