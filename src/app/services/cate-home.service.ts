import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CateHomeService {
  private urlGetCateHome = 'http://localhost:8080/api/auth/cate-homes';

  constructor(private http: HttpClient) { }

  getCateHome(): Observable<CateHome[]> {
    return this.http.get<CateHome[]>(this.urlGetCateHome);
  }
}
