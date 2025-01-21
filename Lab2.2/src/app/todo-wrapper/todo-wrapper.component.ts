import { Component } from '@angular/core';
import { TodoFormComponent } from '../todo-form/todo-form.component';
import { TodoListComponent } from '../todo-list/todo-list.component';

@Component({
  selector: 'app-todo-wrapper',
  standalone: true,
  imports: [TodoFormComponent, TodoListComponent], // Add these
  templateUrl: './todo-wrapper.component.html',
  styleUrls: ['./todo-wrapper.component.css'],
})
export class TodoWrapperComponent {
  todos: { text: string; completed: boolean }[] = [];

  addTask(task: string) {
    this.todos.push({ text: task, completed: false });
  }

  deleteTask(index: number) {
    this.todos.splice(index, 1);
  }

  toggleComplete(index: number) {
    this.todos[index].completed = !this.todos[index].completed;
  }
}
