import { Component, OnInit } from '@angular/core';
import { TodoService, TodoListType } from './todo.service';

@Component({
  selector: 'todo-app',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css'],
  providers: [TodoService]
})
export class TodoComponent implements OnInit {
  todos: Todotype[] = [];
  appTitle = 'Todo App';
  lsPrefix = 'todoAppStorage';
  showDialog = false;
  dialogOptions = {};

  todoList: TodoListType[] = [];

  constructor(private todoService: TodoService) {
    this.todoService.getTodos().subscribe(data => this.todoList = data);
  }

  ngOnInit() {
    this.todos = this.getTodos();
  }

  random = () => '_' + Math.random().toString(36).substring(2);
  uuid = () => this.random() + this.random() + this.random();

  getTodos() {
    try {
      const todos = JSON.parse(localStorage.getItem(this.lsPrefix));
      return (todos || []);
    } catch (e) {
      return [];
    }
  }

  saveTodo(data, update = false) {
    if (data.action && data.action === 'del') {
      return this.removeTodo(data.item);
    }
    data.action && (data.action === 'done' || data.action === 'editAction') && (update = true);
    data.item && (data = data.item);
    try {
      const _data = { ...data }; let index;
      const newTodo: Todotype = update ? null : {
        id: this.uuid(),
        text: _data.title,
        done: false
      };
      !update && this.todos.push(newTodo);
      if (update) {
        this.todos.forEach((t, i) => t.id === _data.id && (index = i));
        index > -1 && (this.todos[index] = _data);
      }
      localStorage.setItem(this.lsPrefix, JSON.stringify(this.todos));
    } catch (e) {
      console.log(e);
    }
  }

  removeTodo(todo) {
    const remove = (action) => {
      if (action === 'close') {
        return this.closeDialog();
      }
      let index;
      this.todos.forEach((t, i) => t.id === todo.id && (index = i));
      index > -1 && this.todos.splice(index, 1);
      this.closeDialog();
      localStorage.setItem(this.lsPrefix, JSON.stringify(this.todos));
    };

    this.dialogOptions = {
      title: 'Confirmation!',
      content: `Are you sure to delete "${todo.text}" ?`,
      okText: 'Yes',
      closeText: 'No',
      _cb: remove
    };
    this.showDialog = true;
  }

  completed() {
    return this.todos.filter(t => t.done === true).length;
  }

  deleteAll() {
    const del = (action) => {
      if (action === 'close') {
        return this.closeDialog();
      }
      this.todos = [];
      this.closeDialog();
      localStorage.setItem(this.lsPrefix, JSON.stringify(this.todos));
    };

    this.dialogOptions = {
      title: 'Confirmation!',
      content: 'Are you sure to delete all todos ?',
      okText: 'Yes',
      closeText: 'No',
      _cb: del
    };
    this.showDialog = true;
  }

  markAll() {
    if (this.completed() < this.todos.length) {
      this.todos.forEach(t => t.done = true);
    } else {
      this.todos.forEach(t => t.done = false);
    }
    localStorage.setItem(this.lsPrefix, JSON.stringify(this.todos));
  }

  closeDialog() {
    this.dialogOptions = {};
    this.showDialog = false;
  }

}

interface Todotype {
  id: string;
  text: string;
  done: boolean;
}
