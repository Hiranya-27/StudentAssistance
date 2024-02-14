package com.studentassistance.hiranyasree.dto.response;

import com.studentassistance.hiranyasree.enumerated.Role;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@Builder
@NoArgsConstructor
@AllArgsConstructor
public class UserResponse {
    private String id;
    private String name;
    private String email;
    private Role role;
    private Long phoneNumber;
    private String Address;
}
