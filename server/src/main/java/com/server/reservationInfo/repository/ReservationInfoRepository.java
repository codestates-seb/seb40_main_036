package com.server.reservationInfo.repository;

import com.server.reservationInfo.entity.ReservationInfo;
import org.springframework.data.jpa.repository.JpaRepository;

public interface ReservationInfoRepository extends JpaRepository<ReservationInfo, Long> {
}
