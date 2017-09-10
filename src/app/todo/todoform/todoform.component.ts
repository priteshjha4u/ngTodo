import { Component, OnInit } from '@angular/core';
import { TodoService } from '../todo.service';

@Component({
  selector: 'todo-form',
  templateUrl: './todoform.component.html',
  styleUrls: ['./todoform.component.css'],
  providers: [TodoService]
})
export class TodoformComponent implements OnInit {
  todoTitle: string = "dfdfdf"
  constructor(private todoService: TodoService) { }

  ngOnInit() {
  }

  submit(e) {
    e && e.preventDefault();
    console.log(this.todoTitle);
    this.todoService.saveTodo({tname: this.todoTitle})
  }


}
