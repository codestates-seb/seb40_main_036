package com.server.answer.entity;

import com.server.member.entity.Member;
import com.server.question.entity.Question;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import javax.persistence.*;
import java.time.LocalDate;

@Entity
@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
public class Answer {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long answerId;

    @Column(nullable = false)
    private Long questionId;

    @Column(nullable = false)
    private Long memberId;

    private String name;

    @Column(nullable = false)
    private String answerContent;

    private LocalDate answerCreated;

    private LocalDate answerModified;

    @ManyToOne
    @JoinColumn(name = "questionId",insertable = false,updatable = false)
    private Question question;

    @ManyToOne
    @JoinColumn(name = "memberId",insertable = false,updatable = false)
    private Member member; // member에 접근하여 name(작성자)을 가져올 수 있어야함

}