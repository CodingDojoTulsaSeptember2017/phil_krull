import { User } from './../user';
import { BucketListService } from './../bucket-list.service';
import { Component, OnInit } from '@angular/core';
import { Item } from './../item';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  // logined in user
  user: User;
  // all users
  users: User[];
  item: Item = new Item();
  items: Item[];


  constructor(private _service: BucketListService) { }

  ngOnInit() {
    this.user = this._service.user;
    this._service.getUsers((users) => {
      this.users = users;
    });
    this._service.getItems();
    this._service.itemsObservabale.subscribe((items) => {
      this.items = items;
    });
  }

  logout() {
    console.log('in logout');
    this._service.logout();
  }

  onSubmit() {
    this._service.addItem(this.item);
    // .subscribe(
    //   ((user) => {
    //     console.log(user);
    //   })
    // )
    this.item = new Item();

  }

}
