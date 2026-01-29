import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ICourse } from '../model/course-model';

@Injectable({
  providedIn: 'root',
})
export class CourseService {
  baseUrl = 'http://localhost:3000/courses';

  constructor(private http: HttpClient) {}

  fetchAll() {
    return this.http.get<Array<ICourse>>(this.baseUrl);
  }

  fetch(courseId: string) {
    return this.http.get<ICourse>(`${this.baseUrl}/${courseId}`);
  }

  create(course: ICourse) {
    return this.http.post<ICourse>(this.baseUrl, course);
  }

  delete(courseId: string) {
    return this.http.delete(`${this.baseUrl}/${courseId}`);
  }

  update(course: ICourse) {
    return this.http.patch<ICourse>(`${this.baseUrl}/${course.id}`, course);
  }
}
