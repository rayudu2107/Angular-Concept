import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TodoService } from '../services/todo.service';

@Component({
  selector: 'app-todol',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './todol.component.html',
  styleUrl: './todol.component.scss'
})
export class TodolComponent implements OnInit {
todos: string[] = []; // Array to store the todos

constructor(private ts: TodoService) {}

ngOnInit(): void {
console.log('HELLO');

// Subscribe to the Subject from the service to get real-time updates
this.ts.todoList.subscribe((data: string[]) => {
this.todos = data; // Update the local `todos` array
console.log(data);
});

// Request the initial todo list
this.ts.sendTodo();
}

// Fetch the current todos using the getTodos method
getTodos(): void {
this.todos = this.ts.getTodos(); // Update the local todos array
}
}
