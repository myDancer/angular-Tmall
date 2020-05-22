import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './pages/home/home.component';


const routes: Routes = [
  {
    path: 'home',
    component: HomeComponent,
  },
  {
    path: 'productDetail/:id',
    loadChildren: () => import('./pages/product-detail/product-detail.module')
        .then(m => m.ProductDetailModule),
  },
  {
    path: 'cart',
    loadChildren: () => import('./pages/cart/cart.module')
        .then(m => m.CartModule),
  },
  {
    path: 'search',
    loadChildren: () => import('./pages/search-list/search-list.module')
        .then(m => m.SearchListModule),
  },
  { path: '', redirectTo: 'home', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
