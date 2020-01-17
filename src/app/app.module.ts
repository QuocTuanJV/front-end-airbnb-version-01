import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { MenuComponent } from './component/menu/menu.component';
import { AppRoutingModule } from './app-routing.module';
import { SignUpComponent } from './component/sign-up/sign-up.component';
import { HomePageComponent } from './component/home-page/home-page.component';
import {FormsModule} from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import { LoginComponent } from './component/login/login.component';
import { AdminComponent } from './component/admin/admin.component';
import { UserComponent } from './component/user/user.component';
import { NotFoundComponent } from './component/not-found/not-found.component';
import {httpInterceptorProviders} from './auth-interceptor';
import {Permissions} from './services/deactive/permissions';
import {AuthGuardService} from './services/deactive/auth-guard.service';

@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    SignUpComponent,
    HomePageComponent,
    LoginComponent,
    AdminComponent,
    UserComponent,
    NotFoundComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [httpInterceptorProviders, Permissions, AuthGuardService],
  bootstrap: [AppComponent]
})
export class AppModule { }
