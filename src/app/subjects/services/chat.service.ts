import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ChatService {

  constructor() {
        console.log("🔹 ChatService Initialized");
   }
   private chatSubject = new Subject<string>(); 
  chatObservable$ = this.chatSubject.asObservable(); 

  sendMessage(message: string) {
    this.chatSubject.next(message); 
  }
}
