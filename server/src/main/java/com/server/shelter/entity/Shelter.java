package com.server.shelter.entity;

import com.server.question.entity.Question;
import com.server.reservation.entity.Reservation;
import com.server.reservationInfo.entity.ReservationInfo;
import com.server.stuffQuestion.entity.StuffQuestion;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import javax.persistence.*;
import java.util.ArrayList;
import java.util.List;

@Entity
@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
public class Shelter {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long shelterId;

    @Column (nullable = false)
    private String location; // 군

    @Column (nullable = false)
    private String shelterName; // 대피소 이름

    @Column (nullable = false)
    private int uuid; // 대피소 고유 번호

    @Column (nullable = false)
    private String geolocation; // 대피소 주소

    @Column (nullable = false)
    private String updatedate; // 대피소 정보 수정 날짜

    @Column (nullable = false)
    private int capacity; // 대피소 수용가능 인원

    @OneToOne(mappedBy = "shelter")
    private Reservation reservation;

    @OneToMany(mappedBy = "shelter")
    private List<ReservationInfo> reservationInfos = new ArrayList<>();

    @OneToMany(mappedBy = "shelter")
    private List<Question> questions = new ArrayList<>();

    @OneToMany(mappedBy = "shelter")
    private List<StuffQuestion> stuffQuestions = new ArrayList<>();

}
