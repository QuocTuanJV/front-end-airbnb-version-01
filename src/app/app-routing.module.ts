import { NgModule } from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {SignUpComponent} from './component/sign-up/sign-up.component';
import {HomePageComponent} from './component/home-page/home-page.component';
import {LoginComponent} from './component/login/login.component';

const routes: Routes = [
  {
    path: '', component: HomePageComponent
  },
  {
    path: 'sign-up', component: SignUpComponent
  },
  {
    path: 'login', component: LoginComponent
  }
  ];

@NgModule({
  declarations: [],
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
