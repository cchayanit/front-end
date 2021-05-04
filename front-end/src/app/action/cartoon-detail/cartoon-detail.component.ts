import { CartoonService } from './../../services/cartoon.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Cartoon } from 'src/app/services/cartoon.model';


@Component({
  selector: 'app-cartoon-detail',
  templateUrl: './cartoon-detail.component.html',
  styleUrls: ['./cartoon-detail.component.css']
})
export class CartoonDetailComponent implements OnInit {

  [x: string]: any;
  cartoon: Cartoon;
  id: number;


  constructor(
    private cartoonService: CartoonService,
    private route: ActivatedRoute,
    private router: Router
  ) { }

    ngOnInit(): void {
      this.id = this.route.snapshot.params.id;

      // tslint:disable-next-line: deprecation
      this.cartoonService.getCartoonID(this.id).subscribe((data: Cartoon) => {
        this.cartoon = data;
      });
    }
    list(){
      this.router.navigate(['cartoons']);
    }
    }
