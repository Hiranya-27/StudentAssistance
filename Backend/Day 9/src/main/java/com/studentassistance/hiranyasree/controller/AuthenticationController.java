package com.studentassistance.hiranyasree.controller;

import static com.studentassistance.hiranyasree.utils.MyConstant.AUTH;
import static com.studentassistance.hiranyasree.utils.MyConstant.LOGIN;
import static com.studentassistance.hiranyasree.utils.MyConstant.REGISTER;
import static org.springframework.http.HttpStatus.ACCEPTED;
import static org.springframework.http.HttpStatus.EXPECTATION_FAILED;

import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.studentassistance.hiranyasree.dto.request.LoginRequest;
import com.studentassistance.hiranyasree.dto.request.RegisterRequest;
import com.studentassistance.hiranyasree.dto.response.LoginResponse;
import com.studentassistance.hiranyasree.dto.response.RegisterResponse;
import com.studentassistance.hiranyasree.service.AuthenticationService;

import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.PostMapping;


@RestController
@RequestMapping(AUTH)
@RequiredArgsConstructor
public class AuthenticationController {
    private final AuthenticationService authenticationService;
    @PostMapping(REGISTER) 
    public ResponseEntity<RegisterResponse>register(@RequestBody RegisterRequest request)
    {
        RegisterResponse response=new RegisterResponse();
        try{
            response=authenticationService.register(request);
            return new ResponseEntity<>(response,ACCEPTED);
        }catch (Exception e)
        {
            
            response.setMessage("Something went wrong!");
            return new ResponseEntity<>(response,EXPECTATION_FAILED);
        }
    }

    @PostMapping(LOGIN)
    public ResponseEntity<LoginResponse>login(@RequestBody LoginRequest request)
    {
        LoginResponse response=new LoginResponse();
        try{
            response=authenticationService.login(request);
            return new ResponseEntity<>(response,ACCEPTED);
        }catch(Exception e)
        {
            response.setMessage("Something went wrong");
            response.setToken("");
            return  new ResponseEntity<>(response,EXPECTATION_FAILED);
        }
    }
}
