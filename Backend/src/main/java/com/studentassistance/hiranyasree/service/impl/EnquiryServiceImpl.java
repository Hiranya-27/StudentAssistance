package com.studentassistance.hiranyasree.service.impl;

import java.util.List;
import java.util.Optional;
import java.util.stream.Collectors;

import org.springframework.stereotype.Service;

import com.studentassistance.hiranyasree.dto.request.EnquiryRequest;
import com.studentassistance.hiranyasree.dto.response.EnquiryResponse;
import com.studentassistance.hiranyasree.dto.response.RegisterResponse;
import com.studentassistance.hiranyasree.dto.response.basicResponse;
import com.studentassistance.hiranyasree.model.Course;
import com.studentassistance.hiranyasree.model.Enquiry;
import com.studentassistance.hiranyasree.model.User;
import com.studentassistance.hiranyasree.repository.EnquiryRepository;
import com.studentassistance.hiranyasree.service.EnquiryService;

import lombok.RequiredArgsConstructor;

@Service
@RequiredArgsConstructor

public class EnquiryServiceImpl implements EnquiryService {
    private final EnquiryRepository enquiryRepository;

    @Override
    public basicResponse <EnquiryResponse> getAllEnquiries() {
        List<Enquiry> enquiries = enquiryRepository.findAll();
        List<EnquiryResponse> enquiryRequests = enquiries.stream()
                .map(enquiry -> EnquiryResponse.builder()
                    .courseId(enquiry.getCourse().getCourseId())
                    .userId(enquiry.getUser().getId())
                    .enquiryId(enquiry.getEnquiryId())
                    .email(enquiry.getEmail())
                    .enquiry(enquiry.getEnquiry())
                    .build())
                .collect(Collectors.toList());
        return basicResponse.<EnquiryResponse>builder()
                .message("Enquiries data fetched successfully")
                .data(enquiryRequests)
                .build();
    }

    @Override
    public RegisterResponse addEnquiry(EnquiryRequest enquiryRequest) {
        Enquiry enquiry = Enquiry.builder()
                .user(User.builder().id(enquiryRequest.getUserId()).build()) // Assuming User is imported and has a builder method
                .course(Course.builder().courseId(enquiryRequest.getCourseId()).build()) // Assuming Course is imported and has a builder method
                .email(enquiryRequest.getEmail())
                .enquiry(enquiryRequest.getEnquiry())
                .build();
        enquiryRepository.save(enquiry);
        return RegisterResponse.builder()
                .message("Enquiry added successfully")
                .build();
    }

    @Override
    public RegisterResponse deleteEnquiry(String enquiryId) {
    RegisterResponse response = new RegisterResponse();
    try {
        
        Optional<Enquiry> optionalEnquiry = enquiryRepository.findById(enquiryId);
        if (optionalEnquiry.isPresent()) {
            enquiryRepository.deleteById(enquiryId);
            response.setMessage("Enquiry deleted successfully");
            return response;
        } else {
            response.setMessage("Course not found");
            return response;
        }
        } catch (Exception e) {
        response.setMessage("Something went wrong");
        return response;
        }
    }

    @Override
    public RegisterResponse editEnquiry(String enquiryId, EnquiryRequest enquiryRequest) {
        RegisterResponse response = new RegisterResponse();
        try {
            Optional<Enquiry> optionalEnquiry = enquiryRepository.findById(enquiryId);
            if (optionalEnquiry.isPresent()) {
                Enquiry enquiry = optionalEnquiry.get();
                // Update the enquiry details
                enquiry.setEmail(enquiryRequest.getEmail());
                enquiry.setEnquiry(enquiryRequest.getEnquiry());
                enquiryRepository.save(enquiry);
                response.setMessage("Enquiry edited successfully");
                return response;
            } else {
                response.setMessage("Enquiry not found");
                return response;
            }
        } catch (Exception e) {
            response.setMessage("Something went wrong");
            return response;
        }
    }
}
