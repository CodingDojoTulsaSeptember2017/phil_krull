import { Component } from '@angular/core';
import { Animal } from './animal';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  animals: Animal[] = [
    {name: 'bear', location: 'canada', numberOfLegs: 4, size: 'huge'},
    {name: 'fish', location: 'water', numberOfLegs: 0, size: 'small'},
    {name: 'sasquatch', location: 'unknown', numberOfLegs: 2, size: 'big'},
  ];

  addToAnimalList(animal) {
    console.log(animal);
    this.animals.push(animal);
  }

}
