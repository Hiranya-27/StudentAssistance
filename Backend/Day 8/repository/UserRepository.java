package com.studentassistance.hiranyasree.repository;

import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;

import com.studentassistance.hiranyasree.model.User;

public interface UserRepository extends JpaRepository<User,String>{
    Optional<User> findByEmail(String email);

}
