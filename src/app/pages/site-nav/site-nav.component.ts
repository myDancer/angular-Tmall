import { Component, OnInit } from '@angular/core';
import { HomepageService } from '../../@core/mock/homepage.service';

@Component({
  selector: 'app-site-nav',
  templateUrl: './site-nav.component.html',
  styleUrls: ['./site-nav.component.scss']
})
export class SiteNavComponent implements OnInit {
  navLinks = [];
  constructor(private homepageService: HomepageService) {
    this.navLinks = homepageService.getNavLinks();
  }

  ngOnInit() {
  }

}
