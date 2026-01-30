import { Injectable } from '@angular/core';
import { of } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class DataService {
  constructor() {}

  getUserdata() {
    return 'Rachel Greens';
  }

  getUserdataByPromise() {
    return new Promise((resolve) => {
      setTimeout(() => resolve('Joey'), 1000);
    });
  }

  getUserdataByObservable() {
    return of('Chandler Bing');
  }
}
