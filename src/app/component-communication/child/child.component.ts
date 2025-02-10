import { Component, Input, Output, EventEmitter } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-child',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.scss']
})
export class ChildComponent {
  // Parent to child using @Input decorator
  @Input() childtitle!: string;
  @Input() d1: any;
  @Input() d2: any;

  // Child to parent using @Output decorator
  @Output() custoeve = new EventEmitter<string>();

  message = "";

  updatemessage(event: any) {
    this.message = event.target.value;
  }

  passtoParent() {
    this.custoeve.emit(this.message);
  }

  // Child to parent using Template Reference Variable
  data = "Child to parent using template reference variable";

  test() {
    return "Test from child component";
  }
}
