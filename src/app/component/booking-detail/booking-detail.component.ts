import {Component, Input, OnInit} from '@angular/core';
import {Observable} from 'rxjs';
import {ActivatedRoute, NavigationStart, Router} from '@angular/router';
import {filter, map} from 'rxjs/operators';

@Component({
  selector: 'app-booking-detail',
  templateUrl: './booking-detail.component.html',
  styleUrls: ['./booking-detail.component.css']
})
export class BookingDetailComponent implements OnInit {
  state$: Observable<Home>;
  homeBooking: Home = {};
  constructor(private activatedRoute: ActivatedRoute) { }

  ngOnInit() {
    this.getHomeBooking();
  }

  getHomeBooking() {
    this.state$ = this.activatedRoute.paramMap.pipe(map(() => window.history.state));
    this.state$.subscribe(result => {
      this.homeBooking = result;
    });
  }

  onSubmit() {
  }
}
