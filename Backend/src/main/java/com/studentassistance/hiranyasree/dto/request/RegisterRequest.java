package com.studentassistance.hiranyasree.dto.request;

import com.studentassistance.hiranyasree.enumerated.Role;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@Builder
@AllArgsConstructor
@NoArgsConstructor
public class RegisterRequest {
        private String name;
        private String email;
        private String password;
        private Role role;
        private Long phoneNumber;
        private String Address;
}
