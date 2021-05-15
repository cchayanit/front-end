import { Profile } from './../../services/profile.model';
import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { ProfileService } from 'src/app/services/profile.service';
import { TokenStorageService } from 'src/app/services/token-storage.service';


@Component({
  selector: 'app-profile-edit',
  templateUrl: './profile-edit.component.html',
  styleUrls: ['./profile-edit.component.css']
})
export class ProfileEditComponent implements OnInit {

  profile: Profile = new Profile();
  currentUser: any;

  constructor(private profileService: ProfileService,
              private router: Router,
              private token: TokenStorageService) { }

  ngOnInit(): void {

    this.edit(Profile);
    this.currentUser = this.token.getUser();
    console.log(this.currentUser.id);

    this.profileService.getProfile().subscribe(
      (profiles) => {
        this.profile = profiles; // profiles => from back-end
        console.log(this.profile);
      }
    );
  }

  // tslint:disable-next-line: no-shadowed-variable
  edit(Profile){
    const id: string = localStorage.getItem('id');
    // console.log(id);
    this.profileService.getProfileID(+id)
      .subscribe(data => {
      this.profile = data;
    });
  }
  Update(profile: Profile){
    this.profileService.updateProfile(profile, this.currentUser.id)
      .subscribe(data => {
      this.profile = data;
      alert('Completely edited');
      this.router.navigate(['profile']);
    });
  }
}

