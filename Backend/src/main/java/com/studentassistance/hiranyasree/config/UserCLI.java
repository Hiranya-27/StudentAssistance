package com.studentassistance.hiranyasree.config;

import org.springframework.boot.CommandLineRunner;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Component;

import com.studentassistance.hiranyasree.enumerated.Role;
import com.studentassistance.hiranyasree.model.User;
import com.studentassistance.hiranyasree.repository.UserRepository;

import lombok.RequiredArgsConstructor;

@Component
@RequiredArgsConstructor
public class UserCLI implements CommandLineRunner{

    private final UserRepository userRepository;
    private final PasswordEncoder passwordEncoder; 

    @Override
    public void run(String... args) throws Exception {
         if(userRepository.count()>0){
             return;
         }
         var user = User.builder()
         .name("Admin")
         .email("hiran@gmail.com")
         .password(passwordEncoder.encode("Admin@123"))
         .role(Role.ADMIN)
         .build();
         userRepository.save(user);
    } 
         
}
