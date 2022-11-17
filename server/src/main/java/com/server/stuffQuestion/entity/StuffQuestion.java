package com.server.stuffQuestion.entity;

import com.server.member.entity.Member;
import com.server.stuffAnswer.entity.StuffAnswer;
import lombok.*;
import javax.persistence.*;
import java.time.LocalDate;
import java.util.ArrayList;
import java.util.List;


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

    // private long views; // 조회수

    private LocalDate stuffQuestionCreated;

    private LocalDate stuffQuestionModified;

    @ManyToOne
    @JoinColumn(name = "memberId",insertable = false,updatable = false)
    private Member member;

    @OneToMany(mappedBy = "stuffQuestion",cascade = CascadeType.PERSIST)
    private List<StuffAnswer> stuffAnswers=new ArrayList<>();

}
