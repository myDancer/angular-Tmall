import { Component, OnInit } from '@angular/core';
import { HomepageService } from '../../@core/mock/homepage.service';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit {
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
