package com.server.member.entity;

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
public class Phone {
    @Id
    private long id;

    @Column(nullable = false)
    private String phone;

    @OneToMany(mappedBy = "phone",cascade = CascadeType.PERSIST)
    private List<Member> members=new ArrayList<>();
}
