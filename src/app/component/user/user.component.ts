import {Component, Input, OnInit} from '@angular/core';
import {TokenStorageService} from '../../services/token-storage.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
  roles: string[] = [];
  info: any =  {};

  constructor(private token: TokenStorageService,
              private route: Router) { }
  ngOnInit() {
    this.info = {
      token: this.token.getToken(),
      username: this.token.getUsername(),
      authorities: this.token.getAuthorities()
    };
    this.roles = this.info.authorities;
  }

  logOut() {
    this.token.signOut();
    this.navigateAfterLogOut();
  }
  navigateAfterLogOut() {
    this.route.navigateByUrl('/');
  }
  isAdmin(): boolean {
    const isAdmin = this.roles.find(r => r === 'ROLE_ADMIN');
    if (isAdmin !== undefined) {
     return true;
   } else {
     return false;
    }
  }
}
