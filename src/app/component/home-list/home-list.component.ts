import { Component, OnInit } from '@angular/core';
import {HomeService} from '../../services/home.service';

@Component({
  selector: 'app-home-list',
  templateUrl: './home-list.component.html',
  styleUrls: ['./home-list.component.css']
})
export class HomeListComponent implements OnInit {
  homes: Home[] = [];

  constructor(private homeService: HomeService) { }

  ngOnInit() {
    this.getHome();
  }
  private getHome(): void {
    this.homeService.getHomes().subscribe(data => {
      this.homes = data;
    });
  }



}
