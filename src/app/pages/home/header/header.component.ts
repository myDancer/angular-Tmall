import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.sass']
})
export class HeaderComponent implements OnInit {

  showLabel = true;
  searchText: string;
  textChange(event: KeyboardEvent) {
    this.searchText =  (event.target as HTMLInputElement).value;
    if (this.searchText.length > 0) {
      this.showLabel = false;
    } else {
      this.showLabel = true;
    }
  }
  search(value) {
    console.log('enter', value);
  }
  constructor() { }

  ngOnInit() {
  }

}
