import {TokenStorageService} from '../token-storage.service';
import {Injectable} from '@angular/core';
import {Router} from '@angular/router';

@Injectable()
export class Permissions {
  constructor(private token: TokenStorageService,
              private router: Router) {}

  _canActivate(): boolean {
    if (this.token.getToken()) {
      return true;
    } else {
      return false;
    }
  }

  _isAdmin(): boolean {
    if (this.token.getAuthorities()[0] === 'ROLE_ADMIN') {
      return true;
    } else {
      return false;
    }
  }
}
