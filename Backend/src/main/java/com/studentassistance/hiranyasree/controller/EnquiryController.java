package com.studentassistance.hiranyasree.controller;

import static com.studentassistance.hiranyasree.utils.MyConstant.ADDENQUIRY;
import static com.studentassistance.hiranyasree.utils.MyConstant.DELETEENQUIRY;
import static com.studentassistance.hiranyasree.utils.MyConstant.ENQUIRYLIST;
import static com.studentassistance.hiranyasree.utils.MyConstant.USER;
import static org.springframework.http.HttpStatus.ACCEPTED;
import static org.springframework.http.HttpStatus.EXPECTATION_FAILED;
import static org.springframework.http.HttpStatus.OK;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
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
     @DeleteMapping(DELETEENQUIRY)
        public ResponseEntity<RegisterResponse> deleteCourse(@PathVariable String enquiryId) {
            RegisterResponse response = enquiryService.deleteEnquiry(enquiryId);
            if (response.getMessage().equals("Enquiry deleted successfully")) {
                return ResponseEntity.status(HttpStatus.ACCEPTED).body(response);
            } else if (response.getMessage().equals("Course not found")) {
                return ResponseEntity.status(HttpStatus.NOT_FOUND).body(response);
            } else {
                return ResponseEntity.status(HttpStatus.EXPECTATION_FAILED).body(response);
            }
        }
    
     @PutMapping("/editenquiry/{enquiryId}")
        public ResponseEntity<RegisterResponse> editEnquiry(@PathVariable String enquiryId, @RequestBody EnquiryRequest enquiryRequest) {
        RegisterResponse response = enquiryService.editEnquiry(enquiryId, enquiryRequest);
        if (response.getMessage().equals("Enquiry edited successfully")) {
            return ResponseEntity.status(HttpStatus.ACCEPTED).body(response);
        } else if (response.getMessage().equals("Enquiry not found")) {
            return ResponseEntity.status(HttpStatus.NOT_FOUND).body(response);
        } else {
            return ResponseEntity.status(HttpStatus.EXPECTATION_FAILED).body(response);
        }
    }
    
    }
