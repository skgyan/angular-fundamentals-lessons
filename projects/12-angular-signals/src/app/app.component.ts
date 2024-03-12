import { Component, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Todo } from './todo';
import { TodoComponent } from './todo/todo.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, TodoComponent],
  template: `
    <h1>Building a TODO List</h1>
    @for (todo of todos(); track todo.id) {
    <label [for]="todo.id" [ngStyle]="{
      'text-decoration': todo.completed ? 'line-through' : 'none'
    }">
      <input
        type="checkbox"
        [id]="todo.id"
        [checked]="todo.completed"
        (change)="updateTodo(todo)"
      />{{ todo.title }}
    </label>    
    }
    <section>
      <app-todo />
    </section>
  `,
  styles: `label { display: block }`,
})
export class AppComponent {
  updateTodo(todo: Todo) {
    this.todos.update((todoList) => {
      return todoList.map((todoItem) => {
        if (todoItem.id === todo.id) {
          todoItem.completed = !todoItem.completed;
        }
        return todoItem;
      });
    });
  }

  todos = signal<Todo[]>([
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
  ]);
}
