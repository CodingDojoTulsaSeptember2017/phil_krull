import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Animal } from './../animal';

@Component({
  selector: 'app-add-animals',
  templateUrl: './add-animals.component.html',
  styleUrls: ['./add-animals.component.css']
})
export class AddAnimalsComponent implements OnInit {
  @Output() eventToParent = new EventEmitter();
  title: string = 'Add Animals';

  animal: Animal = new Animal();

  constructor() { }

  ngOnInit() {
  }

  onSubmit() {
    console.log(this.animal);
    // emit the animal to the parent
    this.eventToParent.emit(this.animal);

    this.animal = new Animal();
  }

}
