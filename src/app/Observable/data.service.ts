import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor() { }
   getNumbers(): Observable<number> {
    return new Observable((observer) => {
      let count = 1;
      const intervalId = setInterval(() => {
        if (count <= 5) {
          observer.next(count); // Emit next value
          count++;
        } else {
          observer.complete(); //complete after 5 emissions
          clearInterval(intervalId);
        }

        // Simulating an error condition
        if (count === 4) {
          observer.error('Something went wrong at count = 4');
        }
      }, 1000);
    });
  }
}
