import { Component, OnInit } from '@angular/core';
import {HomeService} from '../../services/home.service';
import {ActivatedRoute} from '@angular/router';
import {CateRoomService} from '../../cate-room.service';
import {CateHomeService} from '../../services/cate-home.service';

@Component({
  selector: 'app-home-detail',
  templateUrl: './home-detail.component.html',
  styleUrls: ['./home-detail.component.css']
})
export class HomeDetailComponent implements OnInit {
  home: Home = {};
  cateRoom: CateRoom = {};
  cateHome: CateHome = {};

  constructor(private homeService: HomeService,
              private cateRoomService: CateRoomService,
              private cateHomeService: CateHomeService,
              private route: ActivatedRoute) { }

  ngOnInit() {
    this.getHomeById();
  }

   getHomeById() {
    const id = +this.route.snapshot.paramMap.get('id');
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

}
