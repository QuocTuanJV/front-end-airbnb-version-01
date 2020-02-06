import { Injectable } from '@angular/core';
import {HttpClient, HttpParams} from '@angular/common/http';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CateHomeService {
  private urlGetCateHome = 'http://localhost:8080/api/auth/cate-homes';
  private urlAddCateHome = 'http://localhost:8080/api/auth/add-cate-home';
  private urlGetNameCateHome = 'http://localhost:8080/api/auth/name-cate-home';

  constructor(private http: HttpClient) { }

  getCateHome(): Observable<CateHome[]> {
    return this.http.get<CateHome[]>(this.urlGetCateHome);
  }

  addNewCateHome(cateHomeRegisInfo: CateHome): Observable<any> {
    return this.http.post<any>(this.urlAddCateHome, cateHomeRegisInfo);
  }

  getNameCateHomeRequest(id: any): Observable<CateHome> {
    const params = new HttpParams()
      .set('id', id);
    return this.http.get<CateHome>(this.urlGetNameCateHome, {params} );
  }
}
