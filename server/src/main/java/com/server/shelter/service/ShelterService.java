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
        // ShelterId 확인
        Shelter findShelter = findVerifiedShelter(shelter.getId());
        // ShelterAddress 수정
        Optional.ofNullable(shelter.getAddress())
                .ifPresent(Address->findShelter.setAddress(Address));
        // ShelterBody 수정
        Optional.ofNullable(shelter.getName())
                .ifPresent(Name ->findShelter.setName(Name));
        // 수정 날짜 및 시간 수정
        Optional.ofNullable(shelter.getNum())
                .ifPresent(Num->findShelter.setNum(Num));
        return shelterRepository.save(findShelter);
    }

    public Shelter findVerifiedShelter(long Id){
        Optional<Shelter> optionalShelter=
                shelterRepository.findById(Id);
        Shelter findShelter =
                optionalShelter.orElseThrow(()->
                        new BusinessLogicException(ExceptionCode.Shelter_NOT_FOUND));
        return findShelter;
    }

    public Shelter findShelter(long Id){
        return findVerifiedShelter(Id);
    }

    public Page<Shelter> findShelters(int page, int size){
        return shelterRepository.findAll(PageRequest.of(page,size,
                Sort.by("Id").descending()));
    }

    public void deleteShelter(long Id){

        Shelter findShelter = findVerifiedShelter(Id);
        shelterRepository.delete(findShelter);

    }
}
