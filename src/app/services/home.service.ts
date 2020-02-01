import { Injectable } from '@angular/core';
import {Observable} from 'rxjs';
import {HttpClient, HttpHeaders} from '@angular/common/http';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json'
  })
};
@Injectable({
  providedIn: 'root'
})
export class HomeService {
  private urlAddHome = 'http://localhost:8080/api/auth/home/add-home';

  constructor(private http: HttpClient) { }


  saveHome(formData: FormData): Observable<any> {
    return this.http.post<any>(this.urlAddHome, formData);
  }
}
