import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class GeneratorService {

  constructor(private http: HttpClient) { }

  getMaze() {
    return this.http.get('http://127.0.0.1:3000/api/v1/maze');
  }
}
