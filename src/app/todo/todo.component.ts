import { Component, OnInit } from '@angular/core';
//import { TodoService } from './todo.service';

@Component({
  selector: 'todo-app',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css'],
  //providers: [TodoService]
})
export class TodoComponent implements OnInit {
  todos: Todotype[] = [];
  appTitle: string = 'Todo App';
  lsPrefix: string = 'todoAppStorage';

  ngOnInit() {
    this.todos = this.getTodos()
  }

  random = () => '_' + Math.random().toString(36).substring(2);
  uuid = () => this.random() + this.random() + this.random();

  getTodos() {
    try {
      let todos = JSON.parse(localStorage.getItem(this.lsPrefix));
      return (todos || [])
    } catch (e) {
      return []
    }
  }

  saveTodo(data, update = false) {
    data.action && data.action === 'done' && (update = true);
    data.item && (data = data.item);
    try {
      let _data = {...data}, index;
      let newTodo: Todotype = update ? null : {
        id: this.uuid(),
        text: _data.title,
        done: false
      };
      !update && this.todos.push(newTodo);
      if(update) {
        this.todos.forEach((t,i) => t.id === _data.id && (index = i));
        this.todos[index] = _data;
      }
      localStorage.setItem(this.lsPrefix, JSON.stringify(this.todos));
    } catch (e) {
      console.log(e)
    }
  }

  completed() {
    return this.todos.filter(t => t.done === true).length
  }

}

interface Todotype {
  id: string,
  text: string,
  done: boolean
}
