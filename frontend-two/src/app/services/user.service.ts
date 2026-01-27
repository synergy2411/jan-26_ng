import { Injectable } from '@angular/core';
import { USER_DATA } from '../model/mocks';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  constructor() {}

  getUserdata() {
    return USER_DATA;
  }
}
