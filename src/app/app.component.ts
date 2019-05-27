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
  inputStrLen = 0;
  changeTitle(altKey: boolean) {
    if (altKey) {
      this.title = 'changeTitle';
    }
  }
  calcLength(str: string) {
    this.inputStrLen = str.length;
  }
  cleanInput(inputEl: HTMLInputElement) {
    this.inputStrLen = 0;
    inputEl.value = '';
  }
}
