import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';

import { PagesComponent } from './pages.component';
import { GoodsComponent } from './goods/goods.component';
const routes: Routes = [{
  path: '',
  component: PagesComponent,
  children: [{
    path: 'goods',
    component: GoodsComponent,
  },
  {
    path: '',
    redirectTo: 'goods',
    pathMatch: 'full',
  }]
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PagesRoutingModule {
}
