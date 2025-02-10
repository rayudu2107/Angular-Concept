import { CommonModule } from '@angular/common';
import { Component, DoCheck, Input, OnChanges, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-ngdocheack',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './ngdocheack.component.html',
  styleUrl: './ngdocheack.component.scss'
})
export class NgdocheackComponent implements DoCheck,OnChanges{

  @Input() mobiles: string[] = [];

  ngDoCheck(): void {
    console.log("ngDoCheck called - Change detection triggered");
  }

  ngOnChanges(changes: SimpleChanges): void {
    console.log("ngOnChanges called - Input property changed", changes);
  }
}
