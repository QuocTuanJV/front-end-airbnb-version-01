import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { MenuComponent } from './component/menu/menu.component';
import { AppRoutingModule } from './app-routing.module';
import { SignUpComponent } from './component/sign-up/sign-up.component';
import { HomePageComponent } from './component/home-page/home-page.component';

@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    SignUpComponent,
    HomePageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
