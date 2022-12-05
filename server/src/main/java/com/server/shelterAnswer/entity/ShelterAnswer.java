package com.server.shelterAnswer.entity;

import com.server.member.entity.Member;
import com.server.shelterQuestion.entity.ShelterQuestion;
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
public class ShelterAnswer {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long shelterAnswerId;

    @Column(nullable = false)
    private Long shelterQuestionId;

    @Column(nullable = false)
    private Long memberId;

    @Column(nullable = false)
    private String name;

    @Column(nullable = false)
    private String shelterAnswerContent;

    private LocalDate shelterAnswerCreated;

    private LocalDate shelterAnswerModified;

    @ManyToOne
    @JoinColumn(name = "memberId",insertable = false,updatable = false)
    private Member member;

    @ManyToOne
    @JoinColumn(name = "shelterQuestionId",insertable = false,updatable = false)
    private ShelterQuestion shelterQuestion;
}
