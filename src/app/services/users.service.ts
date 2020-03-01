import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UsersService {
  url = 'http://127.0.0.1:3000/api/v1/users'

  constructor(private http: HttpClient) { }

  getUsers() {
    return this.http.get(this.url);
  }

  postUsers(user: object) {
    // console.log("I'm being called");
    return this.http.post(this.url, user);
  }
}
