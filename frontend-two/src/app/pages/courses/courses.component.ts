import { Component, OnInit } from '@angular/core';
import { CourseService } from '../../services/course.service';
import { ICourse } from '../../model/course-model';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrl: './courses.component.css',
})
export class CoursesComponent implements OnInit {
  courses!: Array<ICourse>;

  constructor(
    private service: CourseService,
    private router: Router,
    private route: ActivatedRoute,
  ) {}

  ngOnInit(): void {
    this.route.queryParams.subscribe((query) => {
      const { isDeleted } = query;
      if (isDeleted) {
        this.fetchCourses();
      }
    });
    this.fetchCourses();
  }

  private fetchCourses() {
    this.service.fetchAll().subscribe((courses) => (this.courses = courses));
  }

  onSelectCourse(courseId: string) {
    this.router.navigateByUrl(`/courses/${courseId}`);
  }
}
