import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { HomeComponent } from './home/home.component';
import { LogInComponent } from './log-in/log-in.component';
import { SignUpComponent } from './sign-up/sign-up.component';
import { CartoonsComponent } from './cartoons/cartoons.component';
import { CartoonDetailComponent } from './action/cartoon-detail/cartoon-detail.component';
import { CartoonAddComponent } from './action/cartoon-add/cartoon-add.component';
import { CartoonEditComponent } from './action/cartoon-edit/cartoon-edit.component';
import { FormsModule } from '@angular/forms';
import { ProfileComponent } from './profile/profile.component';
import { ProfileEditComponent } from './action/profile-edit/profile-edit.component';



@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent,
    LogInComponent,
    SignUpComponent,
    CartoonsComponent,
    CartoonDetailComponent,
    CartoonAddComponent,
    CartoonEditComponent,
    ProfileComponent,
    ProfileEditComponent

  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
