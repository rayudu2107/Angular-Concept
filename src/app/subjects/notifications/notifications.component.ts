import { Component, OnInit } from '@angular/core';
import { NotificationsService } from '../services/notifications.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-notifications',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './notifications.component.html',
  styleUrl: './notifications.component.scss'
})
export class NotificationsComponent implements OnInit {
  notifications: string[] = [];

  constructor(private notificationService: NotificationsService) {}

  ngOnInit() {
    this.notificationService.notifications$.subscribe(msg => {
      console.log(" New Notification Received:", msg);
      this.notifications.push(msg);
    });
  }

  sendNotification() {
    const msg = `Notification ${this.notifications.length + 1}`;
    this.notificationService.sendNotification(msg);
  }
}
