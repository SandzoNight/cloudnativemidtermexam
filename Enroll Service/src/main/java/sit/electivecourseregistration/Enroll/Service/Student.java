package sit.electivecourseregistration.Enroll.Service;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;

import javax.persistence.*;
import javax.validation.constraints.NotNull;
import java.io.Serializable;

public class Student implements Serializable {

    private Long id;

    private String studentId;

    private String firstname;

    private String surname;

    private String department;

    private String faculty;

    private int year;

    public Student() {
    }

    public Student(@NotNull String studentId, @NotNull String firstname, @NotNull String surname, @NotNull String department, @NotNull String faculty, @NotNull int year) {
        this.studentId = studentId;
        this.firstname = firstname;
        this.surname = surname;
        this.department = department;
        this.faculty = faculty;
        this.year = year;
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getStudentId() {
        return studentId;
    }

    public void setStudentId(String studentId) {
        this.studentId = studentId;
    }

    public String getFirstname() {
        return firstname;
    }

    public void setFirstname(String firstname) {
        this.firstname = firstname;
    }

    public String getSurname() {
        return surname;
    }

    public void setSurname(String surname) {
        this.surname = surname;
    }

    public String getDepartment() {
        return department;
    }

    public void setDepartment(String department) {
        this.department = department;
    }

    public String getFaculty() {
        return faculty;
    }

    public void setFaculty(String faculty) {
        this.faculty = faculty;
    }

    public int getYear() {
        return year;
    }

    public void setYear(int year) {
        this.year = year;
    }

    @Override
    public String toString() {
        return this.studentId+" "+this.firstname+" "+this.surname;
    }
}
