import { Injectable } from '@angular/core';
import {Observable} from 'rxjs';
import {HttpClient, HttpClientModule, HttpHeaders} from '@angular/common/http';

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
  constructor(private http: HttpClient) { }

  getCate(): Observable<Cateroom[]> {
    return this.http.get<Cateroom[]>(this.getCateRoomUrl);
  }

  addNewCateRoom(cateRoomRegisInfo: Cateroom): Observable<string> {
    return this.http.post<string>(this.addNewCateRoomUrl, cateRoomRegisInfo);
  }
}
