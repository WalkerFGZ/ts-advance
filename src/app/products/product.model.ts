import { Category } from '../categories/category.model';

export type Sizes = 'S' | 'M' | 'L' | 'XL';

export interface Product {
  id: string | number;
  title: string;
  createdAt: string;
  stock: number;
  category: Category;
  size?: Sizes;
}
