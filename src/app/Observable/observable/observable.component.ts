import { CommonModule } from '@angular/common';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { Observable, Subscription } from 'rxjs';
import { DataService } from '../data.service';

@Component({
  selector: 'app-observable',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './observable.component.html',
  styleUrl: './observable.component.scss'
})
export class ObservableComponent  implements OnInit, OnDestroy {
  message: string = '';
  private subscription!: Subscription;

  constructor(private dataService: DataService) {}

  ngOnInit(): void {
    this.subscription = this.dataService.getNumbers().subscribe({
      next: (value) => {
        this.message = `Received: ${value}`;
        console.log(`Next: ${value}`);
      },
      error: (err) => {
        this.message = `Error: ${err}`;
        console.error(`Error: ${err}`);
      },
      complete: () => {
        this.message = 'Observable completed!';
        console.log('Complete: Observable has finished emitting values.');
      }
    });
  }

  ngOnDestroy(): void {
    if (this.subscription) {
      this.subscription.unsubscribe();
      console.log('Unsubscribed from Observable');
    }
  }
}