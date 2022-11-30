package com.server.stuffQuestion.repository;

import com.server.stuffQuestion.entity.StuffQuestion;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface StuffQuestionRepository extends JpaRepository<StuffQuestion, Long> {

    StuffQuestion findByStuffQuestionId(long stuffQuestionId);
    Page<StuffQuestion> findByStuffQuestionTitleContainingOrderByStuffQuestionIdDesc(PageRequest pageRequest, String word);
    Page<StuffQuestion> findByNameContainingOrderByStuffQuestionIdDesc(PageRequest pageRequest, String word);
    Page<StuffQuestion> findByStuffQuestionContentContainingOrderByStuffQuestionIdDesc(PageRequest pageRequest, String word);
    Page<StuffQuestion> findByLocationTagContainingOrderByStuffQuestionIdDesc(PageRequest pageRequest, String word);

}
