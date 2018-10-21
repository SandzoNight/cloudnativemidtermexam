package sit.electivecourseregistration.Enroll.Service;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;

import javax.persistence.*;
import javax.validation.constraints.NotNull;
import java.util.List;

@Entity
@Table(name="enrollable_courses")
@JsonIgnoreProperties({"hibernateLazyInitializer", "handler"})
public class EnrollableCourse {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @NotNull
    @ManyToOne(
        fetch = FetchType.LAZY
    )
    @JoinColumn(name = "course_id", nullable = false)
//    @JsonIgnore
    private Course course;

    @NotNull
    private int maxSeat;

    @ElementCollection(fetch = FetchType.LAZY)
    private List<Integer> allowedYears;


    public EnrollableCourse() {
    }

    public EnrollableCourse(@NotNull Course course, @NotNull int maxSeat, List<Integer> allowedYear) {
        this.course = course;
        this.maxSeat = maxSeat;
        this.allowedYears = allowedYear;
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public Course getCourse() {
        return course;
    }

    public void setCourse(Course course) {
        this.course = course;
    }

    public int getMaxSeat() {
        return maxSeat;
    }

    public void setMaxSeat(int maxSeat) {
        this.maxSeat = maxSeat;
    }

    public List<Integer> getAllowedYear() {
        return allowedYears;
    }

    public void setAllowedYear(List<Integer> allowedYear) {
        this.allowedYears = allowedYear;
    }
}
