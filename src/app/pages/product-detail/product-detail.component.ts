import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { ProductService } from '../../@core/mock/product.service';
@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.scss']
})
export class ProductDetailComponent implements OnInit {
  product: any;
  constructor( private route: ActivatedRoute, private productService: ProductService) { }

  ngOnInit() {
    this.getProduct();
  }

  getProduct(): void {
    const id = this.route.snapshot.paramMap.get('id');
    console.log(id);
    this.productService.getProduct(id)
      .subscribe(product => this.product = product);
  }
}
