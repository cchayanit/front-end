import { Profile } from './../../services/profile.model';
import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { ProfileService } from 'src/app/services/profile.service';

@Component({
  selector: 'app-profile-edit',
  templateUrl: './profile-edit.component.html',
  styleUrls: ['./profile-edit.component.css']
})
export class ProfileEditComponent implements OnInit {

  profile: Profile = new Profile();

  constructor(private profileService: ProfileService,
              private router: Router) { }

  ngOnInit(): void {
    this.edit(Profile);
  }

  // tslint:disable-next-line: no-shadowed-variable
  edit(Profile){
    const id: string = localStorage.getItem('id');
    this.profileService.getProfileID(+id)
      .subscribe(data => {
      this.profile = data;
    });
  }
  Update(profile: Profile){
    this.profileService.updateProfile(profile)
      .subscribe(data => {
      this.profile = data;
      alert('Completely edited');
      this.router.navigate(['profile']);
    });
  }
}

