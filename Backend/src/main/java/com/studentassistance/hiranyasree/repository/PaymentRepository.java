package com.studentassistance.hiranyasree.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.studentassistance.hiranyasree.model.Payment;

public interface PaymentRepository extends JpaRepository<Payment,String>{

}
