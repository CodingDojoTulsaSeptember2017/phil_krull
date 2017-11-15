import { Component, OnInit } from '@angular/core';
import { User } from './../user';
import { UsersService } from './../users.service';

@Component({
  selector: 'app-users-create',
  templateUrl: './users-create.component.html',
  styleUrls: ['./users-create.component.css']
})
export class UsersCreateComponent implements OnInit {
  user: User = new User();

  constructor(private _usersServices: UsersService) { }

  ngOnInit() {
  }

  onSubmit() {
    this._usersServices.addUser(this.user)
    this.user = new User();
  }

}
