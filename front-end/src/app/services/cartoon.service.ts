import { Cartoon } from './cartoon.model';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CartoonService {

  constructor(private http: HttpClient) { }

  Url = ' http://localhost:8080/api/contents';

  getCatoon(): Observable<Cartoon[]> {
    return this.http.get<Cartoon[]>(this.Url);
  }
}
