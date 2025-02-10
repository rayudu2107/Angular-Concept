import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-databinding',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './databinding.component.html',
  styleUrl: './databinding.component.scss'
})
export class DatabindingComponent {
 // String Interpolation
  message: string = "Hello, Angular!";
  cname: string = "highlight";
  da: Date = new Date();
  d: string = new Date().toLocaleDateString();
  t: string = new Date().toLocaleTimeString();

  // Auto-update time
  timeId = setInterval(() => {
    this.t = new Date().toLocaleTimeString();
  }, 1000);

  // Property Binding
  isDisabled: boolean = false;
  isHidden: boolean = true;

  // Class Binding
  isActive: boolean = true;

  // Style Binding
  cvar: string = 'blue';
  hasError: boolean = false;

  // Event Binding
  counter: number = 0;
  name: string = "";

  increment() {
    this.counter += 1;
  }

  decrement() {
    this.counter -= 1;
  }

  changeName(event: any) {
    this.name = event.target.value;
  }

  // Two-way Data Binding
  city: string = "Hyderabad";
}
