package com.server.shelterQuestion.repository;

import com.server.shelterQuestion.entity.ShelterQuestion;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface ShelterQuestionRepository extends JpaRepository<ShelterQuestion, Long> {

    ShelterQuestion findByShelterQuestionId(long shelterQuestionId);
    List<ShelterQuestion> findByShelterQuestionTitleContainingOrderByShelterQuestionIdDesc(String word);

    List<ShelterQuestion> findByNameContainingOrderByShelterQuestionIdDesc(String word);

    List<ShelterQuestion> findByShelterQuestionContentContainingOrderByShelterQuestionIdDesc(String word);
    List<ShelterQuestion> findByLocationTagContainingOrderByShelterQuestionIdDesc(String word);

}
