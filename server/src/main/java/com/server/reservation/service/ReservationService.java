package com.server.reservation.service;

import com.server.exception.BusinessLogicException;
import com.server.exception.ExceptionCode;
import com.server.member.service.MemberService;
import com.server.reservation.entity.Reservation;
import com.server.reservation.repository.ReservationRepository;
import com.server.shelter.service.ShelterService;
import lombok.RequiredArgsConstructor;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Sort;
import org.springframework.stereotype.Service;

import java.time.LocalDateTime;
import java.util.Optional;

@Service
@RequiredArgsConstructor
public class ReservationService {

    private final ReservationRepository reservationRepository;
    private final MemberService memberService;
    private final ShelterService shelterService;


    public Reservation createReservation(Reservation reservation){
        // 회원이 존재하는지 확인
        memberService.findVerifiedMember(reservation.getMember().getMemberId()); // 있으면 넘어가고 없으면 예외문구뜸

        // 대피소가 존재하는지 확인
        shelterService.findVerifiedShelter(reservation.getShelter().getShelterId()); // 있으면 넘어가고 없으면 예외문구뜸

        Reservation savedReservation = saveReservation(reservation);
        return reservationRepository.save(savedReservation);

    }

    private Reservation saveReservation(Reservation reservation){
        return reservationRepository.save(reservation);
    }

    public Reservation updateReservation(Reservation reservation){
        // ReservationId 확인
        Reservation findReservation = findVerifiedReservation(reservation.getReservationId());
        // 대피소 장소 수정
        Optional.ofNullable(reservation.getShelter())
                .ifPresent(shelterId->findReservation.setShelter(shelterId));
        // 예약 인원 수정
        Optional.ofNullable(reservation.getNum())
                .ifPresent(Num->findReservation.setNum(Num));
        // 예약 시간 수정
        findReservation.setModifiedAt(LocalDateTime.now());
        return reservationRepository.save(findReservation);
    }

    public Reservation findReservation(long reservationId) {
        return findVerifiedReservation(reservationId);
    }

    public Page<Reservation> findReservations(int page, int size){
        return reservationRepository.findAll(PageRequest.of(page,size,
                Sort.by("reservationId").descending()));
    }

    public void deleteReservation(long reservationId){

        Reservation findReservation = findVerifiedReservation(reservationId);
        reservationRepository.delete(findReservation);

    }

    public Reservation findVerifiedReservation(long reservationId){
        Optional<Reservation> optionalReservation=
                reservationRepository.findById(reservationId);
        Reservation findReservation =
                optionalReservation.orElseThrow(()->
                        new BusinessLogicException(ExceptionCode.Reservation_NOT_FOUND));
        return findReservation;
    }

}
