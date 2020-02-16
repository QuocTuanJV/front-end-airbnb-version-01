import { Injectable } from '@angular/core';
import {HttpClient, HttpParams} from '@angular/common/http';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CommentService {
  private urlGetCommentByIdHome = 'http://localhost:8080/api/auth/comment/get-comment';
  private urlAddNewComment = 'http://localhost:8080/api/auth/comment/add-comment';

  constructor(private http: HttpClient) { }

  getCommentByIdHome(id: any): Observable<Comment[]> {
    const params = new HttpParams()
      .set('id', id);
    return this.http.get<Comment[]>(this.urlGetCommentByIdHome, {params});
  }


  saveComment(dataComment: any): Observable<string> {
    return this.http.post<string>(this.urlAddNewComment, dataComment );
  }
}
