import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Todo } from '../todo';

@Component({
  selector: 'app-todo',
  standalone: true,
  imports: [CommonModule],
  template: `
    <p [ngStyle]="{ 'margin-top': '10px' }">todo works!</p>
    @for (todo of todos; track todo.id) {
    <label
      [for]="todo.id + 'id'"
      [ngStyle]="{
        'text-decoration': todo.completed ? 'line-through' : 'none'
      }"
    >
      <input
        type="checkbox"
        [id]="todo.id + 'id'"
        [checked]="todo.completed"
        (change)="updateTodo(todo)"
      />
      {{ todo.title }}
    </label>
    }
  `,
  styles: ``,
})
export class TodoComponent {
  todos: Todo[] = [
    {
      id: 1,
      title: 'Learn Angular',
      completed: true,
    },
    {
      id: 2,
      title: 'Learn TypeScript',
      completed: false,
    },
    {
      id: 3,
      title: 'Learn RxJS',
      completed: false,
    },
  ];

  updateTodo(todo: Todo) {
    this.todos = this.todos.map((todoItem) => {
      if(todoItem.id === todo.id) {
        todoItem.completed = !todoItem.completed;
      }
      return todoItem;
    })
  }
}
