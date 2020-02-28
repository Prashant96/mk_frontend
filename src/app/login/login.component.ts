import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';
import { TokenService } from '../Services/token.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  
  public emailId:string;
  public pwd:string;
  public error:string;
  
  constructor(
    private userService:UserService,
    private token:TokenService,
    private router:Router
  ) { }

  ngOnInit() {
  }

  onSubmit(){
    let data = {
      email: this.emailId,
      password: this.pwd
    }
    this.userService.login(data).subscribe(
      data => this.handleResponse(data.access_token),
      error => this.handleError(error)
    );
  }
  handleError(error: any): void {
    this.error = error.error.error;
    // console.log(this.error);
  }

  handleResponse(access_token: string) {
    this.token.handle(access_token);
    this.router.navigate(['/dashboard'])
  }

}

class Login{
  constructor(
    public phone:number,
    public password:string
  ){}
}