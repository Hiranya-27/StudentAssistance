package com.studentassistance.hiranyasree.service;

import com.studentassistance.hiranyasree.dto.request.PaymentRequest;
import com.studentassistance.hiranyasree.dto.response.PaymentResponse;
import com.studentassistance.hiranyasree.dto.response.RegisterResponse;
import com.studentassistance.hiranyasree.dto.response.basicResponse;

public interface PaymentService {
    public basicResponse<PaymentResponse> getAllPayment();
    public RegisterResponse addPayment(PaymentRequest paymentRequest);

}
