import { Component, OnInit, Output, EventEmitter } from '@angular/core';
// import { TodoService } from '../todo.service';

@Component({
  selector: 'todo-form',
  templateUrl: './todoform.component.html',
  styleUrls: ['./todoform.component.css'],
  // providers: [TodoService]
})
export class TodoformComponent implements OnInit {
  todoTitle = '';

  @Output() submitHandler = new EventEmitter<any>();

  // constructor(/* private todoService: TodoService */) { }

  ngOnInit() {
  }

  submit(e) {
    e && e.preventDefault();
    this.submitHandler.emit({title: this.todoTitle});
    this.todoTitle = '';
  }


}
