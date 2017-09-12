import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map'; 


@Injectable()
export class TodoService {
  
  constructor(private http: Http) { 
    console.log('Todo Service constructor call')
  }

  getTodos() {
    return this.http.get('https://jsonplaceholder.typicode.com/todos').map(res => res.json());
  }

}

export interface TodoListType {
  userId: number,
  id: number,
  title: string,
  completed: boolean
}
