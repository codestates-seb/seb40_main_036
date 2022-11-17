package com.server.stuffQuestion.repository;

import com.server.stuffQuestion.entity.StuffQuestion;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface StuffQuestionRepository extends JpaRepository<StuffQuestion, Long> {

    List<StuffQuestion> findByStuffQuestionContentContaining(String word);
}
