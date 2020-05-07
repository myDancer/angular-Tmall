import { Component, OnInit } from '@angular/core';
import { CartService } from '../../@core/mock/cart.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent implements OnInit {

  constructor(private cartService: CartService) { }
  cartList = [];
  ngOnInit() {
    this.cartList = this.cartService.getCartList();
  }

}
