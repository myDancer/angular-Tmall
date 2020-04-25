import { NgModule } from '@angular/core';

import { PagesComponent } from './pages.component';
import { PagesRoutingModule } from './pages-routing.module';
import { HeaderComponent } from './header/header.component';
import { GoodsComponent } from './goods/goods.component';
import { MainComponent } from './main/main.component';
import { GoodsCardComponent } from './main/goods-card/goods-card.component';

@NgModule({
  imports: [
    PagesRoutingModule
  ],
  declarations: [
    PagesComponent,
    HeaderComponent,
    GoodsComponent,
    MainComponent,
    GoodsCardComponent
  ],
})
export class PagesModule {
}
