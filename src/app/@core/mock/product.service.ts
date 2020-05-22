import { Injectable } from '@angular/core';
import { of,  Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { productDetail } from '../data/product'

@Injectable({
  providedIn: 'root'
})
export class ProductService  extends productDetail{

  productDetail: any;

  constructor(private http: HttpClient) {
    super();
  }
  getProductDetailById (id){
    return this.http.get('http://localhost:8001/product/getProductDetailById?id=' + id);
  }
  fuzzySearchByProductName (name){
    return this.http.get('http://localhost:8001/product/fuzzySearchByProductName?name=' + name);
  }
  getProductDetail(id: string) {
    return this.productDetail;
  }

  getProduct(id: string): Observable<any> {
    return of(this.getProductDetail(id));
  }
}
