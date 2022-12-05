package com.server.shelter.service;

import com.server.exception.BusinessLogicException;
import com.server.exception.ExceptionCode;
import com.server.reservationInfo.entity.ReservationInfo;
import com.server.reservationInfo.repository.ReservationInfoRepository;
import com.server.shelter.entity.Shelter;
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
public class ShelterService {

    private final ShelterRepository shelterRepository;

    private final ReservationInfoRepository reservationInfoRepository;

    @Transactional
    public List<Shelter> createShelter(List<Shelter> shelters){ // 쉘터 목록을 JSON으로 저장

        for(Shelter shelter:shelters) { // 각 대피소마다 reservationInfo를 생성
            ReservationInfo reservationInfo = new ReservationInfo();    // 새 reservationInfo생성

            reservationInfo.setShelterName(shelter.getShelterName());   // reservationInfo와 연결된 대피소 이름 기입
            reservationInfo.setGeolocation(shelter.getGeolocation());   // reservationInfo에 대피소 장소 기입
            reservationInfo.setCapacity(shelter.getCapacity()); // reservationInfo에 대피소에 들어갈 수 있는 총원 기입
            reservationInfo.setReservedNum(0);  // reservationInfo에 처음 예약하 사람은 0명으로 초기화

            reservationInfoRepository.save(reservationInfo);    // 생성한 reservationInfo 저장

        }

        return shelterRepository.saveAll(shelters); // 대피소마다 reservationInfo생성 후 대피소 저장
    }

    public Shelter updateShelter(Shelter shelter){
        // shelterId 확인
        Shelter findShelter = findVerifiedShelter(shelter.getShelterId());
        // shelterName 수정
        Optional.ofNullable(shelter.getShelterName())
                .ifPresent(shelterName->findShelter.setShelterName(shelterName));
        // uuid 대피소 고유 번호 수정
        // geolocation 수정
        Optional.ofNullable(shelter.getGeolocation())
                .ifPresent(geolocation ->findShelter.setGeolocation(geolocation));
        // updatedate 수정
        Optional.ofNullable(shelter.getX())
                .ifPresent(updatedate ->findShelter.setX(updatedate));

        Optional.ofNullable(shelter.getY())
                .ifPresent(updatedate ->findShelter.setY(updatedate));
        // 수용 가능 인원 수정
        Optional.ofNullable(shelter.getCapacity())
                .ifPresent(Capacity->findShelter.setCapacity(Capacity));
        return shelterRepository.save(findShelter);
    }

    public Shelter findVerifiedShelter(long shelterId){
        Optional<Shelter> optionalShelter=
                shelterRepository.findById(shelterId);
        Shelter findShelter =
                optionalShelter.orElseThrow(()->
                        new BusinessLogicException(ExceptionCode.Shelter_NOT_FOUND));
        return findShelter;
    }

    public Shelter findShelter(long shelterId){
        return findVerifiedShelter(shelterId);
    }

    public Page<Shelter> findShelters(int page, int size){
        return shelterRepository.findAll(PageRequest.of(page,size,
                Sort.by("shelterId").descending()));
    }

    @Transactional
    public void deleteShelter(long shelterId){

        Shelter findShelter = findVerifiedShelter(shelterId);
        ReservationInfo reservationInfo = reservationInfoRepository.findByshelterName(findShelter.getShelterName());
        reservationInfoRepository.delete(reservationInfo);
        shelterRepository.delete(findShelter);

    }

    public List<Shelter> searchShelter (String location){
        return  shelterRepository.findByGeolocationContaining(location);
    }

}
