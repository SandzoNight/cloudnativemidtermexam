package sit.electivecourseregistration.Enroll.Service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.ArrayList;
import java.util.List;
import java.util.Map;

@RestController
public class EnrollController {

    @Autowired
    private EnrollableCourseService enrollableCourseService;

    @Autowired
    private CourseService courseService;

    @Autowired
    private LecturerService lecturerService;

    @Autowired
    private EnrollmentService enrollmentService;

    @GetMapping(path = "/enrolls")
    public ResponseEntity<List<EnrollableCourse>> getAllEnrollableCourses() {
        List<EnrollableCourse> enrollableCourses = enrollableCourseService.getAllEnrollableCourses();
        return new ResponseEntity<List<EnrollableCourse>>(enrollableCourses, HttpStatus.OK);
    }

    @GetMapping(path = "/enrolls/{id}")
    public ResponseEntity<EnrollableCourse> getEnrollableCourseById(@PathVariable Long id) {
        EnrollableCourse enrollableCourse = enrollableCourseService.getEnrollableCourseById(id);
        return new ResponseEntity<EnrollableCourse>(enrollableCourse, HttpStatus.OK);
    }

    @PostMapping(path = "/enrolls")
    public ResponseEntity<EnrollableCourse> createEnrollableCourse(@RequestBody Map<String,Object> jsonBody) {
        System.out.println(jsonBody);
        Long courseId = ((Integer)jsonBody.get("course_id")).longValue();
        int maxSeat = (Integer)jsonBody.get("max_seat");
        List<Integer> allowedYears = convertAllowedYearsObjectArrayListToListOfInteger((ArrayList)jsonBody.get("allowed_years"));

        EnrollableCourse enrollableCourse = enrollableCourseService.createEnrollableCourse(courseId, maxSeat, allowedYears);
        return new ResponseEntity<EnrollableCourse>(enrollableCourse, HttpStatus.OK);
    }

    private List<Integer> convertAllowedYearsObjectArrayListToListOfInteger(ArrayList allowedYearsObjectLikeArrayList) {
        List<Integer> allowedYearsInList = new ArrayList<Integer>();
        for (Object stringAllowYear : allowedYearsObjectLikeArrayList) {
            allowedYearsInList.add(Integer.parseInt(stringAllowYear.toString()));
        }
        return allowedYearsInList;
    }

    @PostMapping(path = "/enrolls/{id}/enroll")
    public ResponseEntity<Enrollment> enrollStudentToCourse(@PathVariable("id") Long enrollableCourseId, @RequestBody Map<String,String> jsonBody) {
        Long studentRecordId = Long.parseLong(jsonBody.get("student_id"));
        EnrollableCourse enrollableCourse = enrollableCourseService.getEnrollableCourseById(enrollableCourseId);
        Enrollment enrollment = enrollmentService.createEnrollment(enrollableCourse, studentRecordId);
        return new ResponseEntity<Enrollment>(enrollment, HttpStatus.OK);
    }

    @GetMapping(path = "/enrollments")
    public ResponseEntity<List<Enrollment>> getAllEnrollments() {
        List<Enrollment> enrollments = enrollmentService.getAllEnrollments();
        return new ResponseEntity<List<Enrollment>>(enrollments, HttpStatus.OK);
    }

    @GetMapping(path = "/enrollments/{id}")
    public ResponseEntity<Enrollment> getEnrollmentById(@PathVariable("id") Long enrollmentId) {
        Enrollment enrollment = enrollmentService.getEnrollmentById(enrollmentId);
        return new ResponseEntity<Enrollment>(enrollment, HttpStatus.OK);
    }

    @GetMapping(path = "/enrollments/student/{id}")
    public ResponseEntity<List<Enrollment>> getStudentEnrollments(@PathVariable("id") Long studentRecordId) {
        List<Enrollment> enrollments = enrollmentService.getEnrollmentByStudentId(studentRecordId);
        return new ResponseEntity<List<Enrollment>>(enrollments, HttpStatus.OK);
    }

    @GetMapping(path = "/courses")
    public ResponseEntity<List<Course>> getAllCourses() {
        List<Course> courses = courseService.getAllCourses();
        return new ResponseEntity<List<Course>>(courses, HttpStatus.OK);
    }

    @GetMapping(path = "/courses/{id}")
    public ResponseEntity<Course> getCourseById(@PathVariable("id") Long courseId) {
        Course course = courseService.getCourseById(courseId);
        return new ResponseEntity<Course>(course, HttpStatus.OK);
    }

    @PostMapping(path = "/courses")
    public ResponseEntity<Course> createCourse(@RequestBody Course course) {
        Course courseObject = courseService.createCourse(course);
        return new ResponseEntity<Course>(courseObject, HttpStatus.OK);
    }

    @GetMapping(path = "/lecturers")
    public ResponseEntity<List<Lecturer>> getAllLecturers() {
        List<Lecturer> lecturers = lecturerService.getAllLecturere();
        return new ResponseEntity<List<Lecturer>>(lecturers, HttpStatus.OK);
    }

    @PostMapping(path = "/lecturers")
    public ResponseEntity<Lecturer> createLecturer(@RequestBody Lecturer lecturer) {
        Lecturer lecturerObject = lecturerService.createLecturer(lecturer);
        return new ResponseEntity<Lecturer>(lecturer, HttpStatus.OK);
    }

}
