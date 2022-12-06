package com.server.cron;

import com.server.member.entity.Member;
import com.server.member.repository.MemberRepository;
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
    private final MemberRepository memberRepository;

    // @Scheduled(cron="*/200 * * * * *") // 매일매일 100초 뒤에 아래의 코드를 실행하겠다.
    // @Scheduled(cron = "0 0 0 * * *") // 매일매일 0시에 아래의 코드를 실행하겠다.
    // @Scheduled(cron = "0 0 0/1 * * *") // 매일매일 1시간마다 정각에 아래의 코드를 실행하겠다.
    @Transactional
    @Scheduled(cron = "0 0 0 * * *")
    public void run(){
        reservationRepository.deleteAll();

        List<ReservationInfo> reservationInfoList=reservationInfoRepository.findAll();
        for(ReservationInfo reservationInfo:reservationInfoList){
            reservationInfo.setReservedNum(0); // 지우지말고 0으로 set
        }

        List<Member> members =memberRepository.findAll();   // 예약을 모두 초기화하였으니 토큰또한 초기화
        for(Member member:members){
            member.setToken(null);
        }

        System.out.println("작동");

    }

}