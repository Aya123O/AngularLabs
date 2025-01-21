import { Component } from '@angular/core';
import { TodoWrapperComponent } from './todo-wrapper/todo-wrapper.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [TodoWrapperComponent],
  template: `<app-todo-wrapper></app-todo-wrapper>`,
  styleUrls: ['./app.component.css'],
})
export class AppComponent {}
