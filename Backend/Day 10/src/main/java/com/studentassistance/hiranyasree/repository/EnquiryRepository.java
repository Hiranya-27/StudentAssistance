package com.studentassistance.hiranyasree.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.studentassistance.hiranyasree.model.Enquiry;

public interface EnquiryRepository extends JpaRepository<Enquiry,String> {
    
}
