import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable} from 'rxjs';
import {SignUpInfo} from '../model/auth/SignUpInfo';
import {AuthLoginInfo} from '../model/auth/AuthLoginInfo';
import {JwtResponse} from '../model/auth/JwtResponse';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json'
  })
};
@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private signupUrl = 'http://localhost:8080/api/auth/signup';
  private loginUrl = 'http://localhost:8080/api/auth/signin';

  constructor(private http: HttpClient) { }

  signUp(signupInfo: SignUpInfo): Observable<string> {
    return this.http.post<string>(this.signupUrl, signupInfo, httpOptions);
  }

  attemptAuth(loginInfo: AuthLoginInfo): Observable<JwtResponse> {
    return this.http.post<JwtResponse>(this.loginUrl, loginInfo, httpOptions);
  }
}
