package com.server.stuffAnswer.entity;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import javax.persistence.*;
import java.time.LocalDateTime;
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
    private String stuffAnswerContent;

    private LocalDateTime stuffAnswerCreatedAt;

    private LocalDateTime stuffAnswerModifiedAt;
}
