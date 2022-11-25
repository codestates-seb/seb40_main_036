package com.server.cron;

import com.server.reservation.repository.ReservationRepository;
import com.server.reservationInfo.repository.ReservationInfoRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.scheduling.annotation.EnableScheduling;
import org.springframework.scheduling.annotation.Scheduled;
import org.springframework.transaction.annotation.Transactional;

import java.time.LocalDateTime;

@SpringBootApplication
@EnableScheduling
@RequiredArgsConstructor
@Transactional
public class DeleteReserve {
    private final ReservationRepository reservationRepository;
    private final ReservationInfoRepository reservationInfoRepository;

//    @Scheduled(cron = "0 0 0 * * *")
        @Scheduled(cron="*/100 * * * * *")
        public void run(){
        reservationRepository.deleteAll();
        reservationInfoRepository.deleteAll();
            System.out.println("작동");
    }
}