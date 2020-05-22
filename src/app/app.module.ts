import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { SiteNavModule } from './pages/site-nav/site-nav.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HeaderModule } from './pages/home/header/header.module';

import { AppComponent } from './app.component';
import { HomeComponent } from './pages/home/home.component';
import { GoodsCardComponent } from './pages/home/goods-card/goods-card.component';
import { CategoryComponent } from './pages/home/category/category.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    GoodsCardComponent,
    CategoryComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SiteNavModule,
    HttpClientModule,
    HeaderModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
