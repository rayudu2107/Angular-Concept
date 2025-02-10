import { Component } from '@angular/core';
import { ProductService } from '../product.service';
import { ActivatedRoute } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-products',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './products.component.html',
  styleUrl: './products.component.scss'
})
export class ProductsComponent {
products: any[] = [];
  constructor(private ps: ProductService, private route: ActivatedRoute) { }
  ngOnInit(): void {
    this.route.queryParamMap.subscribe((qparams) => {
      const category = qparams.get('category'); // Get the 'category' query parameter
      if (category) {
        this.products = this.ps.products.filter((p) =>
          p.category.toLowerCase().includes(category.toLowerCase())
        );
      } else {
        this.products = this.ps.products; // Show all products if no category is specified
      }
    });
  }
}
