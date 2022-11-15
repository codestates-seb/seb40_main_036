package com.server.question.entity;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import javax.persistence.*;
import java.time.LocalDateTime;

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
    private String questionTitle;

    @Column(updatable = false)
    private String questionContent;

    @Column(updatable = false)
    private String questionTag;

    private LocalDateTime questionCreated;

    private LocalDateTime questionModifed;

}
