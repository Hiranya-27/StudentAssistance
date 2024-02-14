package com.studentassistance.hiranyasree.service.impl;

import java.util.List;
import java.util.stream.Collectors;

import org.springframework.stereotype.Service;

import com.studentassistance.hiranyasree.dto.request.PaymentRequest;
import com.studentassistance.hiranyasree.dto.response.PaymentResponse;
import com.studentassistance.hiranyasree.dto.response.RegisterResponse;
import com.studentassistance.hiranyasree.dto.response.basicResponse;
import com.studentassistance.hiranyasree.model.Course;
import com.studentassistance.hiranyasree.model.Payment;
import com.studentassistance.hiranyasree.model.User;
import com.studentassistance.hiranyasree.repository.PaymentRepository;
import com.studentassistance.hiranyasree.service.PaymentService;

import lombok.RequiredArgsConstructor;

@Service
@RequiredArgsConstructor

public class PaymentServiceImpl implements PaymentService{
    private final PaymentRepository paymentRepository;

    @Override
    public basicResponse<PaymentResponse> getAllPayment() {
        List <Payment> payments =  paymentRepository.findAll();
        List<PaymentResponse> paymentRequests = payments.stream()
                .map(payment -> PaymentResponse.builder()
                    .courseId(payment.getCoursee().getCourseId())
                    .userId(payment.getUserr().getId())
                    .paymentId(payment.getPaymentId())
                    .payment(payment.getPayment())
                    .paymentType(payment.getPaymentType())
                    .build())
                .collect(Collectors.toList());
        return basicResponse.<PaymentResponse>builder()
                .message("Payment data fetched successfully")
                .data(paymentRequests)
                .build();
    }

    @Override
    public RegisterResponse addPayment(PaymentRequest paymentRequest) {
        Payment payment = Payment.builder()
                .paymentId(paymentRequest.getPaymentId())
                .userr(User.builder().id(paymentRequest.getUserId()).build()) // Assuming User is imported and has a builder method
                .coursee(Course.builder().courseId(paymentRequest.getCourseId()).build()) // Assuming Course is imported and has a builder method
                .payment(paymentRequest.getPayment())
                .paymentType(paymentRequest.getPaymentType())
                .build();
        paymentRepository.save(payment);
        return RegisterResponse.builder()
                .message("Payment added successfully")
                .build();
    }    
}
