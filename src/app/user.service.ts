import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  baseUrl: any;
  constructor(private http: HttpClient) {
    this.baseUrl = environment.baseUrl;
   }
   
   getAllUsers(){
     return this.http.get(this.baseUrl+'/api/users');
   }

   login(form){
    return this.http.post<any>(this.baseUrl+'/api/login', form);
   }
   
   registerUser(form){
      return this.http.post(this.baseUrl+'/api/signup', form);
   }

   logout() {
    return this.http.post(this.baseUrl+'/api/logout', []);    
  }
}
