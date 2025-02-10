import { Component, OnInit } from '@angular/core';
import { ChatService } from '../services/chat.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-chat',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './chat.component.html',
  styleUrl: './chat.component.scss'
})
export class ChatComponent implements OnInit {
  messages: string[] = [];

  constructor(private chatService: ChatService) {}

  ngOnInit() {
    this.chatService.chatObservable$.subscribe({
      next: (msg) => {
        console.log(" New message received:", msg);
        this.messages.push(msg);
      },
      error: (err) => console.error(" Error:", err),
      complete: () => console.log(" Chat stream completed!")
    });
  }

  sendMessage(input: HTMLInputElement) {
    if (input.value.trim()) {
      console.log(" Sending message:", input.value);
      this.chatService.sendMessage(input.value);
      input.value = ''; // Clear input field after sending
    }
  }
}