import { BucketListService } from './../bucket-list.service';
import { Component, OnInit } from '@angular/core';
import { User } from '../user';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {
  user = new User();
  bucketList: any;

  constructor(private _route: ActivatedRoute, private _service: BucketListService) {

  }

  ngOnInit() {
    this._route.paramMap.subscribe( params => {
      console.log(params.get('user_id'));
      this._service.getBucketList(params.get('user_id'));
    });
  }

}
