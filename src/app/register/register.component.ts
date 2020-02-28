import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';
import { Router } from '@angular/router';
import { TokenService } from '../Services/token.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  public form = {
    name: null,
    email: null,
    password: null,
    phone: null,
  }
  public userName:string;
  public userEmail:string;
  public userPhone:string;
  public userPassword:string;
  public userModel = new User('', 'prashantmote96@gmail.com', '123456');
  public allUsers: any; 

  constructor(
    private userService:UserService,
    private router:Router,
    private token: TokenService
  ) { }

  ngOnInit() {
  }

  onSubmit(){
    this.registerUser();
  }

  registerUser(){
    this.userService.registerUser(this.form).subscribe(
      data => this.handleSignup(data),
      error => this.handleError(error)
    )
  }

  handleError(error: any): void {
    console.log(error.error.error);  
  }

  handleSignup(data: any): void {
    this.token.handle(data.access_token);
    this.router.navigate(['/dashboard'])
  }

}

class User {
  constructor(
    public name: string,
    public email: string,
    public password: string
  ){}
}
