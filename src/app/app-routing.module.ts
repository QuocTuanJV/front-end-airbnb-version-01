import { NgModule } from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {SignUpComponent} from './component/sign-up/sign-up.component';
import {HomePageComponent} from './component/home-page/home-page.component';
import {LoginComponent} from './component/login/login.component';
import {UserComponent} from './component/user/user.component';
import {NotFoundComponent} from './component/not-found/not-found.component';
import {AuthGuardService} from './services/deactive/auth-guard.service';

import {LoadcateComponent} from './component/loadcate/loadcate.component';
import {FileComponent} from './component/file/file.component';
import {AddHomeComponent} from './component/add-home/add-home.component';
import {AddCategoryRoomComponent} from './component/add-category-room/add-category-room.component';
import {AddCategoryHomeComponent} from './component/add-category-home/add-category-home.component';
import {BookingDetailComponent} from './component/booking-detail/booking-detail.component';
import {HomeListComponent} from './component/home-list/home-list.component';
import {HomeDetailComponent} from './component/home-detail/home-detail.component';


const routes: Routes = [
  {
    path: '', component: HomePageComponent
  },
  {
    path: 'sign-up', component: SignUpComponent
  },
  {
    path: 'login', component: LoginComponent
  },
  // {
  //   path: 'admin', component: AdminComponent, canActivate: [AuthGuardService]
  // },
  {
    path: 'user', component: UserComponent
  },
  {
    path: 'not-found', component: NotFoundComponent
  },
  {
    path: 'upload', component: FileComponent
  },
  {
    path: 'add-cate-room', component: AddCategoryRoomComponent, canActivate: [AuthGuardService]
  },
  {
    path: 'add-cate-home', component: AddCategoryHomeComponent, canActivate: [AuthGuardService]
  },
  {
    path: 'add-home', component: AddHomeComponent, canActivate: [AuthGuardService]
  },
  {
    path: 'home-list', component: HomeListComponent
  },
  {
    path: 'home-detail/:id', component: HomeDetailComponent
  },
  // {
  //   path: 'booking/add-booking/:id', component: BookingDetailComponent
  // },
  {
    path: 'booking/add-booking', component: BookingDetailComponent
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
