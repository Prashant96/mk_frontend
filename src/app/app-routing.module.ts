import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { ForgotPinComponent } from './forgot-pin/forgot-pin.component';
import { SidenavComponent } from './sidenav/sidenav.component';


const routes: Routes = [
  {path: '', pathMatch: 'full', redirectTo: 'sidenav'},
  {path: 'dashboard', component: DashboardComponent},
  {path: 'login', component: LoginComponent},
  {path: 'register', component: RegisterComponent},
  {path: 'forgot-pin', component: ForgotPinComponent},
  {path: 'sidenav' ,component: SidenavComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
