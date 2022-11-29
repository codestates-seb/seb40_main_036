package com.server.reservation.entity;

import com.server.member.entity.Member;
import com.server.reservationInfo.entity.ReservationInfo;
import com.server.shelter.entity.Shelter;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import javax.persistence.*;
import java.time.LocalDate;


@Entity
@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
public class Reservation {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long reservationId;

    @Column(nullable = false)
    private Long memberId;

    @Column(nullable = false)
    private Long shelterId;

    @Column(nullable = false)
    private int num;

    private LocalDate reservationCreated;

//    private LocalDate reservationModified;

    @OneToOne
    @JoinColumn(name = "memberId",insertable = false,updatable = false)
    private Member member;

    @ManyToOne
    @JoinColumn(name = "shelterId",insertable = false,updatable = false)
    private Shelter shelter;

    @ManyToOne
    @JoinColumn(name = "reservationInfoId",insertable = false,updatable = false)
    private ReservationInfo reservationInfo;
}
