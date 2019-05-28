import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  title = 'firstAngular';
  link = 'http://www.google.com';
  imgUrl = '/assets/images/logo.png';
  counter = 0;
  fontSize = 16 + 'px';
  fontColor = 'red';
  constructor() { }

  ngOnInit() {
  }
  changeTitle(altKey: boolean) {
    if (altKey) {
      this.title = 'changeTitle';
    }
    this.counter++;
  }
  getStyle() {
    return {'font-size': (12 + this.counter) + 'px'};
  }
}
