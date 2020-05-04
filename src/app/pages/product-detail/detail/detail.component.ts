import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.scss']
})
export class DetailComponent implements OnInit {

  constructor(private router: Router) { }
  productDetail = {
    sizes: [38, 39, 40, 41, 42, 43],
    colors: [{

    }]
  };
  cart = {
    number: 1,
    size: ''
  };
  ngOnInit() {
  }
  addToCart() {
    this.router.navigate(['/cart']);
  }
  checkSize(size) {
    console.log(size);
    this.cart.size = size;
  }
}
