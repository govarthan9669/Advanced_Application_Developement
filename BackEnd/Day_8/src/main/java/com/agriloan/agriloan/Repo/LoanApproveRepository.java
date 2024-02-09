package com.agriloan.agriloan.Repo;

import org.springframework.data.jpa.repository.JpaRepository;

import com.agriloan.agriloan.Entity.LoanApprove;

public interface LoanApproveRepository extends JpaRepository<LoanApprove, Long> {
    // Additional query methods can be added if needed
}
