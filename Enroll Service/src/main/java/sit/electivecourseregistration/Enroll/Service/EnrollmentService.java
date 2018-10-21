package sit.electivecourseregistration.Enroll.Service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class EnrollmentService {

    @Autowired
    private EnrollmentRepository enrollmentRepository;

    @Autowired
    private EnrollAdapter enrollAdapter;

    public List<Enrollment> getAllEnrollments() {
        return enrollmentRepository.findAll();
    }

    public Enrollment getEnrollmentById(Long enrollmentId) {
        return enrollmentRepository.getOne(enrollmentId);
    }

    public Enrollment createEnrollment(EnrollableCourse enrollableCourse, Long studentRecordId) {
        Student student = enrollAdapter.getStudentByStudentRecordId(studentRecordId);
        if(isAbleToElect(student)) {
            Enrollment enrollment = new Enrollment(enrollableCourse.getCourse(), student.getId());
            enrollment = enrollmentRepository.save(enrollment);
            return enrollment;
        }
        return null;

    }

    private boolean isAbleToElect(Student student) {
        if(isJunior(student) || isSenior(student)) {
            List<Enrollment> enrollmentsOfStudent = enrollmentRepository.findEnrollmentsByStudentId(student.getId());
            if(isJunior(student) && enrollmentsOfStudent.size() < 2) {
                return true;
            }
            if(isSenior(student) && enrollmentsOfStudent.size() < 1) {
                return true;
            }
        }
        return false;
    }

    private boolean isFreshman(Student student) {
        return student.getYear()==1;
    }

    private boolean isSophomore(Student student) {
        return student.getYear()==2;
    }

    private boolean isJunior(Student student) {
        return student.getYear()==3;
    }

    private boolean isSenior(Student student) {
        return student.getYear()==4;
    }

    public List<Enrollment> getEnrollmentByStudentId(Long studentRecordId) {
        return enrollmentRepository.findEnrollmentsByStudentId(studentRecordId);
    }
}
