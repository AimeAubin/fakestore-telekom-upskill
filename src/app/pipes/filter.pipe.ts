import { Pipe, PipeTransform } from '@angular/core';
import { Product } from '../types/products-type';

@Pipe({
  name: 'filter',
})
export class FilterPipe implements PipeTransform {
  transform(products: Product[], searchItem: string): Product[] {
    if (!products || !searchItem) {
      return products;
    }
    return products.filter((product) =>
      product['title'].toLowerCase().includes(searchItem.toLowerCase())
    );
  }
}
