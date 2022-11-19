package com.server.question.entity;

import com.server.answer.entity.Answer;
import com.server.member.entity.Member;
import com.server.shelter.entity.Shelter;
import lombok.*;
import javax.persistence.*;
import java.time.LocalDate;
import java.util.ArrayList;
import java.util.List;


@AllArgsConstructor
@NoArgsConstructor
@Getter
@Setter
@Entity
public class Question {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long questionId;

    @Column(nullable = false)
    private Long memberId;

    @Column(nullable = false)
    private String name;

    @Column(nullable = false)
    private String questionTitle;

    @Column(nullable = false)
    private String questionContent;

    @Column(nullable = true)
    private String locationTag;

    private long views; // 조회수

    private LocalDate questionCreated;

    private LocalDate questionModified;

    @OneToMany(mappedBy = "question", cascade = CascadeType.PERSIST)
    private List<Answer> answers=new ArrayList<>();

    @ManyToOne
    @JoinColumn(name = "memberId",insertable = false,updatable = false)
    private Member member;

    @ManyToOne
    @JoinColumn(name = "shelterId", insertable = false, updatable = false)
    private Shelter shelter;


}