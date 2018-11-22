import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import {Observable} from 'rxjs/Rx';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';


@Injectable()
export class TodoService {

  constructor(private http: Http) {
    console.log('Todo Service constructor call');
  }

  getTodos() /* () : Observable<Comment[]> */ {
    return this.http.get('https://jsonplaceholder.typicode.com/todos').map((res: Response) => res.json())
      .catch((error: any) => Observable.throw(error.json().error || 'Server error'));
  }

}

export interface TodoListType {
  userId: number;
  id: number;
  title: string;
  completed: boolean;
}
