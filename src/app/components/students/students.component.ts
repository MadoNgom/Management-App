import { Component, Input } from '@angular/core';
import { Student } from '../../models/stud-interf';
import { StudentService } from '../../services/student.service';

@Component({
  selector: 'app-students',
  templateUrl: './students.component.html',
  styleUrl: './students.component.css',
})
export class StudentsComponent {
  listeStudents: Student[] = [];
  studentId: any;
  student: Student = {
    id: '',
    firstName: '',
    lastName: '',
    classe: '',
    isRegistered: false,
  };
  submitted: boolean = false;

  constructor(private studentService: StudentService) {}
  ngOnInit(): void {
    this.getStudents();
  }
  // GET ALL STUDENTS  FROM MY SERVICE
  getStudents() {
    this.studentService.getStudents().subscribe((student) => {
      this.listeStudents = student;
      console.log(student);
    });
  }

  deleteStudent(student: Student) {
    this.studentService.deleteStudent(student.id).subscribe(() => {
      console.log(`student with id: ${student.id} deleted successfully`);
      this.listeStudents = this.listeStudents.filter(
        (c) => c.id !== student.id
      );
      console.log('Updated class list:', this.listeStudents);
    });
  }
  // TO ADD A STUDENT TO A CLASSE
  addStudent(student: Student) {
    this.studentService.addStudent(student).subscribe((newStudent) => {
      this.listeStudents.push(newStudent);
    });
  }
  toggleForm() {
    this.submitted = !this.submitted;
  }
  // TO CLEAR THE FORM AFTER ADDING THE STUDENT
  clearForm() {
    this.student = {
      id: '',
      firstName: '',
      lastName: '',
      classe: '',
      isRegistered: false,
    };
    this.submitted = false;
  }
}
