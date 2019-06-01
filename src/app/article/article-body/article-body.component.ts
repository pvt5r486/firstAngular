import { Component, OnInit, Input, OnChanges } from '@angular/core';

@Component({
  selector: 'app-article-body',
  templateUrl: './article-body.component.html',
  styleUrls: ['./article-body.component.scss']
})
export class ArticleBodyComponent implements OnInit, OnChanges {
  @Input()
  item;

  @Input()
  counter;

  constructor() {
    // console.log('ArticleBodyComponent: constructor');
  }

  ngOnInit() {
    // console.log(this.counter);
    // console.log(`ArticleBodyComponent ${this.item.id} : ngOnInit`);
  }

  ngOnChanges(changes) {
    // console.log(`ArticleBodyComponent ${this.item.id} : ngOnChanges`);
    // console.log(changes);
  }
}
