package com.server.stuffQuestion.entity;

import com.server.member.entity.Member;
import com.server.shelter.entity.Shelter;
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

    @Column(nullable = false)
    private Long memberId;

    @Column(nullable = false)
    private String name;

    @Column(nullable = false)
    private String  stuffQuestionTitle;

    @Column(nullable = false)
    private String  stuffQuestionContent;

    @Column(nullable = true)
    private String  locationTag;

    private long views; // 조회수

    private long countAnswer; // 답변 개수

    private LocalDate stuffQuestionCreated;

    private LocalDate stuffQuestionModified;

    @ManyToOne
    @JoinColumn(name = "memberId",insertable = false,updatable = false)
    private Member member;

    @OneToMany(mappedBy = "stuffQuestion",cascade = CascadeType.PERSIST)
    private List<StuffAnswer> stuffAnswers=new ArrayList<>();

}
