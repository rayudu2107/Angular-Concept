import { Component, OnInit } from '@angular/core';
import { DataService } from '../services/data.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-data',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './data.component.html',
  styleUrl: './data.component.scss'
})
export class DataComponent implements OnInit {
  posts: any[] = [];

  constructor(private postService: DataService) {}

  ngOnInit() {
    this.postService.fetchPosts(); // Fetch data (only needed once)
    
    this.postService.posts$.subscribe({
      next: (data) => {
        console.log(" Data received:", data); // Logging the API response
        this.posts = data;
      },
      error: (err) => console.error(" Error:", err), // Logging errors
      complete: () => console.log(" AsyncSubject completed!") // Confirms completion
    });
  }
}