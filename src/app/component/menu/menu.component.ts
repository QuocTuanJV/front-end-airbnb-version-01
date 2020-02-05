import { Component, OnInit } from '@angular/core';
import {TokenStorageService} from '../../services/token-storage.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {
  info: any;

  constructor(private token: TokenStorageService) { }

  ngOnInit() {
    this.info = {
        token: this.token.getToken()
    };
  }

}
