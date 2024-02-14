package com.studentassistance.hiranyasree.controller;

import static com.studentassistance.hiranyasree.utils.MyConstant.USER;
import static com.studentassistance.hiranyasree.utils.MyConstant.USERLIST;
import static org.springframework.http.HttpStatus.EXPECTATION_FAILED;
import static org.springframework.http.HttpStatus.OK;

import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.studentassistance.hiranyasree.dto.response.UserResponse;
import com.studentassistance.hiranyasree.dto.response.basicResponse;
import com.studentassistance.hiranyasree.service.UserService;

import lombok.RequiredArgsConstructor;

@RestController
@RequestMapping(USER)
@RequiredArgsConstructor
public class UserController {
    private final UserService userService;
    @GetMapping(USERLIST)
        public ResponseEntity<basicResponse<UserResponse>> create() {
            basicResponse<UserResponse> response =new basicResponse<>();
            try {
                response = userService.getAllUser();
                return new ResponseEntity<>(response, OK);
            } catch (Exception e) {
                response.setMessage("Something went worng!!");
                return new ResponseEntity<>(response, EXPECTATION_FAILED);
            }
        }
}
