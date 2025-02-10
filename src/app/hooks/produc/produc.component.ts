import { CommonModule } from '@angular/common';
import { AfterViewChecked, AfterViewInit, Component, ElementRef, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-produc',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './produc.component.html',
  styleUrl: './produc.component.scss'
})
export class ProducComponent implements OnInit,AfterViewInit,AfterViewChecked {
   products: string[] = [];

  @ViewChild('titleRef') titleElement!: ElementRef;

  constructor() {
    console.log('Constructor: ProductComponent created');
  }

  ngOnInit(): void {
    console.log('ngOnInit: Fetching product data...');
    setTimeout(() => {
      this.products = ['Laptop', 'Smartphone', 'Tablet', 'Headphones'];
      console.log('Products Loaded!');
    }, 5000);
  }

  ngAfterViewInit(): void {
    console.log('ngAfterViewInit: View has been initialized');
    this.titleElement.nativeElement.style.color = 'blue';
  }

  ngAfterViewChecked(): void {
    console.log('ngAfterViewChecked: View checked and re-rendered');
  }

}
