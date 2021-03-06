package sit.electivecourseregistration.Enroll.Service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class CourseService {

    @Autowired
    private CourseRepository courseRepository;

    public List<Course> getAllCourses() {
        return courseRepository.findAll();
    }

    public Course getCourseById(Long courseId) {
        return courseRepository.getOne(courseId);
    }

    public Course createCourse(Course course) {
        Course courseObject = courseRepository.save(course);
        return courseRepository.getOne(courseObject.getId());
    }
}
