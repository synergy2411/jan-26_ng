import { Component, OnInit } from '@angular/core';
import { IUser } from '../../model/user-model';
import { UserService } from '../../services/user.service';
// import { USER_DATA } from '../../model/mocks';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrl: './users.component.css',
  // providers: [UserService], // Service Registration
})
export class UsersComponent implements OnInit {
  users!: Array<IUser>;

  // Service Injection
  constructor(private service: UserService) {}

  ngOnInit(): void {
    // this.users = USER_DATA;
    this.users = this.service.getUserdata();
  }

  onMoreInfo(person: IUser) {
    alert(`Mr. ${person.lastName} is working with ${person.company}.`);
  }
}
