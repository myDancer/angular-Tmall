import { Component, OnInit, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-home-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.sass']
})
export class HeaderComponent implements OnInit {
  @Output() onsearch = new EventEmitter<boolean>();

  showLabel = true;
  searchText: string;
  constructor() { }

  ngOnInit() {
  }
  textChange(event: KeyboardEvent) {
    this.searchText =  (event.target as HTMLInputElement).value;
    if (this.searchText.length > 0) {
      this.showLabel = false;
    } else {
      this.showLabel = true;
    }
  }
  search(value) {
    this.onsearch.emit(value);
  }
}
