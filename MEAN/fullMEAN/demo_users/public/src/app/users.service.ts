import { Injectable } from '@angular/core';
import { Http } from '@angular/http'
import { User } from './user'
import { BehaviorSubject } from 'rxjs';

@Injectable()
export class UsersService {
  users: User[];
  usersObservable = new BehaviorSubject(this.users);

  constructor(private _http: Http) { }

  getUsers() {
    // send a request to the express server
    this._http.get('/users').subscribe(
      (users)=>{
        // successful call
        this.users = users.json();
        this.usersObservable.next(this.users);
      },
      (errors)=>{
        // unsuccessfull call
        console.log(errors)
      }
    )
    // update the users array
    // add to the usersObservable
  }

  addUser(user: User) {
    console.log('user to create', user);
    this._http.post('/users', user).subscribe(
      (userCreated)=>{
        this.users.push(userCreated.json());
        this.usersObservable.next(this.users);
      }
    )
  }

}
