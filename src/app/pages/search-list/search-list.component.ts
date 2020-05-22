import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductService } from '../../@core/mock/product.service';

@Component({
  selector: 'app-search-list',
  templateUrl: './search-list.component.html',
  styleUrls: ['./search-list.component.scss']
})
export class SearchListComponent implements OnInit {
  productList: [];
  name: String;
  constructor(private route: ActivatedRoute,  private productService: ProductService) { }

  ngOnInit() {
    const name = this.route.snapshot.queryParamMap.get('name');
    this.name = decodeURI(name);
    this.productService.fuzzySearchByProductName(name)
      .subscribe((result: any) => this.productList = result.data);
  }

}
