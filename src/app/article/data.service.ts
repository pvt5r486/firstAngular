import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  constructor(public httpClient: HttpClient) {
  }
  getData() {
    return this.httpClient.get('http://localhost:4200/api/articles.json');
  }
  doDelete(item) {
    return this.httpClient.delete(`http://localhost:4200/api/articles.json/${item.id}`);
  }
  doModify(post: any) {
    return this.httpClient.put(`http://localhost:4200/api/articles.json/${post.id}`, post);
  }
}
