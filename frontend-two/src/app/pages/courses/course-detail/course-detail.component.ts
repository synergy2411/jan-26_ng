import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CourseService } from '../../../services/course.service';
import { ICourse } from '../../../model/course-model';

@Component({
  selector: 'app-course-detail',
  templateUrl: './course-detail.component.html',
  styleUrl: './course-detail.component.css',
})
export class CourseDetailComponent implements OnInit {
  course!: ICourse;

  constructor(
    private service: CourseService,
    private route: ActivatedRoute,
  ) {}

  ngOnInit(): void {
    this.route.params.subscribe((params) => {
      const { courseId } = params;
      this.service.fetch(courseId).subscribe((course) => {
        this.course = course;
      });
    });
  }
}
