import { Component, OnInit } from '@angular/core';
import {AuthLoginInfo} from '../../model/auth/AuthLoginInfo';
import {AuthService} from '../../services/auth.service';
import {TokenStorageService} from '../../services/token-storage.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  form: any = {};
  private loginInfo: AuthLoginInfo;
  roles: string[] = [];

  constructor(private authService: AuthService,
              private tokenStorage: TokenStorageService,
              private route: Router) { }

  ngOnInit() {
  }

  onSubmit() {
    console.log(this.form);
    this.loginInfo = new AuthLoginInfo(
      this.form.username,
      this.form.password
    );
    // send account info and get token from server
    this.authService.attemptAuth(this.loginInfo).subscribe(data => {
      console.log(data);
      // save token, username, authorities server response to session storage
      this.tokenStorage.saveToken(data.accessToken);
      this.tokenStorage.saveUsername(data.username);
      this.tokenStorage.saveAuthorities(data.authorities);
      // get roles from token stored
      this.roles = this.tokenStorage.getAuthorities();
      this.navigateUser(this.roles);
    });
  }

  navigateUser(roles: string[]): void {
    roles.forEach( r => {
      if (r === 'ROLE_ADMIN'){
        this.route.navigateByUrl('/admin');
      } else {
        this.route.navigateByUrl('/user');
      }
    });
  }
}
