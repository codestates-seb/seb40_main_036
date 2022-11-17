package com.server.question.entity;

import com.server.answer.entity.Answer;
import com.server.member.entity.Member;
import lombok.*;

import javax.persistence.*;
import java.time.LocalDateTime;
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

    @Column(updatable = false)
    private Long memberId;

    @Column(updatable = false)
    private String name;

    @Column(updatable = false)
    private String questionTitle;

    @Column(updatable = false)
    private String questionContent;

    @Column(updatable = false)
    private String questionTag;

    private LocalDateTime questionCreated;

    private LocalDateTime questionModified;

    //////////////////////////////////////////////

    @OneToMany(mappedBy = "question", cascade = CascadeType.PERSIST)
    private List<Answer> answers=new ArrayList<>();

    @ManyToOne
    @JoinColumn(name = "name",insertable = false,updatable = false)
    private Member member;


}
