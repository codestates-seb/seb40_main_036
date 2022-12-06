package com.server.stuffAnswer.entity;

import com.server.member.entity.Member;
import com.server.stuffQuestion.entity.StuffQuestion;
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
public class StuffAnswer {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long stuffAnswerId;

    @Column(nullable = false)
    private Long stuffQuestionId;

    @Column(nullable = false)
    private Long memberId;

    @Column(nullable = false)
    private String name;

    @Column(nullable = false)
    private String stuffAnswerContent;

    private LocalDate stuffAnswerCreated;

    private LocalDate stuffAnswerModified;

    @ManyToOne
    @JoinColumn(name = "memberId",insertable = false,updatable = false)
    private Member member;

    @ManyToOne
    @JoinColumn(name = "stuffQuestionId",insertable = false,updatable = false)
    private StuffQuestion stuffQuestion;
}
