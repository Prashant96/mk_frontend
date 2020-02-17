import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  public userName:string;
  public userEmail:string;
  public userPhone:string;
  public userPassword:string;
  public userModel = new User('', 'prashantmote96@gmail.com', '123456');
  public allUsers: any; 
  constructor(private userService:UserService) { }

  ngOnInit() {
    this.userService.getAllUsers().subscribe(
      (response) => {
        console.log("HERE COMPO");
        this.allUsers = response;
      }
    );
  }

  registerUser(){
    let user = {
      name:this.userName,
      email:this.userEmail,
      phone:this.userPhone,
      password:this.userPassword,
    }
    this.userService.registerUser(user).subscribe(
      (response) => {
        console.log(response);
      }
    )
  }

}

class User {
  constructor(
    public name: string,
    public email: string,
    public password: string
  ){}
}
