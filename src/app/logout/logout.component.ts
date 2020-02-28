import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';
import { Router } from '@angular/router';
import { TokenService } from '../Services/token.service';

@Component({
  selector: 'app-logout',
  templateUrl: './logout.component.html',
  styleUrls: ['./logout.component.css']
})
export class LogoutComponent implements OnInit {

  constructor(
    private userService:UserService,
    private router:Router,
    private token:TokenService) { }

  ngOnInit() {
    this.logout();
  }

  logout(){
    this.userService.logout().subscribe(
      data => this.handleLogout(),
      error => this.handleError(error)
    );
  }

  handleError(error: any): void {
    console.log(error);
  }

  handleLogout(): void {
    this.token.remove();
    this.router.navigate(['/login']);
  }

}
