import { Component } from '@angular/core';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrl: './users.component.css',
})
export class UsersComponent {
  user = {
    firstName: 'tim b.',
    lastName: 'lee',
    dob: new Date('Dec 21, 1965'),
    income: 40000,
    isWorking: true,
    company: 'World Wide Web',
    avatar: './assets/images/tim.jpg',
  };

  onMoreInfo(person: any) {
    alert(`Mr. ${person.lastName} is working with ${person.company}.`);
  }
}
