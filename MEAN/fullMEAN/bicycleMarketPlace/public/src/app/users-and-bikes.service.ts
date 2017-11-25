import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

@Injectable()
export class UsersAndBikesService {

  constructor(private _http: Http) { }

  register(user) {
    this._http.post('/users/create', user).subscribe(
    (user)=>{
      console.log('the user is:',user);
    },
    (error)=>{
      console.log('the error is:',error)
    }
  )}

}
