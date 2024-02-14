package com.studentassistance.hiranyasree.service;

import com.studentassistance.hiranyasree.dto.response.UserResponse;
import com.studentassistance.hiranyasree.dto.response.basicResponse;

public interface UserService {
    basicResponse<UserResponse>getAllUser();
    public basicResponse<String> deleteUser(String userId);
}
