import { Component, OnInit } from '@angular/core';
import { TokenService } from '../Services/token.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  public isLoggedIn = false;
  
  constructor(
    private token:TokenService,
    private router:Router
  ) { }

  ngOnInit() {
    this.isLoggedIn = this.token.loggedIn();
  }

  logout(event: MouseEvent) {
    this.token.remove();
    this.router.navigate(['/login']);
  }

}
