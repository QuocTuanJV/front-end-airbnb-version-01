import { Injectable } from '@angular/core';
import {Observable} from 'rxjs';
import {HttpClient, HttpClientModule, HttpEvent, HttpHeaders, HttpParams} from '@angular/common/http';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json'
  })
};
@Injectable({
  providedIn: 'root'
})
export class CateRoomService {
  private getCateRoomUrl = 'http://localhost:8080/api/auth/cate-rooms';
  private addNewCateRoomUrl = 'http://localhost:8080/api/auth/add-cate-room';
  private urlGetNameCateRoom = 'http://localhost:8080/api/auth/name-cate-room';
  constructor(private http: HttpClient) { }

  getCate(): Observable<CateRoom[]> {
    return this.http.get<CateRoom[]>(this.getCateRoomUrl);
  }

  addNewCateRoom(cateRoomRegisInfo: CateRoom): Observable<string> {
    return this.http.post<string>(this.addNewCateRoomUrl, cateRoomRegisInfo);
  }

  getNameCateRoomRequest(cateRoomId: any): Observable<CateRoom> {
    const params = new HttpParams()
      .set('id', cateRoomId);
    return this.http.get<CateRoom>(this.urlGetNameCateRoom, {params});
  }
}
