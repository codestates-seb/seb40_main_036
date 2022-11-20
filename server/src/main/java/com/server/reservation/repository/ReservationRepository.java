package com.server.reservation.repository;

import com.server.reservation.entity.Reservation;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.Optional;

public interface ReservationRepository extends JpaRepository<Reservation,Long> {
    Optional <Reservation> findByReservationId(long reservationId);
}
