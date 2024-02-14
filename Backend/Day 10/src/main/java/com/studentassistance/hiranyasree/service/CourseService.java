package com.studentassistance.hiranyasree.service;

import com.studentassistance.hiranyasree.dto.request.CourseRequest;
import com.studentassistance.hiranyasree.dto.response.RegisterResponse;
import com.studentassistance.hiranyasree.dto.response.basicResponse;

public interface CourseService {
    basicResponse<CourseRequest>getAllCourse();
    public RegisterResponse addCourse(CourseRequest course);
    RegisterResponse deleteCourse(String courseId);
}
