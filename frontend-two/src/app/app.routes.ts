import { Routes } from '@angular/router';
import { LoginComponent } from './components/auth/login/login.component';
import { RegisterComponent } from './components/auth/register/register.component';
import { ExpensesComponent } from './components/expenses/expenses.component';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { CoursesComponent } from './pages/courses/courses.component';
import { CourseDetailComponent } from './pages/courses/course-detail/course-detail.component';
import { loginGuard } from './services/guards/login.guard';
import { exitGuard } from './services/guards/exit.guard';

export const APP_ROUTES: Routes = [
  {
    path: '', // http://localhost:4200
    redirectTo: 'login',
    pathMatch: 'full',
  },
  {
    path: 'login', // http://localhost:4200/login
    component: LoginComponent,
  },
  {
    path: 'register', // http://localhost:4200/register
    component: RegisterComponent,
    canDeactivate: [exitGuard],
  },
  {
    path: 'expenses', // http://localhost:4200/expenses
    component: ExpensesComponent,
  },
  {
    path: 'courses', // http://localhost:4200/courses
    component: CoursesComponent,
    canActivate: [loginGuard],
    children: [
      {
        path: ':courseId', // http://localhost:4200/courses/:courseId
        component: CourseDetailComponent,
      },
    ],
  },
  {
    path: 'lazy',
    loadChildren: () =>
      import('./modules/lazy/lazy.module').then((m) => m.LazyModule),
  },
  {
    path: '**',
    component: NotFoundComponent,
    pathMatch: 'full',
  },
];
