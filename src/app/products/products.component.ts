import { Component } from '@angular/core';
import { ProductsService } from '../services/products.service';
import { Product } from '../types/products-type';
import { Router } from '@angular/router';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css'],
})
export class ProductsComponent {
  constructor(
    private productsService: ProductsService,
    private router: Router
  ) {}

  products: Product[] = [];

  ngOnInit() {
    this.productsService
      .getProducts('https://fakestoreapi.com/products')
      .subscribe({
        next: (data) => {
          this.products = data;
        },
        error: (error) => {
          console.log(error);
        },
      });
  }

  onProductClick(productId: number) {
    this.router.navigate(['products', productId]);
  }
}
