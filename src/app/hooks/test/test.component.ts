import { Component, OnDestroy, OnInit } from '@angular/core';

@Component({
  selector: 'app-test',
  standalone: true,
  imports: [],
  templateUrl: './test.component.html',
  styleUrl: './test.component.scss'
})
export class TestComponent implements OnInit, OnDestroy {
  
  ngOnInit(): void {
    console.log(' TestComponent Initialized');
  }

  ngOnDestroy(): void {
    console.log(' TestComponent Destroyed');
  }
  showMessage() {
  alert('Button Clicked!');
}

}