import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Token } from '@angular/compiler/src/ml_parser/lexer';

@Injectable({
  providedIn: 'root'
})
export class GeneratorService {
  httpOptions = {
    headers: new HttpHeaders("Authorization: Token token=f98e847a-03bc-43d3-8dfa-1f192902b15a")
  };
  
  url = 'http://127.0.0.1:3000/api/v1/maze'
  
  constructor(private http: HttpClient) { }

  getMaze() {
    return this.http.get(this.url, this.httpOptions);
  }
}