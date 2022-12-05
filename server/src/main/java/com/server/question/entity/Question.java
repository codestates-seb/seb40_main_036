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
    private String questionTitle;

    @Column(nullable = false)
    private String questionContent;

    @Column(nullable = true)
    private String locationTag;

    private String fileName; // 저장할 파일

    private String filePath; // 파일 경로

    private String name; // 작성자

    private long views; // 조회수

    private long countAnswer; // 답변 개수

    private LocalDate questionCreated;

    private LocalDate questionModified;

    @OneToMany(mappedBy = "question", cascade = CascadeType.PERSIST)
    private List<Answer> answers=new ArrayList<>();

    @ManyToOne
    @JoinColumn(name = "memberId",insertable = false,updatable = false)
    private Member member; // member에 접근하여 name(작성자)을 가져올 수 있어야함

    @ManyToOne
    @JoinColumn(name = "shelterId", insertable = false, updatable = false)
    private Shelter shelter;

}
