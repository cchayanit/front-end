import { Cartoon } from './cartoon.model';
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CartoonService {
  [x: string]: any;
  cartoon: Cartoon;

  httpOptions = {
    headers: new HttpHeaders({'Content-Type': 'application/json'})
  };

  constructor(private http: HttpClient) { }

  Url = ' http://localhost:8080/api/contents';

  getCartoon(): Observable<Cartoon[]> {
    return this.http.get<Cartoon[]>(this.Url);
  }

  getCartoonID(id: number){
    return this.http.get<Cartoon>(this.Url + '/' + id);
  }

  createCartoon(cartoons: Cartoon){
    return this.http.post<Cartoon>(this.Url, cartoons);
  }

  deleteCartoon(cartoons: Cartoon){
    return this.http.delete<Cartoon>(this.Url + '/' + cartoons.id);
  }

  updateCartoon(cartoons: Cartoon){
    return this.http.put<Cartoon>(this.Url + '/' + cartoons. id, cartoons);
  }

}
