import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {HomeService} from '../../services/home.service';
import {ActivatedRoute, NavigationStart, Router} from '@angular/router';
import {CateRoomService} from '../../cate-room.service';
import {CateHomeService} from '../../services/cate-home.service';
import {Observable} from 'rxjs';
import {filter, map} from 'rxjs/operators';

@Component({
  selector: 'app-home-detail',
  templateUrl: './home-detail.component.html',
  styleUrls: ['./home-detail.component.css']
})
export class HomeDetailComponent implements OnInit {
  home: Home = {};
  cateRoom: CateRoom = {};
  cateHome: CateHome = {};
  state$: Observable<Home>;
  urlBooking = '/booking/add-booking';

  constructor(private homeService: HomeService,
              private cateRoomService: CateRoomService,
              private cateHomeService: CateHomeService,
              private activatedRoute: ActivatedRoute,
              private router: Router) { }

  ngOnInit() {
    this.getHomeById();
    this.convertDataToSendByRouterLink();
  }

   getHomeById() {
    const id = +this.activatedRoute.snapshot.paramMap.get('id');
    this.homeService.getHome(id).subscribe(data => {
      this.home = data;
      this.setNameCateHomeOfHome(this.home.cateHome);
      this.setNameCateRoomOfHome(this.home.cateRoom);
    });
  }
  setNameCateRoomOfHome(id: any) {
    this.cateRoomService.getNameCateRoomRequest(id).subscribe(result => {
      this.cateRoom = result;
    });
  }
  setNameCateHomeOfHome(id: any) {
    this.cateHomeService.getNameCateHomeRequest(id).subscribe(result => {
      this.cateHome = result;
    });
  }

  convertDataToSendByRouterLink() {
    this.state$ = this.router.events.pipe(
      filter(e => e instanceof NavigationStart),
      map(() => {
        const currentNav = this.router.getCurrentNavigation();
        return currentNav.extras.state;
      })
    );
  }

  sendHomeToBooking() {
    this.router.navigateByUrl(this.urlBooking, {state: this.home});
  }
}
