import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AsyncSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataService {

   private postSubject = new AsyncSubject<any>(); 
  posts$ = this.postSubject.asObservable(); 

  constructor(private http: HttpClient) {}

  fetchPosts() {
    this.http.get('https://jsonplaceholder.typicode.com/posts')
      .subscribe(response => {
        this.postSubject.next(response);  
        this.postSubject.complete();     
      });
  }
}
