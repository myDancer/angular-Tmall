import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SearchListRoutingModule } from './search-list-routing.module';
import { SiteNavModule } from '../site-nav/site-nav.module';
import { HeaderModule } from '../home/header/header.module'

import { SearchListComponent } from './search-list.component';

@NgModule({
  imports: [
    CommonModule,
    SearchListRoutingModule,
    SiteNavModule,
    HeaderModule
  ],
  declarations: [SearchListComponent]
})
export class SearchListModule { }
