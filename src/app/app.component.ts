import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'firstAngular';
  link = 'http://www.google.com';
  imgUrl = '/assets/images/logo.png';
  inputValue = '';
  changeTitle(altKey: boolean) {
    if (altKey) {
      this.title = 'changeTitle';
    }
  }
  cleanInput() {
    this.inputValue = '';
  }
}
