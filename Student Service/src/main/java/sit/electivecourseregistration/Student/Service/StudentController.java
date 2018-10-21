package sit.electivecourseregistration.Student.Service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.ArrayList;
import java.util.List;

@RestController
public class StudentController {

    @Autowired
    private StudentService studentService;

    @GetMapping(path = "/students")
    public ResponseEntity<List<Student>> getAllStudennts(
            @RequestParam(value="studentId", required = false)String studentId) {
        List<Student> studentList = new ArrayList<Student>();
        if(hasStudentIdParamInRequest(studentId)) {
            studentList.add(studentService.getStudentByStudentId(studentId));
        }else {
            studentList = studentService.getAllStudents();
        }
        return new ResponseEntity<List<Student>>(studentList, HttpStatus.OK);
    }

    @PostMapping(path = "/students")
    public ResponseEntity<Student> createStudent(@RequestBody Student student) {
        Student studentObject = studentService.createStudent(student);
        return new ResponseEntity<Student>(studentObject, HttpStatus.OK);
    }

    @GetMapping(path = "/students/{id}")
    public ResponseEntity<Student> getStudentById(@PathVariable Long id) {
        Student studentObject = studentService.getStudentById(id);
        return new ResponseEntity<Student>(studentObject, HttpStatus.OK);
    }

    private boolean hasStudentIdParamInRequest(String studentId) {
        return studentId != null;
    }
}
