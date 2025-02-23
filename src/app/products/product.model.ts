import { BaseModel } from '../base.model';
import { Category } from '../categories/category.model';

export type Sizes = 'S' | 'M' | 'L' | 'XL';

export interface Product extends BaseModel {
  title: string;
  image: string;
  description: string;
  stock: number;
  category: Category;
  color: string;
  price: number;
  isNew: boolean;
  tags: string[];
  size?: Sizes;
}
