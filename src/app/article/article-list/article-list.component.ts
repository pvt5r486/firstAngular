import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-article-list',
  templateUrl: './article-list.component.html',
  styleUrls: ['./article-list.component.scss']
})
export class ArticleListComponent implements OnInit {
  counter = 0;
  atticleData$: Observable<any>;
  constructor(public datasvc: DataService) {
  }
  ngOnInit() {
    this.atticleData$ = this.datasvc.getData();
  }
}
