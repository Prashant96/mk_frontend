import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from 'src/environments/environment';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type':  'application/json',
    'Authorization': 'my-auth-token'
  })
};

@Injectable({
  providedIn: 'root'
})
export class UserService {
  baseUrl: any;
  constructor(private http: HttpClient) {
    this.baseUrl = environment.baseUrl;
   }
   

   getAllUsers(){
     return this.http.get(this.baseUrl+'/users');
   }
   

   registerUser(user){
     console.log(httpOptions);
      return this.http.post(this.baseUrl+'/register', user);
   }
}
