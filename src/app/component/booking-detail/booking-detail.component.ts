import {Component, Input, OnInit} from '@angular/core';
import {Observable} from 'rxjs';
import {ActivatedRoute, NavigationStart, Router} from '@angular/router';
import {filter, map} from 'rxjs/operators';
import {TokenStorageService} from '../../services/token-storage.service';
import {BookingService} from '../../services/booking.service';
import {HomeService} from '../../services/home.service';

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
  valueStatusBook = 0;
  idUserBooking = 0;
  form: any = {};
  constructor(private activatedRoute: ActivatedRoute,
              private tokenStorageService: TokenStorageService,
              private bookingService: BookingService,
              private homeService: HomeService,
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
        timeBookOut: this.form.timeBookOut,
        statusBook: this.valueStatusBook
      };
    });
  }

  onSubmit() {
    this.getHomeBooking();
    console.log('id User booking: ' + this.bookingInfo.idUser);
    console.log('id Home booking: ' + this.bookingInfo.idHome);
    console.log('Time booking: ' + this.bookingInfo.timeBook);
    this.createBooking(this.bookingInfo);
    this.updateStatusHomeById(this.bookingInfo.idHome);
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

  updateStatusHomeById(id: any): void {
    this.homeService.updateStatus(id).subscribe(result => {
      console.log('home id = ' + this.bookingInfo.idHome + 'is disable');
    });
  }
  goHomePage() {
    this.router.navigate(['/']);
  }

}
