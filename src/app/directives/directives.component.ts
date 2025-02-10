import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-directives',
  standalone: true,
  imports: [CommonModule,FormsModule],
  templateUrl: './directives.component.html',
  styleUrl: './directives.component.scss'
})
export class DirectivesComponent {
   // ngIf Example
  show: boolean = true;
  data: string[] = ['Bangalore', 'Hyderabad', 'Mumbai'];

  // ngFor Example
  movies: string[] = ['RRR', 'NTR', 'KGF', 'Pushpa'];
  nums: number[] = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

  // Mobile Phones List
  mobiles = [
    { brand: "Apple", model: "iPhone 14", price: 999, color: "Midnight", storage: "128GB" },
    { brand: "Samsung", model: "Galaxy S23", price: 799, color: "Phantom Black", storage: "256GB" },
    { brand: "OnePlus", model: "OnePlus 11", price: 699, color: "Titan Black", storage: "256GB" },
    { brand: "Google", model: "Pixel 7", price: 599, color: "Obsidian", storage: "128GB" },
    { brand: "Xiaomi", model: "Mi 13 Pro", price: 749, color: "Ceramic White", storage: "512GB" }
  ];

  // ngSwitch Example - Simple Calculator
  num1: number = 10;
  num2: number = 20;
  op: string = '*';
}
