import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class TodoService {

  rootUrl = 'http://localhost:3000';

  constructor(
    private http: Http
  ) { }

  getAll() {
    const headers = new Headers();
    headers.append('Content-Type', 'application/json');
    return this.http.get(this.rootUrl + '/todos', { headers: headers }).map(res => res.json());
  }

  add(newItem) {
    const headers = new Headers();
    headers.append('Content-Type', 'application/json');
    return this.http.post(this.rootUrl + '/todos', newItem, { headers: headers }).map(res => res.json());
  }

  edit(id, newItem) {
    const headers = new Headers();
    headers.append('Content-Type', 'application/json');
    return this.http.put(this.rootUrl + '/todos/' + id, newItem, { headers: headers }).map(res => res.json());
  }

  setCompleted(id) {
    const headers = new Headers();
    headers.append('Content-Type', 'application/json');
    return this.http.put(this.rootUrl + '/todos/complete/' + id, { headers: headers }).map(res => res.json());
  }

  delete(id) {
    const headers = new Headers();
    headers.append('Content-Type', 'application/json');
    return this.http.delete(this.rootUrl + '/todos/' + id, { headers: headers }).map(res => res.json());
  }


}
