import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders, HttpParams} from '@angular/common/http';
import {Observable} from 'rxjs';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json'
  })
};

@Injectable({
  providedIn: 'root'
})
export class BookingService {
  private urlGetIdUserBookingByNameUser = 'http://localhost:8080/api/auth/booking/get-id-user-book';
  private urlCreateBooking = 'http://localhost:8080/api/auth/booking/add-booking';
  private urlGetBookingByIdUser = 'http://localhost:8080/api/auth/user/list-booking';
  private urlUpdateStatusBooking = 'http://localhost:8080/api/auth/booking/cancel-booking';
  constructor(private http: HttpClient) { }


  getIdUserBooking(nameUser: any): Observable<any> {
    const params = new HttpParams()
      .set('username', nameUser);
    return this.http.get<any>(this.urlGetIdUserBookingByNameUser, {params});
  }

  create(booking: Booking): Observable<any> {
    return this.http.post<any>(this.urlCreateBooking, booking);
  }

  getBookingById(idUser: any): Observable<any> {
    const params = new HttpParams()
      .set('idUser', idUser);
    return this.http.get<any>(this.urlGetBookingByIdUser, {params});
  }

  updateStatusBooking(id: any): Observable<any> {
  //   const params = new HttpParams()
  //     .set('id', id);
  //   return this.http.patch<any>(this.urlUpdateStatusBooking, {params});
    const url = `${this.urlUpdateStatusBooking}/${id}`;
    return this.http.patch<any>(url, httpOptions);
  }
}
