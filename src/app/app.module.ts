import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { TodoComponent } from './todo/todo.component';
import { TodoformComponent } from './todo/todoform/todoform.component';
import { TodolistComponent } from './todo/todolist/todolist.component';
import { DialogComponent } from './dialog/dialog.component';

// import { TodoService } from './todo/todo.service';

@NgModule({
  declarations: [
    AppComponent,
    TodoComponent,
    TodoformComponent,
    TodolistComponent,
    DialogComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
