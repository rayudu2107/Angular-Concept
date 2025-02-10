import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';

@Component({
  selector: 'app-product',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './product.component.html',
  styleUrl: './product.component.scss'
})
export class ProductComponent {
 // http api calls
  constructor(private http: HttpClient) { }
  data:any;
  getData() {
    this.http.get('https://fakestoreapi.com/products?limit=5')
      .subscribe((data) => {
        console.log(data)
        this.data=data
    })
  }
}
