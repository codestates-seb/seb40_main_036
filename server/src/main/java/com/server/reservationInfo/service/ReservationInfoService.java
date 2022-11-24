package com.server.reservationInfo.service;

import com.server.exception.BusinessLogicException;
import com.server.exception.ExceptionCode;
import com.server.question.entity.Question;
import com.server.reservation.entity.Reservation;
import com.server.reservation.repository.ReservationRepository;
import com.server.reservationInfo.entity.ReservationInfo;
import com.server.reservationInfo.repository.ReservationInfoRepository;
import com.server.shelter.repository.ShelterRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Sort;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;
import java.util.Optional;

@Service
@RequiredArgsConstructor
public class ReservationInfoService {

    private final ReservationInfoRepository reservationInfoRepository;

    private final ReservationRepository reservationRepository;


    public ReservationInfo findReservationInfo(long reservationInfoId) {
        return findVerifiedReservationInfo(reservationInfoId);
    }

    public Page<ReservationInfo> findReservationInfos(int page, int size){
        return reservationInfoRepository.findAll(PageRequest.of(page,size,
                Sort.by("reservationInfoId").ascending()));
    }


    public ReservationInfo findVerifiedReservationInfo(long reservationInfoId){
        Optional<ReservationInfo> optionalReservationInfo=
                reservationInfoRepository.findById(reservationInfoId);
        ReservationInfo findReservationInfo =
                optionalReservationInfo.orElseThrow(()->
                        new BusinessLogicException(ExceptionCode.ReservationInfo_NOT_FOUND));
        return findReservationInfo;
    }

}
