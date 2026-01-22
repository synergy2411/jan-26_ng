import { Component, OnInit } from '@angular/core';
import { IUser } from '../../model/user-model';
import { USER_DATA } from '../../model/mocks';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrl: './users.component.css',
})
export class UsersComponent implements OnInit {
  user!: IUser;

  ngOnInit(): void {
    this.user = USER_DATA;
  }

  onMoreInfo(person: IUser) {
    alert(`Mr. ${person.lastName} is working with ${person.company}.`);
  }
}
