import { Component, OnInit } from '@angular/core';
import {BookingService} from '../../services/booking.service';
import {TokenStorageService} from '../../services/token-storage.service';
import {HomeService} from '../../services/home.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-list-my-booking',
  templateUrl: './list-my-booking.component.html',
  styleUrls: ['./list-my-booking.component.css']
})
export class ListMyBookingComponent implements OnInit {
  bookies: Booking[] = [];
  homes: Home[] = [];
  idUser = 0;
  constructor(private bookingService: BookingService,
              private tokenStorageService: TokenStorageService,
              private homeService: HomeService,
              private router: Router) { }

  ngOnInit() {
    this.getIdUserByUserName();
    this.getHome();
    console.log(this.bookies.length);
  }

  getListBookingById(idUser: any) {
    this.bookingService.getBookingById(idUser).subscribe(result => {
      this.bookies = result;
    });
  }

  getIdUserByUserName() {
    const userNameBooking = this.tokenStorageService.getUsername();
    this.bookingService.getIdUserBooking(userNameBooking).subscribe(result => {
      this.idUser = result;
      this.getListBookingById(this.idUser);
    });
  }

  getHome() {
    this.homeService.getHomes().subscribe(result => {
      this.homes = result;
    });
  }

  createMyBookieInfo(bookies: Booking[], homes: Home[]): any {
    const mybookiesDisplay = [];
    bookies.forEach(element => {
      homes.forEach(h => {
        if (element.idHome === h.id) {
          mybookiesDisplay.push({
            id: element.id,
            home: h,
            status: element.statusBook
          });
        }
      });
    });
    return mybookiesDisplay;
  }
  isDisplayMyListBooking(value: number): boolean {
    if (value === 0) { return true;
    } else {
      return false;
    }
  }

  cancelBooking(id: any) {
    console.log('id cancel : ' + id);
    this.bookingService.updateStatusBooking(id).subscribe(result => {
      alert('cancel booking successfull');
      this.goMyListBooking();
    });
  }
  goMyListBooking() {
      window.location.reload();
  }
}
