package com.server.member.entity;

import com.server.question.entity.Question;
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
public class Email {
    @Id
    private long id;

    @Column(nullable = false)
    private String email;

    @OneToMany(mappedBy = "email",cascade = CascadeType.PERSIST)
    private List<Member> members=new ArrayList<>();
}
