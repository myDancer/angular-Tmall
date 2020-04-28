import { Injectable } from '@angular/core';
import { of,  Observable } from 'rxjs';

import { productDetail } from '../data/product'

@Injectable({
  providedIn: 'root'
})
export class ProductService  extends productDetail{

  productDetail: any;

  constructor() {
    super();
  }

  getProductDetail(id: string) {
    return this.productDetail;
  }

  getProduct(id: string): Observable<any> {
    return of(this.getProductDetail(id));
  }
}
