import { Injectable } from '@angular/core';
import {ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree} from '@angular/router';
import {Permissions} from './permissions';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthGuardService implements CanActivate {

  constructor(private router: Router,
              private permission: Permissions) { }

  canActivate(route: ActivatedRouteSnapshot,
              state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    if (this.permission._isAdmin()) {
      return this.permission._isAdmin();
    } else {
      // this.router.navigate(['/not-found'], { queryParams: { retUrl: route.url} })
      this.router.navigate(['/not-found']);
      return false;
    }

  }
}
