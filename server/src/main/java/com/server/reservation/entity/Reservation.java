package com.server.reservation.entity;

import com.server.member.entity.Member;
import com.server.reservationInfo.entity.ReservationInfo;
import com.server.shelter.entity.Shelter;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import org.springframework.data.annotation.CreatedDate;
import org.springframework.data.annotation.LastModifiedDate;

import javax.persistence.*;
import java.time.LocalDateTime;
import java.util.ArrayList;
import java.util.List;


@Entity
@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
public class Reservation {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long reservationId;

    @OneToOne
    @JoinColumn(name = "memberId")
    private Member member;

    @OneToOne
    @JoinColumn(name = "shelterId")
    private Shelter shelter;

    @Column(nullable = false)
    private int num;

    private LocalDateTime createdAt;

    private LocalDateTime modifiedAt;

    @OneToMany(mappedBy = "reservation")
    private List<ReservationInfo> reservationInfos = new ArrayList<>();
}
