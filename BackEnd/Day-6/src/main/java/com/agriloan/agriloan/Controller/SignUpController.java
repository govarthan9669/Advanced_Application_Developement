package com.agriloan.agriloan.Controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Bean;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.agriloan.agriloan.Entity.SignIn;
import com.agriloan.agriloan.Entity.UserInfo;
import com.agriloan.agriloan.Repo.UserInfoRepository;
import com.agriloan.agriloan.Service.JwtService;
import com.agriloan.agriloan.Service.SignInService;
import com.agriloan.agriloan.dto.AuthRequest;
import com.agriloan.agriloan.dto.AuthResponse;

@RestController
public class SignUpController {
    private final SignInService userService;

    @Autowired
    private UserInfoRepository userRepo;

    @Autowired
    private JwtService jwtService;

    // @Bean
    public PasswordEncoder passwordEncoder() {
        return new BCryptPasswordEncoder();
    }

    @Autowired
    public SignUpController(SignInService userService) {
        this.userService = userService;
    }

    @PostMapping("/register")
    public String addUser(@RequestBody UserInfo userInfo) 
    {
        userInfo.setPassword(passwordEncoder().encode(userInfo.getPassword()));
        userRepo.save(userInfo);
        return "user added to system ";
    }

    @PostMapping("/authenticate")
    public AuthResponse authenticate(@RequestBody AuthRequest authRequest) {
        AuthResponse res = jwtService.createJwtToken(authRequest);
        System.out.println(authRequest.getUsername() + " " + authRequest.getPassword() + "=> ");
        return jwtService.createJwtToken(authRequest);
    }

    @GetMapping("/all")
    public List<SignIn> getAllUsers() {
        return userService.getAllUsers();
    }

    public SignInService getUserService() {
        return userService;
    }

    // Additional controller methods if needed
}