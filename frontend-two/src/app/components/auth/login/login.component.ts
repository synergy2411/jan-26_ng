import { Component, ChangeDetectionStrategy } from '@angular/core';
import { NgForm } from '@angular/forms';
import { AuthService } from '../../../services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class LoginComponent {
  constructor(
    private router: Router,
    private authService: AuthService,
  ) {}

  onSubmit(loginForm: NgForm) {
    console.log(loginForm);
    this.authService
      .onLogin(loginForm.value.username, loginForm.value.password)
      .subscribe((message) => {
        this.router.navigate(['/courses']);
      });
  }
}
