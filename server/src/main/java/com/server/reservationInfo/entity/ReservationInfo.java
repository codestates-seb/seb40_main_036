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

    @ManyToOne
    @JoinColumn(name = "shelterId")
    private Shelter shelter;

    @ManyToOne
    @JoinColumn(name = "reservationId")
    private Reservation reservation;

    //private long reservationInfo;   // 해당 대피소 예약번호?

    private String shelterName;

    //private String location;

    private String geolocation;

    private int capacity;

    private int num;    // 예약 인원수
}
