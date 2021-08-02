import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

 //const API_URL = 'https://m5-apirest-postgresql.herokuapp.com/api/';
const API_URL = 'https://m5-apirest-postgresql.herokuapp.com/api/';

@Injectable({
  providedIn: 'root'
})
export class CarsService {
  constructor(private http: HttpClient) { }

  findAll(): Observable<any> {
    return this.http.get(API_URL + 'cars');
  }

}
