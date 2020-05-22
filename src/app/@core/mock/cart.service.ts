import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class CartService {
cartList = [];
constructor(private http: HttpClient) { }
  addToCart(cartData) {
    this.cartList.push(cartData);
    return this.http.post(`${environment.apiUrl}/cart/addtocart`, cartData);
  }
  removeCartByIds(ids) {
    return this.http.post(`${environment.apiUrl}/cart/removeCartByIds`, ids);
  }
  getCartList() {
    return this.http.get(`${environment.apiUrl}/cart/getcart`);
  }
}
