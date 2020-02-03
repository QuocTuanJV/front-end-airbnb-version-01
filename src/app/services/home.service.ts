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
  private urlGetHome = 'http://localhost:8080/api/auth/homes';

  constructor(private http: HttpClient) { }


  saveHome(formData: FormData): Observable<any> {
    return this.http.post<any>(this.urlAddHome, formData);
  }

  getHomes(): Observable<Home[]> {
    return this.http.get<Home[]>(this.urlGetHome);
  }
}
