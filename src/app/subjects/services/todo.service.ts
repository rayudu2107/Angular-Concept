import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TodoService {

   todos: string[] = ['Task 1', 'Task 2', 'Task 3', 'Task 4']; // Initial todo list

  // Subject for the todo list,explicitly defined as `string[]`
  todoList = new Subject<string[]>();

  constructor() {
    this.sendTodo(); // Emit the initial todo list
  }

  // Emit the current todos to all subscribers
  sendTodo(): void {
    this.todoList.next(this.todos); 
  }

  // Add a new todo and notify subscribers
  addNewTodo(task: string): void {
  if (!task.trim()) {
    console.warn('Task cannot be empty!');
    return; 
  }

  this.todos.push(task);
  this.sendTodo();
}

  getTodos(): string[]{
    return this.todos
  }
}
