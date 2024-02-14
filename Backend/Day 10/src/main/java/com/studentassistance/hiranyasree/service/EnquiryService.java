package com.studentassistance.hiranyasree.service;

import com.studentassistance.hiranyasree.dto.request.EnquiryRequest;
import com.studentassistance.hiranyasree.dto.response.EnquiryResponse;
import com.studentassistance.hiranyasree.dto.response.RegisterResponse;
import com.studentassistance.hiranyasree.dto.response.basicResponse;

public interface EnquiryService {
    public basicResponse <EnquiryResponse> getAllEnquiries();
     public RegisterResponse addEnquiry(EnquiryRequest enquiryRequest);

}
