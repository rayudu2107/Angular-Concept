import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
 private authStatus = new BehaviorSubject<boolean>(false); // Default: not logged in
  authStatus$ = this.authStatus.asObservable();

  constructor() {
    console.log(" AuthService Initialized");
  }

  login() {
    console.log(" User Logged In");
    this.authStatus.next(true); 
  }

  logout() {
    console.log(" User Logged Out");
    this.authStatus.next(false); 
  }
}
