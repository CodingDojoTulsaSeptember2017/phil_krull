import { Component, OnInit } from '@angular/core';
import { UsersService } from './../users.service';
import { User } from './../user';

@Component({
  selector: 'app-users-show',
  templateUrl: './users-show.component.html',
  styleUrls: ['./users-show.component.css']
})
export class UsersShowComponent implements OnInit {
  users:User[];

  constructor(private _usersServices: UsersService) {
    this._usersServices.usersObservable.subscribe(
      (users)=>{
        this.users = users;
      }
    )
  }

  ngOnInit() {
    this._usersServices.getUsers();
  }

}
