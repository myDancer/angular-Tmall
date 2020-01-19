import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PagesComponent } from './pages.component';
import { HeaderComponent } from './header/header.component'

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [PagesComponent, HeaderComponent]
})
export class PagesModule { }
