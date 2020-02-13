import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  userModel = new User('', 'prashantmote96@gmail.com', '123456');
  
  constructor() { }

  ngOnInit() {
  }

}

class User {
  constructor(
    public name: string,
    public email: string,
    public password: string
  ){}
}
