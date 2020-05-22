import { Component, OnInit, Input } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { CartService } from '../../../@core/mock/cart.service';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.scss']
})
export class DetailComponent implements OnInit {
  @Input() product: any;
  constructor(private router: Router, private route: ActivatedRoute, private cartService: CartService) { }
  productDetail = {
    title: '立领衬衫男长袖衬衣春季薄款中山装花花公子新款中华立领商务正装',
    price: 178,
    originalPrice: 280,
    commentNum: 2,
    points: 89,
    sizes: [38, 39, 40, 41, 42, 43],
    colors: [
      {
        productImg: '//img.alicdn.com/imgextra/i2/2269753886/TB2JIGEfl8lpuFjSspaXXXJKpXa_!!2269753886.jpg',
        name: '5036立领藏青色'
      }
    ]
  };
  chooseIndex: number;
  chooseColorIndex: number;
  cart = {
    number: 1,
    size: '',
    color: {}
  };
  ngOnInit() {
  }
  buyNow() {
    console.log(this.product);
    console.log(this.cart);
  }
  addToCart() {
    if ((this.product.sizes.length > 0 && this.cart.size === '')
      ||
     (this.product.colors.length > 0 && JSON.stringify(this.cart.color) === '{}')
     ) {
       return;
    }
    const id = this.route.snapshot.paramMap.get('id');
    this.cartService.addToCart({productId: id, productDetail: this.productDetail, ...this.cart}).subscribe((result: any) => {
      console.log(result);
      this.router.navigate(['/cart']);
    });
  }
  checkSize(size) {
    this.cart.size = size;
  }
  chooseSize(size) {
    this.chooseIndex = this.product.sizes.indexOf(size);
    this.cart.size = size;
  }
  chooseColor(color) {
    this.chooseColorIndex = this.product.colors.indexOf(color);
    this.cart.color = color;
  }
}
