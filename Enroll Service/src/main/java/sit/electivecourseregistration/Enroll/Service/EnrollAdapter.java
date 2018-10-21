package sit.electivecourseregistration.Enroll.Service;

import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Service;
import org.springframework.web.client.RestTemplate;

@Service
public class EnrollAdapter {
    
    @Value("${sitecr.service.student}")
    private String STUDENT_SERVICE_API_URL;
    public Student getStudentByStudentRecordId(Long studentRecordId) {
        try {
            RestTemplate restTemplate = new RestTemplate();
            String url = STUDENT_SERVICE_API_URL + "/students/" + studentRecordId;

            System.out.println(url);

            Student student = restTemplate.getForObject(url, Student.class);
            return student;
        } catch (Exception ex ) {
            ex.printStackTrace();
            return null;
        }
    }
}
