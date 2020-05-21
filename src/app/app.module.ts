import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { SiteNavModule } from './pages/site-nav/site-nav.module';
// import { FormsModule, ReactiveFormsModule } from '@angular/forms';

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
    SiteNavModule,
    HttpClientModule,
    // FormsModule,
    // ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
