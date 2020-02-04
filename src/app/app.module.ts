import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { MenuComponent } from './component/menu/menu.component';
import { AppRoutingModule } from './app-routing.module';
import { SignUpComponent } from './component/sign-up/sign-up.component';
import { HomePageComponent } from './component/home-page/home-page.component';
import {FormBuilder, FormsModule, ReactiveFormsModule} from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import { LoginComponent } from './component/login/login.component';
import { UserComponent } from './component/user/user.component';
import { NotFoundComponent } from './component/not-found/not-found.component';
import {httpInterceptorProviders} from './auth-interceptor';
import {Permissions} from './services/deactive/permissions';
import {AuthGuardService} from './services/deactive/auth-guard.service';
import { LoadcateComponent } from './component/loadcate/loadcate.component';
import {FileComponent} from './component/file/file.component';
import { AddHomeComponent } from './component/add-home/add-home.component';
import { AddCategoryRoomComponent } from './component/add-category-room/add-category-room.component';
import { AddCategoryHomeComponent } from './component/add-category-home/add-category-home.component';


@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    SignUpComponent,
    HomePageComponent,
    LoginComponent,
    UserComponent,
    NotFoundComponent,
    FileComponent,
    LoadcateComponent,
    AddHomeComponent,
    AddCategoryRoomComponent,
    AddCategoryHomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [httpInterceptorProviders, Permissions, AuthGuardService, FormBuilder],
  bootstrap: [AppComponent]
})
export class AppModule { }
