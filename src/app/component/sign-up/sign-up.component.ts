import {Component, OnInit} from '@angular/core';

import {error} from 'util';
import {Router} from '@angular/router';
import {SignUpInfo} from '../../model/auth/SignUpInfo';
import {AuthService} from '../../services/auth.service';


@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent implements OnInit {
  form: any = {};
  signupInfo: SignUpInfo;
  isSignUpFailed = false;
  errorMessage = '';

  constructor(private authService: AuthService,
              private router: Router) {
  }

  ngOnInit() {
  }

  onSubmit() {
    console.log(this.form);
    // get info from form to create object
    this.signupInfo = new SignUpInfo(
      this.form.name,
      this.form.username,
      this.form.email,
      this.form.password);

    // use auth service to send request and receive response
    // after response use subscribe to update ...
    this.authService.signUp(this.signupInfo).subscribe(
      data => {
      alert('Register Success');
      this.goHomePage();
      this.isSignUpFailed = false;
    },
      // tslint:disable-next-line:no-shadowed-variable
      error => {
      console.log(error);
      this.errorMessage = error.error.message;
      this.isSignUpFailed = true;
      }
    );

  }

  goHomePage() {
    this.router.navigate(['/']);
  }

}
