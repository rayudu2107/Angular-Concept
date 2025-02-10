import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class NotificationsService {
  private notifications = new Subject<string>(); // Subject for notifications
  notifications$ = this.notifications.asObservable(); // Observable for components

  constructor() {
    console.log(" NotificationsService Initialized");
  }

  sendNotification(message: string) {
    console.log(` New Notification: ${message}`);
    this.notifications.next(message); // Emit new notification
  }
}
