import { Component } from '@angular/core';
import { ProductsService } from '../services/products.service';
import { Product } from '../types/products-type';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css'],
})
export class ProductsComponent {
  constructor(private productsService: ProductsService) {}

  products: Product[] = [];

  ngOnInit() {
    this.productsService
      .getProducts('https://fakestoreapi.com/products')
      .subscribe((products: Product[]) => {
        this.products = products;
      });
  }
}
