import { Component, OnInit, Input, Output, EventEmitter} from '@angular/core';

@Component({
  selector: 'app-article-header',
  templateUrl: './article-header.component.html',
  styleUrls: ['./article-header.component.scss']
})
export class ArticleHeaderComponent implements OnInit {
  @Input()
  item;

  @Output()
  delete = new EventEmitter<any>();

  @Output()
  changeTitle = new EventEmitter<any>();

  isEdit = false;
  newTitle = '';
  constructor() { }

  ngOnInit() {
    this.newTitle = this.item.title;
  }
  deleteArticle() {
    this.delete.emit(this.item);
  }
  editTitle(e) {
    console.log('editTitle', e.target);
    this.newTitle = e.target.value;
    this.changeTitle.emit({ title: this.newTitle, id: this.item.id });
  }
  editExit(e) {
    console.log('editExit', e.target);
    e.target.value = this.item.title;
    this.isEdit = false;
  }
}
