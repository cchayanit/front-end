import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Profile } from './profile.model';

@Injectable({
  providedIn: 'root'
})
export class ProfileService {
  [x: string]: any;
  profile: Profile;

  httpOptions = {
    headers: new HttpHeaders({'Content-Type': 'application/json'})
  };

  constructor(private http: HttpClient) { }

  Url = ' http://localhost:9090/api/path/accounts';

  getProfile(): Observable<Profile> {
    return this.http.get<Profile>(this.Url);
  }

  getProfileID(id: number){
    return this.http.get<Profile>(this.Url + '/' + id);
  }

  updateProfile(profile: Profile, id: any): Observable<Profile>{
    return this.http.put<Profile>(this.Url + '/' + id, profile);
  }



}
