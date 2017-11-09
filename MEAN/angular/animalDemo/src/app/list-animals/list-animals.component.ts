import { Component, OnInit, Input } from '@angular/core';
import { Animal } from './../animal';

@Component({
  selector: 'app-list-animals',
  templateUrl: './list-animals.component.html',
  styleUrls: ['./list-animals.component.css']
})
export class ListAnimalsComponent implements OnInit {
  @Input() all_animals: Animal[];
  constructor() { }

  ngOnInit() {
    console.log(this.all_animals)
  }

}
