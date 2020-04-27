import { Component, OnInit } from '@angular/core';
import { HomepageService } from '../../@core/mock/homepage.service'

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  navLinks = [];
  constructor(private homepageService: HomepageService) {
    this.navLinks = homepageService.getNavLinks();
    console.log(this.navLinks);
  }

  ngOnInit() {
  }

}
