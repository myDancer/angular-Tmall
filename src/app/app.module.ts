import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { HeaderModule } from './pages/header/header.module';

import { AppComponent } from './app.component';
import { HomeComponent } from './pages/home/home.component';
import { GoodsCardComponent } from './pages/home/goods-card/goods-card.component';
import { SearchComponent } from './pages/home/search/search.component';
import { CategoryComponent } from './pages/home/category/category.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    GoodsCardComponent,
    SearchComponent,
    CategoryComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HeaderModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
