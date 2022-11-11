package com.backend.Member.Repository;

import com.backend.Member.Entity.Member;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.Optional;

public interface MemberRepository extends JpaRepository<Member, Long> {
    Member findByMemberEmail(String memberEmail);

    Member findByMemberEmailAndMemberPassword(String memberEmail, String memberPassword);
}
