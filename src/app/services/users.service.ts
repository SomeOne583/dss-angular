import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UsersService {
  url = 'http://127.0.0.1:3000/api/v1/users'
  
  httpOptions = {
    headers: new HttpHeaders("Authorization: Token token=f98e847a-03bc-43d3-8dfa-1f192902b15a")
  };
  
  constructor(private http: HttpClient) { }

  getUsers() {
    return this.http.get(this.url, this.httpOptions);
  }

  postUsers(user: object) {
    // console.log("I'm being called");
    return this.http.post(this.url, user, this.httpOptions);
  }
}