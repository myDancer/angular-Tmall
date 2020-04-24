import { NgModule } from '@angular/core';

import { PagesComponent } from './pages.component';
import { PagesRoutingModule } from './pages-routing.module';
import{ HeaderComponent } from './header/header.component';
import{ GoodsComponent } from './goods/goods.component';

@NgModule({
  imports: [
    PagesRoutingModule
  ],
  declarations: [
    PagesComponent,
    HeaderComponent,
    GoodsComponent
  ],
})
export class PagesModule {
}
