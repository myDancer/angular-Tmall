import { Component, OnInit } from '@angular/core';
import { HomepageService } from '../../@core/mock/homepage.service';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {
  discoverGoods: any;
  constructor(private homepageService: HomepageService) {
    this.discoverGoods = this.homepageService.getDiscoverGoods();
    console.log(this.discoverGoods);
  }

  ngOnInit() {
  }

}
