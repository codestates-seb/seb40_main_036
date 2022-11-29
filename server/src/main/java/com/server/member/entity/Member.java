package com.server.member.entity;

import com.server.question.entity.Question;
import com.server.reservation.entity.Reservation;
import com.server.stuffAnswer.entity.StuffAnswer;
import com.server.stuffQuestion.entity.StuffQuestion;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import javax.persistence.*;
import java.util.ArrayList;
import java.util.List;

@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
@Entity
public class Member {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column
    private Long memberId;

    @Column(nullable = false)
    private String name;

    @Column(nullable = false)
    private String email;

    @Column(nullable = false)
    private String password;

    @Column(nullable = false)
    private String phone;

    @OneToMany(mappedBy = "member",cascade = CascadeType.PERSIST)
    private List<Question> questions=new ArrayList<>();

    @OneToOne(mappedBy = "member")
    private Reservation reservation;

    @OneToMany(mappedBy = "member",cascade = CascadeType.PERSIST)
    private List<StuffQuestion> stuffQuestions=new ArrayList<>();

    @OneToMany(mappedBy = "member",cascade = CascadeType.PERSIST)
    private List<StuffAnswer> stuffAnswers=new ArrayList<>();

    private String token;

}