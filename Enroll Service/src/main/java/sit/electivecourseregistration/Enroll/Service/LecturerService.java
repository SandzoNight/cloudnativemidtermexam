package sit.electivecourseregistration.Enroll.Service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class LecturerService {

    @Autowired
    private LecturerRepository lecturerRepository;

    public List<Lecturer> getAllLecturere() {
        return lecturerRepository.findAll();
    }

    public Lecturer createLecturer(Lecturer lecturer) {
        return lecturerRepository.save(lecturer);
    }
}
