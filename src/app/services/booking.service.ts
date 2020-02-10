import { Injectable } from '@angular/core';
import {HttpClient, HttpParams} from '@angular/common/http';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BookingService {
  private urlGetIdUserBookingByNameUser = 'http://localhost:8080/api/auth/booking/get-id-user-book';
  private urlCreateBooking = 'http://localhost:8080/api/auth/booking/add-booking';
  constructor(private http: HttpClient) { }


  getIdUserBooking(nameUser: any): Observable<any> {
    const params = new HttpParams()
      .set('username', nameUser);
    return this.http.get<any>(this.urlGetIdUserBookingByNameUser, {params});
  }

  create(booking: Booking): Observable<any> {
    return this.http.post<any>(this.urlCreateBooking, booking);
  }
}
