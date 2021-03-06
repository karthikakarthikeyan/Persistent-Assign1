import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { User } from '../models/user';
import { IMovies } from './../movies';


@Injectable()
export class AuthService {
  public BASE_URL = 'http://localhost:3000';

  constructor(private http: HttpClient) {}

  getToken(): string {
    return localStorage.getItem('token');
  }

  logIn(email: string, password: string): Observable<any> {
    const url = `${this.BASE_URL}/register`;
    return this.http.get<User>(url,   {
      params: {
        email: email,
        password: password
      }});
  }
  

  signUp(email: string, password: string): Observable<User> {
    const url = `${this.BASE_URL}/register`; 
    return this.http.post<User>(url, {email, password});
  }

  getMovies(): Observable<IMovies[]> {
    const url = `${this.BASE_URL}/movies`; 
    return this.http.get<IMovies[]>(url);

 }
}