import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common'; 

import { PagesComponent } from './pages.component';
import { PagesRoutingModule } from './pages-routing.module';
import { HeaderComponent } from './header/header.component';
import { GoodsComponent } from './goods/goods.component';
import { MainComponent } from './main/main.component';
import { GoodsCardComponent } from './main/goods-card/goods-card.component';
import{ SearchComponent } from './search/search.component';
import{ CategoryComponent } from './category/category.component';
import{ IconComponent } from './header/icon/icon.component';

@NgModule({
  imports: [
    CommonModule,
    PagesRoutingModule
  ],
  declarations: [
    PagesComponent,
    HeaderComponent,
    GoodsComponent,
    MainComponent,
    GoodsCardComponent,
    SearchComponent,
    CategoryComponent,
    IconComponent
  ],
})
export class PagesModule {
}
