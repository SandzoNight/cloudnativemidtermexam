package sit.electivecourseregistration.Enroll.Service;

import org.springframework.data.jpa.repository.JpaRepository;

public interface EnrollableCourseRepository extends JpaRepository<EnrollableCourse, Long> {
}
