import { Injectable } from '@angular/core';
//import { Observable } from "rxjs/Observable";
//import { of } from 'rxjs/observable/of';
/* import 'rxjs/add/operator/of';
import 'rxjs/add/operator/map'; */
import {Observable} from 'rxjs/Rx';

const lsPrefix = 'todoAppStorage';
const uuid = () => '_' + Math.random().toString(36).substring(3) + Math.random().toString(36).substring(10);

@Injectable()
export class TodoService {
  todos = [];
  constructor() { 
   // this.todos = this.fetchTodo
    //.map(res => res.json());
  }

  /* fetchTodo(): Promise<any> {
    return Promise.resolve(this.);
  } */

  getTodos():Observable <any[]> {
    //let todos = [];
    try {
      this.todos = [JSON.parse(localStorage.getItem(lsPrefix)).value];
      this.todos || (this.todos = []);
      return Observable.of(this.todos);
    } catch(e) {
      //return todos;
      return Observable.of(this.todos)
    }
  }

  saveTodo(data , update = false) {
    try {
      let todos = this.getTodos();
      let newTodo = update ? null : {
        id: uuid(),
        text: data.tname,
        done: "false"
      };
      !update && this.todos.push(newTodo);
      localStorage.setItem(lsPrefix, (update ? JSON.stringify(data) : JSON.stringify(todos)));
      return {saved: true};
    } catch(e) {
      return {saved: false, err: e};
    }
  }

}

export interface Todotype {
  id: string,
  text: string,
  done: string
}
