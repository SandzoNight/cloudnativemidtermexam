package sit.electivecourseregistration.Enroll.Service;

import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface EnrollmentRepository extends JpaRepository<Enrollment, Long> {
    public List<Enrollment> findEnrollmentsByStudentId(Long studentRecordId);
}
