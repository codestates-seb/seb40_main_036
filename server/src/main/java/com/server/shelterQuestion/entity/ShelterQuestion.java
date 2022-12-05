package com.server.shelterQuestion.entity;

import com.server.member.entity.Member;
import com.server.shelter.entity.Shelter;
import com.server.shelterAnswer.entity.ShelterAnswer;
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
public class ShelterQuestion {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long shelterQuestionId;

    @Column(nullable = false)
    private Long memberId;

    @Column(nullable = false)
    private String name;

    @Column(nullable = false)
    private String  shelterQuestionTitle;

    @Column(nullable = false)
    private String  shelterQuestionContent;

    @Column(nullable = true)
    private String  locationTag;

    private long views; // 조회수

    private long countAnswer;

    private LocalDate shelterQuestionCreated;

    private LocalDate shelterQuestionModified;

    @ManyToOne
    @JoinColumn(name = "memberId",insertable = false,updatable = false)
    private Member member;

    @OneToMany(mappedBy = "shelterQuestion",cascade = CascadeType.PERSIST)
    private List<ShelterAnswer> shelterAnswers=new ArrayList<>();

}