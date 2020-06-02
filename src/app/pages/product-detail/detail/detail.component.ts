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
    size: 0,
    color: {}
  };
  ngOnInit() {
  }
  buyNow() {
    console.log(this.cart);
  }
  addToCart() {
    this.router.navigate(['/cart']);
  }
  checkSize(size: number): void {
    console.log(size);
    this.cart.size = size;
  }
  chooseSize(size: number): void {
    this.chooseIndex = this.productDetail.sizes.indexOf(size);
    this.cart.size = size;
  }
  chooseColor(color): void {
    this.chooseColorIndex = this.productDetail.colors.indexOf(color);
    this.cart.color = color;
  }
}
