import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';

@Component({
  selector: 'app-article-list',
  templateUrl: './article-list.component.html',
  styleUrls: ['./article-list.component.scss']
})
export class ArticleListComponent implements OnInit {
  counter = 0;
  atticleData;
  constructor(public datasvc: DataService) {
  }
  ngOnInit() {
    this.datasvc.getData().subscribe((result) => {
      this.atticleData = result;
    });
  }

  doDelete(item) {
    this.datasvc.doDelete(item).subscribe((result) => {
      this.atticleData = this.atticleData.filter(v => v.id !== item.id);
    },
    (error) => {
      console.log('錯誤資訊', error);
    });
  }
  doModify(post: any) {
    this.datasvc.doModify(post).subscribe((result) => {
      this.atticleData = this.atticleData.map((item) => {
        if (post.id === item.id) {
          return Object.assign({}, item, post);
        }
        return item;
      });
    },
    (error) => {
      console.log('錯誤資訊', error);
    });
  }
}
