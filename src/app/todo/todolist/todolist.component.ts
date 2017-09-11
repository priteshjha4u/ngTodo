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
  inlineEdit: boolean = false;
  @Input('data') todos: Todotype[];
  @Output() handler = new EventEmitter<any>();

  mouseEnter(todo) {
    this.showControls.push(todo.id);
  }

  mouseLeave(todo) {
    let index = this.showControls.indexOf(todo.id);
    index > -1 && this.showControls.splice(index,1);
  }

  showControlsCheck(todo, f = false) {
    if(this.showControls.indexOf(todo.id) > -1 && f) {
      return true
    }
    return this.showControls.indexOf(todo.id) > -1 && !todo.done
  }

  update(todo,action = "") {
    if(!action) {
      return false
    }
    switch(action) {
      case 'edit':
        this.inlineEdit = true;
        break;
      case 'done':
        this.handler.emit({item: Object.assign({},todo,{done: true}), action});
        break;
      case 'del':
        this.inlineEdit = true;
        break;
      default:
    }
  }

}

interface Todotype {
  id: string,
  text: string,
  done: string
}
