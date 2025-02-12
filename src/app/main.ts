import { addProduct } from './products/product.service';

addProduct({
  id: 1,
  title: 'Camisa',
  createdAt: new Date().toDateString(),
  stock: 100,
  category: {
    id: 1,
    name: 'Ropa',
  },
});
