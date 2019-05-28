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
  constructor() { }

  ngOnInit() {
  }
  changeTitle(altKey: boolean) {
    if (altKey) {
      this.title = 'changeTitle';
    }
  }
}
