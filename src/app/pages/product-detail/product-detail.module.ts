import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductDetailComponent } from './product-detail.component';
import { ProductDetailRoutingModule } from './product-detail-routing.module';

@NgModule({
  imports: [
    CommonModule,
    ProductDetailRoutingModule
  ],
  declarations: [ProductDetailComponent]
})
export class ProductDetailModule { }
