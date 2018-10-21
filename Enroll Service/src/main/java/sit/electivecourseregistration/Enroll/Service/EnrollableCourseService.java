package sit.electivecourseregistration.Enroll.Service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class EnrollableCourseService {

    @Autowired
    private EnrollableCourseRepository enrollableCourseRepository;

    @Autowired
    private CourseService courseService;

    public List<EnrollableCourse> getAllEnrollableCourses() {
        return enrollableCourseRepository.findAll();
    }

    public EnrollableCourse getEnrollableCourseById(Long id) {
        return enrollableCourseRepository.getOne(id);
    }

    public EnrollableCourse createEnrollableCourse(Long courseId, int maxSeat, List<Integer> allowedYears) {
        Course course = courseService.getCourseById(courseId);
        EnrollableCourse enrollableCourse = new EnrollableCourse();
        enrollableCourse.setCourse(course);
        enrollableCourse.setMaxSeat(maxSeat);
        enrollableCourse.setAllowedYear(allowedYears);
        return enrollableCourseRepository.save(enrollableCourse);
    }
}
