import { Component } from '@angular/core';
import { TodoService } from '../services/todo.service';

@Component({
  selector: 'app-todof',
  standalone: true,
  imports: [],
  templateUrl: './todof.component.html',
  styleUrl: './todof.component.scss'
})
export class TodofComponent {
  constructor(private ts: TodoService) { }
  addTodo(t: string) {
    this.ts.addNewTodo(t)
  }
}
