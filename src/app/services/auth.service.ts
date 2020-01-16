import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable} from 'rxjs';
import {SignUpInfo} from '../model/SignUpInfo';

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

  constructor(private http: HttpClient) { }

  signUp(signupInfo: SignUpInfo): Observable<string> {
    return this.http.post<string>(this.signupUrl, signupInfo, httpOptions);
  }
}
