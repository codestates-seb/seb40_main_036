package com.server.cron;

import com.server.reservation.repository.ReservationRepository;
import com.server.reservationInfo.entity.ReservationInfo;
import com.server.reservationInfo.repository.ReservationInfoRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.scheduling.annotation.EnableScheduling;
import org.springframework.scheduling.annotation.Scheduled;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;

@SpringBootApplication
@EnableScheduling
@RequiredArgsConstructor
public class DeleteReserve {
    private final ReservationRepository reservationRepository;
    private final ReservationInfoRepository reservationInfoRepository;

        // @Scheduled(cron="*/200 * * * * *") // 매일매일 100초 뒤에 아래의 코드를 실행하겠다.

        @Scheduled(cron = "0 0 0 * * *") // 매일매일 0시에 아래의 코드를 실행하겠다.
        public void run(){
        reservationRepository.deleteAll();
            List<ReservationInfo> reservationInfoList=reservationInfoRepository.findAll();
            for(ReservationInfo reservationInfo:reservationInfoList){
                reservationInfo.setReservedNum(0); // 지우지말고 0으로 set
            }
            System.out.println("작동");
    }
}