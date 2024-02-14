package com.studentassistance.hiranyasree.controller;

import static com.studentassistance.hiranyasree.utils.MyConstant.ADDPAYMENT;
import static com.studentassistance.hiranyasree.utils.MyConstant.PAYMENTLIST;
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

import com.studentassistance.hiranyasree.dto.request.PaymentRequest;
import com.studentassistance.hiranyasree.dto.response.PaymentResponse;
import com.studentassistance.hiranyasree.dto.response.RegisterResponse;
import com.studentassistance.hiranyasree.dto.response.basicResponse;
import com.studentassistance.hiranyasree.service.PaymentService;

import lombok.RequiredArgsConstructor;

@RestController
@RequestMapping(USER)
@RequiredArgsConstructor
public class PaymentController {
    
    private final PaymentService paymentService;

    @PostMapping(ADDPAYMENT)
         public ResponseEntity<RegisterResponse> addPayment(@RequestBody PaymentRequest payment){
        RegisterResponse response = new RegisterResponse();
        try {
            response = paymentService.addPayment(payment);
            return new ResponseEntity<>(response, ACCEPTED);

            
        } catch (Exception e) {
            response.setMessage("Something went wrong.");
            return new ResponseEntity<>(response,  EXPECTATION_FAILED);
        }
    }

    @GetMapping(PAYMENTLIST)
        public ResponseEntity<basicResponse<PaymentResponse>> getPayment() {
            basicResponse<PaymentResponse> response = new basicResponse<>();
            try {
                response = paymentService.getAllPayment();
                return new ResponseEntity<>(response, OK);
            } catch (Exception e) {
                response.setMessage("Payment :(  !!");
                return new ResponseEntity<>(response, EXPECTATION_FAILED);
            }
        }

}
