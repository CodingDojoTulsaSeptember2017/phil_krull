import { Item } from './item';
import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { User } from './user';
import { Router } from '@angular/router';
import { BehaviorSubject } from 'rxjs';

@Injectable()
export class BucketListService {
  user: User;
  users: User[];
  items: Item[];
  itemsObservabale = new BehaviorSubject(this.items);

  constructor(private _http: Http, private _router: Router) { }

  loginUser(user: User) {
    this._http.post('/users', user).subscribe(
      (success) => {
        // redirect to dashboard
        console.log('user create response:', success.json());
        this.user = user;
        this._router.navigate(['dashboard']);
      },
      (error) => {
        // redirect to index
        console.log('errors in login are: ', error);
        this._router.navigate(['']);
      }
    );
  }

  logout() {
    this._http.get('/logout').subscribe(
      (success) => {
        console.log(success);
        this.user = undefined;
        this._router.navigate(['']);
      },
      (error) => {
        console.log('errors');
      }
    );
  }

  getUsers(callback) {
    this._http.get('/users').subscribe(
      (users) => {
        callback(users.json());
      },
      (errors) => {
        console.log(errors);
      }
    );
  }

  addItem(item: Item) {
    this._http.post('/items', item).subscribe((rItem) => {
      console.log(rItem.json());
      this.getItems();
    });
  }

  getItems() {
    this._http.get('/items').subscribe(
      (items) => {
        this.items = items.json();
        this.itemsObservabale.next(this.items);
      },
      (error) => {
        console.log(error);
      }
    );
  }

  getBucketList(user_id) {
    this._http.get(`/bucketList/${user_id}`).subscribe(
      (items) => {
        console.log(items.json());
      }
    );
  }

}
