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
  beautyList: any;
  constructor(private homepageService: HomepageService) {
    this.discoverGoods = this.homepageService.getDiscoverGoods();
    this.brandList = this.homepageService.getBrandList();
    this.beautyList = this.homepageService.getBeautyList();
    console.log(this.discoverGoods);
  }

  ngOnInit() {
  }

}
