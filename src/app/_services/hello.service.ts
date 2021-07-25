import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

const API_URL = 'https://alansastre-springboot-jwt.herokuapp.com/api/';

@Injectable({
  providedIn: 'root'
})
export class HelloService {
  constructor(private http: HttpClient) { }

  helloWorld(): Observable<any> {
    return this.http.get(API_URL + 'hello', { responseType: 'text' });
  }

}
