package com.server.shelter.service;

import com.server.exception.BusinessLogicException;
import com.server.exception.ExceptionCode;
import com.server.member.entity.Member;
import com.server.shelter.entity.Shelter;
import com.server.shelter.repository.ShelterRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Sort;
import org.springframework.stereotype.Service;

import javax.persistence.Column;
import java.util.List;
import java.util.Optional;

@Service
@RequiredArgsConstructor
public class ShelterService {

    private final ShelterRepository shelterRepository;

    public Shelter createShelter(Shelter shelter){
        Shelter savedShelter = shelterRepository.save(shelter);
        return savedShelter;
    }

    public Shelter updateShelter(Shelter shelter){
        // shelterId 확인
        Shelter findShelter = findVerifiedShelter(shelter.getShelterId());
        // location 수정
        Optional.ofNullable(shelter.getLocation())
                .ifPresent(location ->findShelter.setLocation(location));
        // shelterName 수정
        Optional.ofNullable(shelter.getShelterName())
                .ifPresent(shelterName->findShelter.setShelterName(shelterName));
        // uuid 대피소 고유 번호 수정
        Optional.ofNullable(shelter.getUuid())
                .ifPresent(uuid->findShelter.setUuid(uuid));
        // geolocation 수정
        Optional.ofNullable(shelter.getGeolocation())
                .ifPresent(geolocation ->findShelter.setGeolocation(geolocation));
        // updatedate 수정
        Optional.ofNullable(shelter.getUpdatedate())
                .ifPresent(updatedate ->findShelter.setUpdatedate(updatedate));
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

    public void deleteShelter(long shelterId){

        Shelter findShelter = findVerifiedShelter(shelterId);
        shelterRepository.delete(findShelter);

    }

    public List<Shelter> searchShelter (String location){
        return  shelterRepository.findByGeolocationContaining(location);
    }

}
