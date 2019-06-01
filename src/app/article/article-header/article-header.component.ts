import { Component, OnInit, Input, Output, EventEmitter, OnChanges} from '@angular/core';

@Component({
  selector: 'app-article-header',
  templateUrl: './article-header.component.html',
  styleUrls: ['./article-header.component.scss']
})
export class ArticleHeaderComponent implements OnInit, OnChanges {
  @Input()
  item;

  @Output()
  delete = new EventEmitter<any>();

  @Output()
  changeTitle = new EventEmitter<any>();
  originData;
  isEdit = false;
  constructor() { }

  ngOnInit() {
  }
  ngOnChanges(changes) {
    if (changes.item) {
      this.originData = changes.item.currentValue;
      this.item = Object.assign({}, changes.item.currentValue);
    }
  }

  deleteArticle() {
    this.delete.emit(this.item);
  }
  editTitle() {
    this.changeTitle.emit(this.item);
  }
  editExit() {
    this.item = Object.assign({}, this.originData);
    this.isEdit = false;
  }
}
