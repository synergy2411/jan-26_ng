import { Component, OnInit } from '@angular/core';
import { CourseService } from '../../services/course.service';
import { ICourse } from '../../model/course-model';

@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrl: './courses.component.css',
})
export class CoursesComponent implements OnInit {
  courses!: Array<ICourse>;

  constructor(private service: CourseService) {}

  ngOnInit(): void {
    this.service.fetchAll().subscribe((courses) => (this.courses = courses));
  }
}
