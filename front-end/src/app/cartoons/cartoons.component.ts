import { CartoonService } from './../services/cartoon.service';
import { Title } from '@angular/platform-browser';
import { Component, OnInit } from '@angular/core';
import { Cartoon } from '../services/cartoon.model';
import { Router } from '@angular/router';


@Component({
  selector: 'app-cartoons',
  templateUrl: './cartoons.component.html',
  styleUrls: ['./cartoons.component.css']
})
export class CartoonsComponent implements OnInit {

  [x: string]: any;

  cartoons: Cartoon[];


  constructor(private title: Title, private cartoonService: CartoonService, private router: Router) { }

  Add(){
    this.router.navigate(['add']);
  }

  ngOnInit(): void {
    this.title.setTitle('Catoons');
    // tslint:disable-next-line: deprecation
    this.cartoonService.getCartoon().subscribe(
      (cartoons) => {
        this.cartoons = cartoons; // cartoon => from back-end
        console.log(this.cartoons);
      }
    );
  }

  reloadData() {
    this.cartoons = this.cartoonService.getCartoons();
  }

  delete(c: Cartoon): void {
    // tslint:disable-next-line: deprecation
    this.cartoonService.deleteCartoon(c).subscribe
    (cartoons => {
      this.cartoons = this.cartoons.filter(p => p !== c);
      alert('Completely deleted');
    });
  }

  edit(c: Cartoon): void{
    localStorage.setItem('id', c . id .toString());
    this.router.navigate(['edit']);
    console.log(localStorage);
  }

  details(id: number){
    this.router.navigate(['cartoons', id]);
  }


}

