import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CartService {
cartList = []
constructor() { }
  addToCart (cartData) {
    this.cartList.push(cartData);
  }
  removeCart (cartData) {
    this.cartList.splice(this.cartList.indexOf(cartData), 1);
  }
  getCartList () {
    return this.cartList;
  }
}
