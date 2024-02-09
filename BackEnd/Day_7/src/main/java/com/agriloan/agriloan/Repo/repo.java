package com.agriloan.agriloan.Repo;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.agriloan.agriloan.Entity.SignIn;

@Repository
public interface repo extends JpaRepository<SignIn, Long> {
    // Additional query methods if needed
}