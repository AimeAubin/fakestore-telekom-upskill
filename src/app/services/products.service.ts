import { Injectable } from '@angular/core';
import { ApiService } from './api.service';
import { Product } from '../types/products-type';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ProductsService {
  constructor(private apiService: ApiService) {}

  getProducts = (url: string): Observable<Product[]> => {
    return this.apiService.get(url, {
      responseType: 'json',
    });
  };

  getSingleProduct = (url: string): Observable<Product> => {
    return this.apiService.get(url, {
      responseType: 'json',
    });
  };
}
