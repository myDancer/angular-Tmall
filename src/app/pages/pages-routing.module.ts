import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';

import { PagesComponent } from './pages.component';
import { GoodsComponent } from './goods/goods.component';
import { MainComponent } from './main/main.component';
const routes: Routes = [{
  path: '',
  component: PagesComponent,
  children: [{
    path: 'home',
    component: MainComponent,
  },
  {
    path: 'goods',
    component: GoodsComponent,
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full',
  }]
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PagesRoutingModule {
}
