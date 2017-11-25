import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-list-users',
  templateUrl: './list-users.component.html',
  styleUrls: ['./list-users.component.css']
})
export class ListUsersComponent implements OnInit {
  @Input() all_users;

  constructor() { }

  ngOnInit() {

  }

}
