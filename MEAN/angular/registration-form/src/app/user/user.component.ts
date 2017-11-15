import { Component, OnInit } from '@angular/core';
import { User } from './../user'
import { NgForm } from '@angular/forms'

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
  user: User = new User
  states: Array<string>
  success_message: string
  apt: string
  constructor() { }

  ngOnInit() {
    this.states = [
      'Alabama','Alaska','Arizona','Arkansas','California','Colorado','Connecticut','Delaware','Florida','Georgia','Hawaii','Idaho','Illinois','Indiana','Iowa','Kansas','Kentucky','Louisiana','Maine','Maryland','Massachusetts','Michigan','Minnesota', 'Mississippi','Missouri','Montana', 'Nebraska','Nevada','New Hampshire','New Jersey','New Mexico','New York','North Carolina','North Dakota','Ohio','Oklahoma','Oregon','Pennsylvania', 'Rhode Island','South Carolina','South Dakota','Tennessee','Texas','Utah','Vermont','Virginia','Washington','West Virginia','Wisconsin','Wyoming'
    ]
  }

  register(form:NgForm){
    this.apt = this.user.apt ? this.user.apt : ''
    this.success_message = `Thank you for registering with us ${this.user.first_name}. We just you a confirmation email to ${this.user.email}, and we will send all mail to ${this.user.address} ${this.apt}, ${this.user.city} ${this.user.state}.`
    this.user = new User
    form.reset()
  }

}
