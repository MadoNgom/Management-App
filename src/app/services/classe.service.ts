import { Injectable } from '@angular/core';
import { ClasseInterf } from '../models/classe-interf';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ClasseService {
  private apiUrl = `http://localhost:3000/classes`;
  constructor(private http: HttpClient) {}
  // TO GET ALL EXISTING CLASSES
  getClasses(): Observable<ClasseInterf[]> {
    return this.http.get<ClasseInterf[]>(this.apiUrl);
  }
  // TO ADD CLASSES
  addClasse(classe: ClasseInterf): Observable<ClasseInterf> {
    return this.http.post<ClasseInterf>(this.apiUrl, classe);
  }
  // TO UPDATE A CLASSE
  updateClasse(id: number, classe: ClasseInterf): Observable<ClasseInterf> {
    return this.http.put<ClasseInterf>(`${this.apiUrl}/${id}`, classe);
  }
  // TO GET A CLASSE BY ITS ID
  getClasseById(id: number): Observable<ClasseInterf> {
    return this.http.get<ClasseInterf>(`${this.apiUrl}/${id}`);
  }
  // TO DELETE A CLASSE
  deleteClasse(id: number): Observable<any> {
    const url = `${this.apiUrl}/${id}`;
    return this.http.delete(url);
  }
}
