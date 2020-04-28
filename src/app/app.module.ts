import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { SiteNavModule } from './pages/site-nav/site-nav.module';

import { AppComponent } from './app.component';
import { HomeComponent } from './pages/home/home.component';
import { GoodsCardComponent } from './pages/home/goods-card/goods-card.component';
import { HeaderComponent } from './pages/home/header/header.component';
import { CategoryComponent } from './pages/home/category/category.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    GoodsCardComponent,
    HeaderComponent,
    CategoryComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SiteNavModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
