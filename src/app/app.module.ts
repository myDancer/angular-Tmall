import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './pages/header/header.component';
import { HomeComponent } from './pages/home/home.component';
import { GoodsCardComponent } from './pages/home/goods-card/goods-card.component';
import { SearchComponent } from './pages/home/search/search.component';
import { CategoryComponent } from './pages/home/category/category.component';
import { IconComponent } from './pages/header/icon/icon.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent,
    GoodsCardComponent,
    SearchComponent,
    CategoryComponent,
    IconComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
