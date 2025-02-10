import { Component, ViewChild, ElementRef, AfterViewInit } from '@angular/core';
import { ChildComponent } from '../child/child.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-component-communication',
  standalone: true,
  imports: [ChildComponent,CommonModule],
  templateUrl: './component-communication.component.html',
  styleUrls: ['./component-communication.component.scss']
})
export class ComponentCommunicationComponent implements AfterViewInit {
  // Parent to child using Input decorator
  title = "App Component";
  ctitle = "Child Component";
  detail = "Parent to child using Input (Decorator)";
  parr = [10, 20, 30, 40, 50];

  // Child to parent using Output decorator
  cdata: any;

  updatecdata(d: any) {
    this.cdata = d;
  }

  // Child to parent using ViewChild decorator
  @ViewChild(ChildComponent) childComponent!: ChildComponent;
  data = "Demo with ViewChild decorator";

  test() {
    if (this.childComponent) {
      this.cdata = this.childComponent.message; // Get message instead of calling passtoParent()
    }
  }

  // DOM Manipulation using ViewChild
  @ViewChild("test", { static: false }) testDiv!: ElementRef<HTMLDivElement>;
  @ViewChild("test1", { static: false }) testInput!: ElementRef<HTMLInputElement>;

  ngAfterViewInit() {
    if (this.testDiv) {
      console.log(this.testDiv.nativeElement); // Logs the div ElementRef instance
    }
    if (this.testInput) {
      console.log(this.testInput.nativeElement); // Logs the input ElementRef instance

      this.testInput.nativeElement.onkeyup = () => {
        console.log(this.testInput.nativeElement.value); // Logs input value on every keyup
      };
    }
  }

  changediv() {
    if (this.testDiv) {
      this.testDiv.nativeElement.textContent = "HELLO";
    }
  }
}
