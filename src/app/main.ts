import { addProduct } from './products/product.service';

addProduct({
  id: crypto.randomUUID(),
  createdAt: new Date(),
  updatedAt: new Date(),
  title: 'Product 1',
  stock: 10,
  category: {
    id: 1,
    name: 'Category 1',
    createdAt: new Date(),
    updatedAt: new Date(),
  },
});
