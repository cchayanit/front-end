import { Title } from '@angular/platform-browser';
import { ProfileService } from './../services/profile.service';
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
              private profileService: ProfileService,
              private router: Router) { }

  ngOnInit(): void {
    this.currentUser = this.token.getUser();
    console.log(this.currentUser);


    this.profileService.getProfile().subscribe(
      (profiles) => {
        this.profiles = profiles; // profiles => from back-end
        console.log(this.profiles);
      }
    );
  }

  // reloadData() {
  //   this.profiles = this.profileService.getProfiles();
  //   console.log(this.profiles);
  // }

  edit( ): void{
    this.router.navigate(['profile-edit']);
    console.log(localStorage);
  }


}
