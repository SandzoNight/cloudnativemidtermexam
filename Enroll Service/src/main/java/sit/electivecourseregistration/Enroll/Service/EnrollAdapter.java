package sit.electivecourseregistration.Enroll.Service;

import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;
import org.springframework.web.client.RestTemplate;

@Service
public class EnrollAdapter {
    public Student getStudentByStudentRecordId(Long studentRecordId) {
        try {
            RestTemplate restTemplate = new RestTemplate();
            String url = String.format("http://localhost:8080/students/%d", studentRecordId);

            System.out.println(url);

            Student student = restTemplate.getForObject(url, Student.class);
//            Student student = this.jsonToObjectMapper(response);;
            return student;
        } catch (Exception ex ) {
            ex.printStackTrace();
            return null;
        }
    }
}
