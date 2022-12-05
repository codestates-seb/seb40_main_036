package com.server.reservation.repository;

import com.server.reservation.entity.Reservation;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface ReservationRepository extends JpaRepository<Reservation,Long> {
    List<Reservation> findByShelterId(long shelterId);
    List<Reservation> findByReservationId(long shelterId);
    Reservation findByMemberId(long memberId);
}
