import { Component, OnInit } from '@angular/core';
import { User } from './../../user';
import { UsersAndBikesService } from './../../users-and-bikes.service';

@Component({
  selector: 'app-user-register',
  templateUrl: './user-register.component.html',
  styleUrls: ['./user-register.component.css']
})
export class UserRegisterComponent implements OnInit {
  user:User = new User();

  constructor(private _service: UsersAndBikesService) { }

  ngOnInit() {
  }

  register() {
    console.log(this.user);
    this._service.register(this.user);
    this.user = new User();
  }

}
