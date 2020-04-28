import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HeaderModule } from '../header/header.module';
import { ProductDetailRoutingModule } from './product-detail-routing.module';

import { ProductDetailComponent } from './product-detail.component';
import { SearchComponent } from './search/search.component';

@NgModule({
  imports: [
    CommonModule,
    ProductDetailRoutingModule,
    HeaderModule
  ],
  declarations: [
    ProductDetailComponent,
    SearchComponent
  ]
})
export class ProductDetailModule { }
