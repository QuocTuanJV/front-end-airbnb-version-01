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
  private urlGetHomes = 'http://localhost:8080/api/auth/homes';
  private urlGetHome = 'http://localhost:8080/api/auth/home';
  private urlUpdateStatusHome = 'http://localhost:8080/api/auth/booking/update-status';

  constructor(private http: HttpClient) { }


  saveHome(formData: FormData): Observable<any> {
    return this.http.post<any>(this.urlAddHome, formData);
  }

  getHomes(): Observable<Home[]> {
    return this.http.get<Home[]>(this.urlGetHomes);
  }

  getHome(id: number): Observable<Home> {
    const url = `${this.urlGetHome}/${id}`;
    return this.http.get<Home>(url);
  }

  updateStatus(id: any): Observable<any> {
    const url = `${this.urlUpdateStatusHome}/${id}`;
    return this.http.patch<any>(url, httpOptions);
  }
}
