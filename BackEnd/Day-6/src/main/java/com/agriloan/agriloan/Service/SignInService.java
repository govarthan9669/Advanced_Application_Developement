package com.agriloan.agriloan.Service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.agriloan.agriloan.Entity.SignIn;
import com.agriloan.agriloan.Repo.repo;

@Service
public class SignInService {
    private final repo userRepository;

    @Autowired
    public SignInService(repo userRepository) {
        this.userRepository = userRepository;
    }

    public SignIn signUpUser(SignIn user) {
        // Additional validation logic if needed
        return userRepository.save(user);
    }

    public List<SignIn> getAllUsers() {
        return userRepository.findAll();
    }





}
