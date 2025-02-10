import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-onchages-on-init',
  standalone: true,
  imports: [],
  templateUrl: './onchages-on-init.component.html',
  styleUrl: './onchages-on-init.component.scss'
})
export class OnchagesOnInitComponent implements OnChanges,OnInit{
 @Input() cdata: string = '';  
  @Input() count: number = 0;  

  constructor() {
    console.log('Constructor: Component instance created');
  }

  ngOnInit(): void {
    console.log('ngOnInit: Component initialized');
  }

  ngOnChanges(changes: SimpleChanges): void {
    console.log('ngOnChanges: Changes detected');

    if (changes['cdata']) {
      console.log('cdata Changed!');
      console.log('Previous Value:', changes['cdata'].previousValue);
      console.log('Current Value:', changes['cdata'].currentValue);
    }

    if (changes['count']) {
      console.log('count Changed!');
      console.log('Previous Value:', changes['count'].previousValue);
      console.log('Current Value:', changes['count'].currentValue);
    }
  }
}