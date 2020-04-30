import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.scss']
})
export class DetailComponent implements OnInit {
  sizes = [38, 39, 40, 41, 42, 43, 44];
  colors = [
    {
      productImg: '//img.alicdn.com/imgextra/i2/2269753886/TB2JIGEfl8lpuFjSspaXXXJKpXa_!!2269753886.jpg_40x40q90.jpg',
      name: '5036立领藏青色'
    }
  ]
  chooseIndex: number
  chooseColorIndex: number
  constructor() { }

  ngOnInit() {
  }
  chooseSize(size) {
    this.chooseIndex = this.sizes.indexOf(size);
  }
  chooseColor(size) {
    this.chooseColorIndex = this.sizes.indexOf(size);
  }
}
