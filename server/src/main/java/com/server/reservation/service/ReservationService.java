package com.server.reservation.service;

import com.server.exception.BusinessLogicException;
import com.server.exception.ExceptionCode;
import com.server.member.service.MemberService;
import com.server.reservation.entity.Reservation;
import com.server.reservation.repository.ReservationRepository;
import com.server.reservationInfo.entity.ReservationInfo;
import com.server.reservationInfo.repository.ReservationInfoRepository;
import com.server.shelter.entity.Shelter;
import com.server.shelter.repository.ShelterRepository;
import com.server.shelter.service.ShelterService;
import lombok.RequiredArgsConstructor;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Sort;
import org.springframework.stereotype.Service;
import java.time.LocalDate;
import java.util.List;
import java.util.Optional;

@Service
@RequiredArgsConstructor
public class ReservationService {

    private final ReservationRepository reservationRepository;
    private final MemberService memberService;
    private final ShelterService shelterService;

    private final ReservationInfoRepository reservationInfoRepository;

    private final ShelterRepository shelterRepository;


    public Reservation createReservation(Reservation reservation){

        Reservation reservedPerson=reservationRepository.findByMemberId(reservation.getMemberId());

//        if(reservedPerson!=null){
//            updateReservation(reservedPerson);  // 기존에 예약한 사람이면 업데이트 메서드로 이동
//        }

        // 회원이 존재하는지 확인
        memberService.findVerifiedMember(reservation.getMemberId()); // 있으면 넘어가고 없으면 예외문구뜸

        // 대피소가 존재하는지 확인
        shelterService.findVerifiedShelter(reservation.getShelterId()); // 있으면 넘어가고 없으면 예외문구뜸

        reservation.setReservationCreated(LocalDate.now());

        // reservationId가 reservationInfo에 넣어져야하니 save가 먼저 진행되어야함
        Reservation savedReservation = reservationRepository.save(reservation);

        updateReservationInfo(reservation); // 생성한 예약에 따른 ReservationInfo 업데이트

        return savedReservation;

    }


//    public Reservation updateReservation(Reservation reservation){
//        // ReservationId 확인
//        Reservation findReservation = findVerifiedReservation(reservation.getReservationId());
//        // 대피소 장소 수정
//        Optional.ofNullable(reservation.getShelter())
//                .ifPresent(shelterId->findReservation.setShelter(shelterId));
//        // 예약 인원 수정
//        Optional.ofNullable(reservation.getNum())
//                .ifPresent(Num->findReservation.setNum(Num));
//        // 예약 시간 수정
//        findReservation.setReservationModified(LocalDate.now());
//
//        updateReservationInfo(reservation); // ReservationInfo 업데이트
//
//        return reservationRepository.save(findReservation);
//    }

    public void updateReservationInfo(Reservation reservation){
        /////////////////////////////////////////////////////////////////////////////////////////////////////
        // 예약을 갱신하는 경우 ReservationInfo 업데이트 (인원 수)

        // 예약에 연관된 대피소 추출
        Shelter shelter=shelterRepository.findByShelterId(reservation.getShelterId());

        // 대피소 이름에 연관된 reservationInfo 가져오기 (대피소와 reservationInfo는 각각 1:1)
        ReservationInfo reservationInfo=reservationInfoRepository.findByshelterName(shelter.getShelterName());  

        // reservationInfo에 저장된 쉘터 아이디에 부합한 예약 정보들 추출 
        List<Reservation> reservations = reservationRepository.findByShelterId(reservation.getShelterId());

        int sum=0;
        for(Reservation reservationList:reservations){
            sum+=reservationList.getNum();  // 하나의 대피소의 예약 인원수 총합
        }
        reservationInfo.setReservedNum(sum);    // 하나의 대피소의 인원수 총합을 reservationInfo 예약된 사람들 인원수로 갱신
        reservationInfoRepository.save(reservationInfo);    // 갱신한 reservationInfo를 저장

    }

    public Reservation findReservation(long reservationId) {
        return findVerifiedReservation(reservationId);
    }

    public Page<Reservation> findReservations(int page, int size){
        return reservationRepository.findAll(PageRequest.of(page,size,
                Sort.by("shelterName").descending()));
    }

    public void deleteReservation(long reservationId){

        Reservation findReservation = findVerifiedReservation(reservationId);
        reservationRepository.delete(findReservation);

    }

    public Reservation findVerifiedReservation(long reservationId){
        List<Reservation> optionalReservation=
                reservationRepository.findByReservationId(reservationId);

        if(optionalReservation.size()==0){
            throw new BusinessLogicException(ExceptionCode.Reservation_NOT_FOUND);
        }

        return optionalReservation.get(0);
    }

}
