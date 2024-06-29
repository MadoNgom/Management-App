import { Injectable } from '@angular/core';
import { Student } from '../models/stud-interf';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class StudentService {
  private apiUrl = `http://localhost:3000/students`;
  constructor(private http: HttpClient) {}
  // TO GET ALL EXISTING STUDENTS
  getStudents(): Observable<Student[]> {
    return this.http.get<Student[]>(this.apiUrl);
  }
  // TO ADD STUDENT
  addStudent(student: Student): Observable<Student> {
    return this.http.post<Student>(this.apiUrl, student);
  }
  // TO PUT A STUDENT TO A CLASSE
  updateStudent(id: number, student: Student): Observable<Student> {
    return this.http.put<Student>(`${this.apiUrl}/${id}`, student);
  }
  // TO GET A CLASSE BY ITS ID
  getStudentById(id: number): Observable<Student> {
    return this.http.get<Student>(`${this.apiUrl}/${id}`);
  }
  // TO DELETE A CLASSE
  deleteStudent(id: string): Observable<any> {
    const url = `${this.apiUrl}/${id}`;
    return this.http.delete(url);
  }
}
