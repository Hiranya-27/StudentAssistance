package com.studentassistance.hiranyasree.controller;

import static com.studentassistance.hiranyasree.utils.MyConstant.ADDENQUIRY;
import static com.studentassistance.hiranyasree.utils.MyConstant.ENQUIRYLIST;
import static com.studentassistance.hiranyasree.utils.MyConstant.USER;
import static org.springframework.http.HttpStatus.ACCEPTED;
import static org.springframework.http.HttpStatus.EXPECTATION_FAILED;
import static org.springframework.http.HttpStatus.OK;

import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.studentassistance.hiranyasree.dto.request.EnquiryRequest;
import com.studentassistance.hiranyasree.dto.response.EnquiryResponse;
import com.studentassistance.hiranyasree.dto.response.RegisterResponse;
import com.studentassistance.hiranyasree.dto.response.basicResponse;
import com.studentassistance.hiranyasree.service.EnquiryService;

import lombok.RequiredArgsConstructor;

@RestController
@RequestMapping(USER)
@RequiredArgsConstructor

public class EnquiryController {
    private final EnquiryService enquiryService;

     @PostMapping(ADDENQUIRY)
         public ResponseEntity<RegisterResponse> addentity(@RequestBody EnquiryRequest enquiry){
        RegisterResponse response = new RegisterResponse();
        try {
            response = enquiryService.addEnquiry(enquiry);
            return new ResponseEntity<>(response,ACCEPTED);

            
        } catch (Exception e) {
            response.setMessage("Something went wrong.");
            return new ResponseEntity<>(response, EXPECTATION_FAILED);
        }
    }

    @GetMapping(ENQUIRYLIST)
        public ResponseEntity<basicResponse<EnquiryResponse>> create() {
            basicResponse<EnquiryResponse> response = new basicResponse<>();
            try {
                response = enquiryService.getAllEnquiries();
                return new ResponseEntity<>(response, OK);
            } catch (Exception e) {
                response.setMessage("Enquiry :(  !!");
                return new ResponseEntity<>(response, EXPECTATION_FAILED);
            }
        }
    }
