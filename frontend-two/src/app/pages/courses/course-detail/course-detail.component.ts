import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
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
    private router: Router,
  ) {}

  ngOnInit(): void {
    this.route.params.subscribe((params) => {
      const { courseId } = params;
      this.service.fetch(courseId).subscribe((course) => {
        this.course = course;
      });
    });
  }

  onEdit() {
    // Create a form for Course to Edit
  }

  onDelete() {
    if (
      confirm(
        'Are you sure to delete this item - ' +
          this.course.title.toUpperCase() +
          ' ?',
      )
    ) {
      this.service.delete(this.course.id).subscribe(() => {
        // Why UI not updated ?
        // this.router.navigateByUrl('/courses');
        this.router.navigate(['/courses'], {
          queryParams: { isDeleted: true },
        });
      });
    }
  }

  onClose() {
    this.router.navigateByUrl('/courses');
  }
}
