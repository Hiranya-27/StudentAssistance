package com.studentassistance.hiranyasree.service.impl;

import java.util.List;
import java.util.Optional;
import java.util.stream.Collectors;

import org.springframework.stereotype.Service;

import com.studentassistance.hiranyasree.dto.request.CourseRequest;
import com.studentassistance.hiranyasree.dto.response.RegisterResponse;
import com.studentassistance.hiranyasree.dto.response.basicResponse;
import com.studentassistance.hiranyasree.model.Course;
import com.studentassistance.hiranyasree.repository.CourseRepository;
import com.studentassistance.hiranyasree.service.CourseService;

import lombok.RequiredArgsConstructor;

@Service
@RequiredArgsConstructor
public class CourseServiceImpl implements CourseService{
    private final CourseRepository courseRepository;

    @Override
    public basicResponse<CourseRequest> getAllCourse(){
        List<Course>courses=courseRepository.findAll();
         List<CourseRequest> courseResponses=courses.stream().map(course->CourseRequest
        .builder()
        .courseId(course.getCourseId())
        .courseName(course.getCourseName())
        .description(course.getDescription())
        .duration(course.getDuration())
        .fee(course.getFee())
        .build())
        .collect(Collectors.toList());
        return basicResponse.<CourseRequest>builder().message("Course data fetched successfully!")
        .data(courseResponses)
        .build();
    }

    @Override
    public RegisterResponse addCourse(CourseRequest course)
    { 
        var add =Course.builder() 
        .courseId(course.getCourseId())
        .courseName(course.getCourseName())
        .description(course.getDescription())
        .duration(course.getDuration())
        .fee(course.getFee())
        .build();
        courseRepository.save(add);
        return RegisterResponse.builder()
        .message("Course added successfully!")
        .build();
    } 

    @Override
    public RegisterResponse deleteCourse(String courseId) {
    RegisterResponse response = new RegisterResponse();
    try {
        // Check if the course with the given courseId exists
        Optional<Course> optionalCourse = courseRepository.findById(courseId);
        if (optionalCourse.isPresent()) {
            courseRepository.deleteById(courseId);
            response.setMessage("Course deleted successfully");
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
}