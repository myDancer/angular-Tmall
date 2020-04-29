import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CartComponent } from './cart.component';
import { CartRoutingModule } from './cart-routing.module';
import { SiteNavModule } from '../site-nav/site-nav.module';

@NgModule({
  imports: [
    CommonModule,
    CartRoutingModule,
    SiteNavModule
  ],
  declarations: [CartComponent]
})
export class CartModule { }
