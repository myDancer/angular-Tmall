import { Component, OnInit, Input } from '@angular/core';
import { DiscoverGoods } from '../../../@core/data/discover-goods';

@Component({
  selector: 'app-goods-card',
  templateUrl: './goods-card.component.html',
  styleUrls: ['./goods-card.component.css']
})
export class GoodsCardComponent implements OnInit {
  @Input() data: DiscoverGoods;
  constructor() { }

  ngOnInit() {
  }

}
