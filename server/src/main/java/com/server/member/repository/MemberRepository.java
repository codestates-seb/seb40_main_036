package com.server.member.repository;

import com.server.member.entity.Member;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.Optional;

public interface MemberRepository extends JpaRepository<Member, Long> {
    Member findByEmail(String email);
    Member findByPhone(String phone);

    Member findByEmailAndPassword(String email, String password);

    Member findByMemberId(long memberId);
}