import { ProfileEditComponent } from './action/profile-edit/profile-edit.component';
import { ProfileComponent } from './profile/profile.component';
import { CartoonEditComponent } from './action/cartoon-edit/cartoon-edit.component';
import { CartoonAddComponent } from './action/cartoon-add/cartoon-add.component';
import { CartoonDetailComponent } from './action/cartoon-detail/cartoon-detail.component';
import { SignUpComponent } from './sign-up/sign-up.component';
import { LogInComponent } from './log-in/log-in.component';
import { CartoonsComponent } from './cartoons/cartoons.component';
import { HomeComponent } from './home/home.component';
import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'cartoons', component: CartoonsComponent},
  {path: 'log-in', component: LogInComponent},
  {path: 'sign-up', component: SignUpComponent},
  {path: 'cartoons/:id', component: CartoonDetailComponent},
  {path: 'add', component: CartoonAddComponent},
  {path: 'edit', component: CartoonEditComponent},
  {path: 'profile', component: ProfileComponent},
  {path: 'profile-edit', component: ProfileEditComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
