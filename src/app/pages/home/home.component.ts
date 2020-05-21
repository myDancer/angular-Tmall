import { Component, OnInit } from '@angular/core';
import { HomepageService } from '../../@core/mock/homepage.service';

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
  constructor(private homepageService: HomepageService) {
    
  }

  ngOnInit() {
    this.homepageService.getHomeData().subscribe( (data: any) => {
      this.discoverGoods = data.discover;
      this.brandList = data.brands;
      this.beauty = data.beauty;
      this.navLinks = data.navLinks;
    })
  }

}
