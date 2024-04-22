export interface Product {
  id: number;
  title: string;
  price: number;
  description: string;
  category: string;
  image: string;
  rating: {
    rate: number;
    count: number;
  };
}

export interface Products {
  items: Product[];
  total?: number;
  page?: number;
  perPage?: number;
  totalPages?: number;
}
