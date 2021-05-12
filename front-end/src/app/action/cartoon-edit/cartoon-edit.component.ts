import { CartoonService } from './../../services/cartoon.service';
import { Router } from '@angular/router';
import { Cartoon } from 'src/app/services/cartoon.model';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cartoon-edit',
  templateUrl: './cartoon-edit.component.html',
  styleUrls: ['./cartoon-edit.component.css']
})
export class CartoonEditComponent implements OnInit {

  cartoon: Cartoon = new Cartoon();
  constructor(private router: Router,
              private cartoonService: CartoonService) { }

  ngOnInit(): void {
    this.edit(Cartoon);
  }

  // tslint:disable-next-line: no-shadowed-variable
  edit(Cartoon){
    const id: string = localStorage.getItem('id');
    this.cartoonService.getCartoonID(+id)
      .subscribe(data => {
      this.cartoon = data;
    });
  }
  Update(cartoon: Cartoon){
    this.cartoonService.updateCartoon(cartoon)
      .subscribe(data => {
      this.cartoon = data;
      alert('Completely edited');
      this.router.navigate(['cartoons']);
    });
  }
}
