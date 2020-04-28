import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { SiteNavComponent } from './site-nav.component';
import { IconComponent } from './icon/icon.component';

@NgModule({
  imports: [
    CommonModule,
    RouterModule
  ],
  declarations: [
    SiteNavComponent,
    IconComponent
  ],
  exports: [SiteNavComponent]
})
export class SiteNavModule { }
