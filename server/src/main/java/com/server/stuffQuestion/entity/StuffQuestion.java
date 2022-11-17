package com.server.stuffQuestion.entity;

import lombok.*;

import javax.persistence.*;
import java.time.LocalDateTime;


@Getter
@Setter
@Entity
@AllArgsConstructor
@NoArgsConstructor
@Builder
public class StuffQuestion {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long stuffQuestionId;

    @Column(updatable = false)
    private Long memberId;

    @Column(updatable = false)
    private String  stuffQuestionTitle;

    @Column(updatable = false)
    private String  stuffQuestionContent;

    @Column(updatable = false)
    private String  stuffQuestionTag;

    private LocalDateTime stuffQuestionCreated;

    private LocalDateTime stuffQuestionModifed;

}
