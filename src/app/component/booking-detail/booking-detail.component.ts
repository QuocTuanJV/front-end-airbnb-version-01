import {Component, Input, OnInit} from '@angular/core';
import {Observable} from 'rxjs';
import {ActivatedRoute, NavigationStart, Router} from '@angular/router';
import {filter, map} from 'rxjs/operators';
import {TokenStorageService} from '../../services/token-storage.service';
import {BookingService} from '../../services/booking.service';

@Component({
  selector: 'app-booking-detail',
  templateUrl: './booking-detail.component.html',
  styleUrls: ['./booking-detail.component.css']
})
export class BookingDetailComponent implements OnInit {
  state$: Observable<Home>;
  homeBooking: Home = {};
  bookingInfo: Booking = {};
  userNameBooking = '';
  idUserBooking = 0;
  form: any = {};
  constructor(private activatedRoute: ActivatedRoute,
              private tokenStorageService: TokenStorageService,
              private bookingService: BookingService,
              private router: Router) { }

  ngOnInit() {
    this.getUserNameBooking();
    console.log('Init: ' + this.userNameBooking);
    this.setIdUserBooking(this.userNameBooking);
    console.log('Init: ' + this.idUserBooking);
  }

  getHomeBooking() {
    this.state$ = this.activatedRoute.paramMap.pipe(map(() => window.history.state));
    this.state$.subscribe(result => {
      this.homeBooking = result;
      this.bookingInfo = {
        idUser: this.idUserBooking,
        idHome: this.homeBooking.id,
        timeBook: this.form.timeBook,
        timeBookOut: this.form.timeBookOut
      };
    });
  }

  onSubmit() {
    this.getHomeBooking();
    console.log('id User booking: ' + this.bookingInfo.idUser);
    console.log('id Home booking: ' + this.bookingInfo.idHome);
    console.log('Time booking: ' + this.bookingInfo.timeBook);
    this.createBooking(this.bookingInfo);
  }

  setIdUserBooking(nameUser: any) {
    this.bookingService.getIdUserBooking(nameUser).subscribe(result =>
    this.idUserBooking = result);
  }

  getUserNameBooking(): void {
    this.userNameBooking = this.tokenStorageService.getUsername();
  }
  createBooking(booking: Booking) {
    this.bookingService.create(booking).subscribe(result => {
      alert('Booking successfully!');
      this.goHomePage();
    });
  }

  goHomePage() {
    this.router.navigate(['/']);
  }
}
