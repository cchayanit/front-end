import { Profile } from './../services/profile.model';
import { Router } from '@angular/router';
import { TokenStorageService } from './../services/token-storage.service';
import { Component, OnInit } from '@angular/core';



@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  [x: string]: any;

  currentUser: any;

  constructor(private token: TokenStorageService,
              private router: Router) { }

  ngOnInit(): void {
    this.currentUser = this.token.getUser();
    console.log(this.currentUser);
  }


  edit(currentUser: Profile): void{
    localStorage.setItem('currentUser.id', Profile.id); //////
    this.router.navigate(['profile-edit', this.currentUser.id]);
    console.log(localStorage);
  }


}
