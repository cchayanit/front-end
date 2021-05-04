import { Cartoon } from 'src/app/services/cartoon.model';
import { CartoonService } from './../../services/cartoon.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-cartoon-add',
  templateUrl: './cartoon-add.component.html',
  styleUrls: ['./cartoon-add.component.css']
})
export class CartoonAddComponent implements OnInit {

  constructor(private router: Router,
              private cartoonService: CartoonService) { }

  ngOnInit(): void {
  }
    SubmitAdd(cartoonFrom: NgForm){
    if (cartoonFrom.invalid){
      return;
    }
    const values = cartoonFrom.value;
    // alert(JSON.stringify(values));
    const cartoons = new Cartoon();
    cartoons.title = values.title;
    cartoons.protagonist =  values.protagonist;
    cartoons.detail = values.detail;

    this.cartoonService.createCartoon(cartoons)
    // tslint:disable-next-line: deprecation
    .subscribe(data => {
      alert('Successfully added');
      this.router.navigate(['cartoons']);
    }),
    // tslint:disable-next-line: no-unused-expression
    error => {
      alert(error.error.message);
    };
  }
 }




