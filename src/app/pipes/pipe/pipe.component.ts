import { Component } from '@angular/core';
import { delay, Observable, of } from 'rxjs';
import { CommonModule } from '@angular/common';
import { CustomPipe } from '../custom-pipe.pipe';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-pipe',
  standalone: true,
  imports: [CommonModule,CustomPipe],
  templateUrl: './pipe.component.html',
  styleUrl: './pipe.component.scss'
})
export class PipeComponent {
 amount: number = 1234.56;
  today: Date = new Date();
  decimalNumber: number = 3.14159;
  percentage: number = 0.75; // 75%
  text: string = "Angular Pipes Example";
  jsonData = { name: "John", age: 30, city: "New York" };

  // Async Pipe Example
  asyncData$: Observable<string> = of("Async Pipe Example").pipe(delay(2000));

  // Asynic pipe

  users:any
constructor(private http:HttpClient){}
  ngOnInit(): void{
  //   this.http.get("https://jsonplaceholder.typicode.com/posts").subscribe(
  //     (data) => {
  //       this.users=data
  //    }
    //  )
    this.users=this.http.get("https://jsonplaceholder.typicode.com/posts")
   }
}
