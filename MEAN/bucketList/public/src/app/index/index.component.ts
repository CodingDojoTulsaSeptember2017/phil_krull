import { Component, OnInit } from '@angular/core';
import { User } from '../user';
import { BucketListService } from '../bucket-list.service';

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.css']
})
export class IndexComponent implements OnInit {
  user = new User();

  constructor(private _service: BucketListService) { }

  ngOnInit() {
  }

  onSubmit() {
    console.log(this.user);
    this._service.loginUser(this.user);
    this.user = new User();
  }

}
