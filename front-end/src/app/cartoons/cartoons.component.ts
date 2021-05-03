import { CartoonService } from './../services/cartoon.service';
import { Title } from '@angular/platform-browser';
import { Component, OnInit } from '@angular/core';
import { Cartoon } from '../services/cartoon.model';

@Component({
  selector: 'app-cartoons',
  templateUrl: './cartoons.component.html',
  styleUrls: ['./cartoons.component.css']
})
export class CartoonsComponent implements OnInit {

  cartoons: Cartoon[];

  constructor(private title: Title, private cartoonService: CartoonService) { }

  ngOnInit(): void {
    this.title.setTitle('Catoons');
    // tslint:disable-next-line: deprecation
    this.cartoonService.getCatoon().subscribe(
      (cartoons) => {
        // console.log(cartoons);
        this.cartoons = cartoons; // cartoon => from back-end , this.cartoons => Local variables
      }
    );
  }

}
