import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { login } from '../interfaces/login';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  BASE_URL: string = 'http://localhost:3200';
  constructor(private http: HttpClient) { }

  // getUserLogin(userLogin: login): Observable<login>{
  //   return this.http.get<login>(`${this.BASE_URL}/login`, userLogin);
  // }
}
