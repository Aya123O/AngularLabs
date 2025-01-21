import { Component, EventEmitter, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-todo-form',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './todo-form.component.html',
  styleUrls: ['./todo-form.component.css'],
})
export class TodoFormComponent {
  @Output() addTask = new EventEmitter<string>();
  task = '';

  onAddTask() {
    if (this.task.trim()) {
      this.addTask.emit(this.task);
      this.task = '';
    }
  }
}
