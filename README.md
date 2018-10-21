# SIT’s Elective Courses Registration (SIT-ECR)

for API endpoints visit [Wiki page](https://github.com/SandzoNight/cloudnativemidtermexam/wiki).
## Prerequisites
**Requirements for running the system**
 1. **For API Services**
 2. Java 8
 3. Tomcat
 4. MySQL Database
 5. **For Frontend web server**
	 - Node.js server 

**Requirements for developing**
 6. **For API Services**
	- Java Development Kit (JDK) 1.8.0
	- Maven
	- Spring boot
	- MySQL Database
 7. **For Frontend web server**
	 - Node.js
 8. and your favorite editor!
## Running a development server
**For API Services**

 9. On Windows
	 1. `cd {service}`
	 2. Edit application.properties values:
		 - spring.datasource.url
		 - spring.datasource.username=root  
		 - spring.datasource.password=
	 4. `mvn clean package`
	 5. `java -jar target/{built-jar-file.jar} --server.port={PORT}`
 10. On MacOS
	- *coming soon..*
## How to use this software

 Step 1)  Import `SITElectiveCourse.postman_collection.json` file from this repository![enter image description here](http://i1239.photobucket.com/albums/ff519/panozx/1.png)

Step 2) You will see all available functions on the left panel
![enter image description here](http://i1239.photobucket.com/albums/ff519/panozx/2.png)

Step 3) Select `get student by studentId` ,fill in your student id on the URL. Then remember the `id` from the response.
![enter image description here](http://i1239.photobucket.com/albums/ff519/panozx/4.png)

Step 4) Select `enroll student to course`

![enter image description here](http://i1239.photobucket.com/albums/ff519/panozx/3.png)

Step 5) Put your `id` from previous step in the URL
![enter image description here](http://i1239.photobucket.com/albums/ff519/panozx/5.png)

Step 6) Click Send. Now you enrolled a course.
![enter image description here](http://i1239.photobucket.com/albums/ff519/panozx/6.png)

## Appendix

 - System Class Diagram
![enter image description here](http://i1239.photobucket.com/albums/ff519/panozx/Class%20Diagram%201.png)
 - System Service Diagram
![enter image description here](http://i1239.photobucket.com/albums/ff519/panozx/Service%20Diagram.png)

