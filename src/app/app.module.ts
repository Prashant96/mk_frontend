import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { MaterialModule} from './material/material.module'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { ForgotPinComponent } from './forgot-pin/forgot-pin.component';
import { HeaderComponent } from './header/header.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SidenavComponent } from './sidenav/sidenav.component';
import { FormsModule } from '@angular/forms';
import { MenubarComponent } from './menubar/menubar.component';
import { ListComponent } from './list/list.component';
import { GridListComponent } from './grid-list/grid-list.component';
import { ExpansionPanelComponent } from './expansion-panel/expansion-panel.component';
import { CardComponent } from './card/card.component';

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    LoginComponent,
    RegisterComponent,
    ForgotPinComponent,
    HeaderComponent,
    SidenavComponent,
    MenubarComponent,
    ListComponent,
    GridListComponent,
    ExpansionPanelComponent,
    CardComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
