package com.server.shelterAnswer.repository;

import com.server.shelterAnswer.entity.ShelterAnswer;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface ShelterAnswerRepository extends JpaRepository<ShelterAnswer, Long> {

    List<ShelterAnswer> findByShelterQuestionId (long shelterQuestionId);
}
