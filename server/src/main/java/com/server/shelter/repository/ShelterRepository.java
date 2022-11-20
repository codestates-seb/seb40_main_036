package com.server.shelter.repository;

import com.server.shelter.entity.Shelter;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;
@Repository
public interface ShelterRepository extends JpaRepository<Shelter,Long> {
    List<Shelter> findByGeolocationContaining (String location);

}
