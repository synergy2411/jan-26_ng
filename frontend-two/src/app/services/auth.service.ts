import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

interface IAdmin {
  email: string;
  password: string;
}

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private admins: Array<IAdmin> = [];
  private isAuthenticated = false;

  constructor() {}

  onRegister(email: string, password: string) {
    return new Observable((observer) => {
      const position = this.admins.findIndex((admin) => admin.email === email);
      if (position >= 0) {
        observer.error(new Error('User already exists! Try again'));
      }
      this.admins.push({ email, password });
      observer.next({ message: 'created successfully' });
    });
  }

  onLogin(email: string, password: string) {
    return new Observable((observer) => {
      const position = this.admins.findIndex((admin) => admin.email === email);
      if (position === -1) {
        observer.error(new Error('Unable to find user - ' + email));
        return;
      }
      this.isAuthenticated = true;
      observer.next({ message: 'Authenticated' });
    });
  }

  isUserAuthenticated() {
    return this.isAuthenticated;
  }
}
