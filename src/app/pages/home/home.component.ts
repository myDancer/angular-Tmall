import { Component, OnInit } from '@angular/core';
import { HomepageService } from '../../@core/mock/homepage.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  discoverGoods: any;
  brandList: any;
  beauty: any;
  navLinks: any;
  constructor(private homepageService: HomepageService, private router: Router) {
  }

  ngOnInit() {
    this.homepageService.getHomeData().subscribe( (data: any) => {
      this.discoverGoods = data.discover;
      this.brandList = data.brands;
      this.beauty = data.beauty;
      this.navLinks = data.navLinks;
    });
  }
  search (value) {
    this.router.navigate(['search'], {queryParams: {name :encodeURI(value)}});
  }
}
