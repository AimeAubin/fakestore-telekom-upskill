import { Component } from '@angular/core';
import { ProductsService } from '../services/products.service';
import { ActivatedRoute } from '@angular/router';
import { Product } from '../types/products-type';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css'],
})
export class ProductComponent {
  constructor(
    private productsService: ProductsService,
    private route: ActivatedRoute
  ) {}

  product: Product = {
    id: 0,
    title: '',
    price: 0,
    description: '',
    category: '',
    image: '',
    rating: {
      rate: 0,
      count: 0,
    },
  };

  ngOnInit() {
    const productId = this.route.snapshot.params['id'];
    this.productsService
      .getSingleProduct(`https://fakestoreapi.com/products/${productId}`)
      .subscribe({
        next: (data) => {
          this.product = data;
        },
        error: (error) => {
          console.log(error);
        },
      });
  }
}
