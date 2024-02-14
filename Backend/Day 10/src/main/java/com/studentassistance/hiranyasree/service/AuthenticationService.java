package com.studentassistance.hiranyasree.service;

import com.studentassistance.hiranyasree.dto.request.LoginRequest;
import com.studentassistance.hiranyasree.dto.request.RegisterRequest;
import com.studentassistance.hiranyasree.dto.response.LoginResponse;
import com.studentassistance.hiranyasree.dto.response.RegisterResponse;

public interface AuthenticationService {
    RegisterResponse register(RegisterRequest request);

    LoginResponse login(LoginRequest request);
}
