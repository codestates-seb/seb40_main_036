package com.server.question.repository;

import com.server.question.entity.Question;
import org.springframework.data.domain.Sort;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface QuestionRepository extends JpaRepository<Question, Long> {

    Question findByQuestionId(long questionId);
    List<Question> findByQuestionTitleContainingOrderByQuestionIdDesc(String word);

    List<Question> findByNameContainingOrderByQuestionIdDesc(String word);

    List<Question> findByQuestionContentContainingOrderByQuestionIdDesc(String word);
    List<Question> findByLocationTagContainingOrderByQuestionIdDesc(String word);

}
