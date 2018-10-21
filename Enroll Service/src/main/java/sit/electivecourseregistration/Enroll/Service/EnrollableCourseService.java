package sit.electivecourseregistration.Enroll.Service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class EnrollableCourseService {

    @Autowired
    private EnrollableCourseRepository enrollableCourseRepository;

    public List<EnrollableCourse> getAllEnrollableCourses() {
        return enrollableCourseRepository.findAll();
    }

    public EnrollableCourse getEnrollableCourseById(Long id) {
        return enrollableCourseRepository.getOne(id);
    }
}
