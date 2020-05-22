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
  selectedList = [];
  sum = 0;
  ngOnInit() {
    this.cartService.getCartList().subscribe( (result: any) => {
      this.cartList = result.data;
    } )
  }
  checkBoxChange (e, cart) {
    if (e.target.checked) {
      this.sum += cart.number * cart.productDetail.price;
      this.selectedList.push(cart);
    } else {
      this.sum = this.sum - (cart.number * cart.productDetail.price);
      this.selectedList.splice(this.selectedList.indexOf(cart), 1);
    }
  }
  removeCarts() {
    let ids = this.selectedList.map(item => {
      return item._id;
    });
    this.cartService.removeCartByIds(ids).subscribe( (result: any) => {
      this.cartList = result.data;
      alert('购买成功');
    } )
  }
}
