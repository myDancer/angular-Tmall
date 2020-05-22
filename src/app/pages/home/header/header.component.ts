import { Component, OnInit, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-home-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.sass']
})
export class HeaderComponent implements OnInit {
  @Input() defaulttext: string;
  @Output() onsearch = new EventEmitter<boolean>();

  searchText = '';
  constructor() { }

  ngOnInit() {
    if (this.defaulttext) {
      this.searchText = this.defaulttext;
    }
  }
  ngOnChanges (change) {
    console.log('change')
  }
  search(value) {
    this.onsearch.emit(value);
  }
}
