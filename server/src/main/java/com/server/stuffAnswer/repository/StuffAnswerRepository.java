package com.server.stuffAnswer.repository;

import com.server.stuffAnswer.entity.StuffAnswer;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface StuffAnswerRepository extends JpaRepository<StuffAnswer, Long> {

    List<StuffAnswer> findByStuffQuestionId (long stuffQuestionId);
}
