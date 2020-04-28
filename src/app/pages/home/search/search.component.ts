import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.sass']
})
export class SearchComponent implements OnInit {

  showLabel: Boolean = true;
  searchText: String;
  textChange (event: KeyboardEvent) {
    this.searchText =  (event.target as HTMLInputElement).value;
    if (this.searchText.length > 0) {
      this.showLabel = false;
    } else {
      this.showLabel = true;
    }
  }
  search (value) {
    console.log('enter', value);
  }
  constructor() { }

  ngOnInit() {
  }

}
