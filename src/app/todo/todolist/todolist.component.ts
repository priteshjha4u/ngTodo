import { Component, Input, EventEmitter, Output } from '@angular/core';
//import { TodoService } from '../todo.service';

@Component({
  selector: 'todo-list',
  templateUrl: './todolist.component.html',
  styleUrls: ['./todolist.component.css'],
  //providers: [TodoService]
})
export class TodolistComponent {
  //todos: any[];
  showControls = [];
  inlineEditRows = [];
  todoText: string = "";
  @Input('data') todos: Todotype[];
  @Output() handler = new EventEmitter<any>();

  mouseEnter(todo) {
    let index = this.showControls.indexOf(todo.id);
    index === -1 && this.showControls.push(todo.id);
  }

  mouseLeave(todo) {
    let index = this.showControls.indexOf(todo.id);
    index > -1 && this.showControls.splice(index, 1);
  }

  showControlsCheck(todo, f = false) {
    if (this.showControls.indexOf(todo.id) > -1 && f) {
      return true
    }
    return this.showControls.indexOf(todo.id) > -1 && !todo.done
  }

  update(todo, action = "") {
    if (!action) {
      return false
    }
    switch (action) {
      case 'edit':
        this.todoText = todo.text;
        this.inlineEditRows.push(todo.id);
        break;
      case 'done':
        let index = this.showControls.indexOf(todo.id);
        index > -1 && this.showControls.splice(index, 1);
        this.handler.emit({ item: Object.assign({}, todo, { done: true }), action });
        break;
      case 'del':
        this.handler.emit({ item: Object.assign({}, todo), action });
        break;
      default:
    }
  }

  checkEdit(todo) {
    return this.inlineEditRows.indexOf(todo.id) > -1
  }

  submit(e, todo) {
    e && e.preventDefault();
    let index = this.inlineEditRows.indexOf(todo.id);
    let index2 = this.showControls.indexOf(todo.id);
    index > -1 && this.inlineEditRows.splice(index, 1);
    index2 > -1 && this.showControls.splice(index, 1);
    this.handler.emit({ item: Object.assign({}, todo, {text: this.todoText}), action:'editAction' });
  }

  cancelSubmit(e, todo) {
    e && e.preventDefault();
    let index = this.inlineEditRows.indexOf(todo.id);
    let index2 = this.showControls.indexOf(todo.id);
    index > -1 && this.inlineEditRows.splice(index, 1);
    index2 > -1 && this.showControls.splice(index, 1);
  }

}

interface Todotype {
  id: string,
  text: string,
  done: string
}
