package com.server.reservationInfo.entity;

import com.server.reservation.entity.Reservation;
import com.server.shelter.entity.Shelter;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import javax.persistence.*;

@Entity
@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
public class ReservationInfo {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private long reservationInfoId; // 전체 대피소 예약번호

    @OneToOne
    @JoinColumn(name = "shelterId",insertable = false,updatable = false)
    private Shelter shelter;

    @OneToMany(mappedBy = "reservationInfo")
    private Reservation reservation;

    private String shelterName;

    private String geolocation;

    private int capacity;   // 수용 가능인원

    private int reservedNum;    // 현재 예약된 인원수
}
