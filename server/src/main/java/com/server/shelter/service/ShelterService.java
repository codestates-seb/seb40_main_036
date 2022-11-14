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
        // address 수정
        Optional.ofNullable(shelter.getAddress())
                .ifPresent(Address->findShelter.setAddress(Address));
        // name 수정
        Optional.ofNullable(shelter.getName())
                .ifPresent(Name ->findShelter.setName(Name));
        // 수용 가능 인원 수정
        Optional.ofNullable(shelter.getNum())
                .ifPresent(Num->findShelter.setNum(Num));
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
}
