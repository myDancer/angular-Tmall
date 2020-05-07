import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CartComponent } from './cart.component';
import { CartRoutingModule } from './cart-routing.module';
import { SiteNavModule } from '../site-nav/site-nav.module';
import { FormsModule } from '@angular/forms';


@NgModule({
  imports: [
    CommonModule,
    CartRoutingModule,
    SiteNavModule,
    FormsModule
  ],
  declarations: [CartComponent]
})
export class CartModule { }
