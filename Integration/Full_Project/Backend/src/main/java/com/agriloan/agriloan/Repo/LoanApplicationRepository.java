package com.agriloan.agriloan.Repo;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import com.agriloan.agriloan.Entity.LoanApplication;

@Repository
public interface LoanApplicationRepository extends JpaRepository<LoanApplication, Long> {
    
    @Query("SELECT u FROM LoanApplication u WHERE u.email = ?1")
    LoanApplication getUserByEmail(String email);
}
