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
    colors: [
      {
        productImg: '//img.alicdn.com/imgextra/i2/2269753886/TB2JIGEfl8lpuFjSspaXXXJKpXa_!!2269753886.jpg_40x40q90.jpg',
        name: '5036立领藏青色'
      }
    ]
  };
  chooseIndex: number;
  chooseColorIndex: number;
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
  chooseSize(size) {
    this.chooseIndex = this.productDetail.sizes.indexOf(size);
  }
  chooseColor(color) {
    this.chooseColorIndex = this.productDetail.colors.indexOf(color);
  }
}
