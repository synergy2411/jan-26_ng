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
}
