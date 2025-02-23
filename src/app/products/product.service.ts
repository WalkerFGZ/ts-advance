import { CreateProductDto } from './product.dto';
import { Product } from './product.model';
import { faker } from '@faker-js/faker';

export const products: Product[] = [];

export const addProduct = (product: CreateProductDto): Product => {
  const newProduct = {
    ...product,
    id: faker.string.uuid(),
    createdAt: faker.date.past(),
    updatedAt: faker.date.recent(),
    category: {
      id: product.categoryId,
      name: faker.commerce.department(),
      createdAt: faker.date.recent(),
      updatedAt: faker.date.recent(),
    },
  };
  products.push(newProduct);
  return newProduct;
};

export const updateProduct = (id: string, changes: Product) => {
  // TODO
};

export const deleteProduct = (id: string) => {
  // TODO
};

export const getProduct = (id: string) => {
  // TODO
};
