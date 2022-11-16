package com.server.shelter.entity;

import com.server.reservation.entity.Reservation;
import com.server.reservationInfo.entity.ReservationInfo;
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
    private String name;

    @Column (nullable = false)
    private String address;

    @Column (nullable = false)
    private int capacity;

    @OneToOne(mappedBy = "shelter")
    private Reservation reservation;

    @OneToMany(mappedBy = "shelter")
    private List<ReservationInfo> reservationInfos = new ArrayList<>();

}
