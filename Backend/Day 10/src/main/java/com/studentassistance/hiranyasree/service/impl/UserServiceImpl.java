package com.studentassistance.hiranyasree.service.impl;

import java.util.List;
import java.util.stream.Collectors;

import org.springframework.stereotype.Service;

import com.studentassistance.hiranyasree.dto.response.UserResponse;
import com.studentassistance.hiranyasree.dto.response.basicResponse;
import com.studentassistance.hiranyasree.model.User;
import com.studentassistance.hiranyasree.repository.UserRepository;
import com.studentassistance.hiranyasree.service.UserService;

import lombok.RequiredArgsConstructor;

@Service
@RequiredArgsConstructor
public class UserServiceImpl implements UserService {

    private final UserRepository userRepository;


    @Override
    public basicResponse<UserResponse> getAllUser() {
        List<User>users=userRepository.findAll();
        List<UserResponse>userResponses=users.stream().map(user->UserResponse
        .builder()
        .id(user.getId())
        .name(user.getName())
        .email(user.getEmail())
        .role(user.getRole())
        .Address(user.getAddress())
        .phoneNumber((user.getPhoneNumber() != null) ? user.getPhoneNumber() : Long.valueOf(0))
        .build())
        .collect(Collectors.toList());
        return basicResponse.<UserResponse>builder().message("User data fetched successfully!")
        .data(userResponses)
        .build();
    
    }

}
