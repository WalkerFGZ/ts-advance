import {
  CreateProductDto,
  FindProductDto,
  UpdateProductDto,
} from './product.dto';

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

export const updateProduct = (
  id: string,
  changes: UpdateProductDto
): Product => {
  const index = products.findIndex((product) => product.id === id);
  const prevData = products[index];
  products[index] = {
    ...prevData,
    ...changes,
  };

  return products[index];
};

export const deleteProduct = (id: string) => {
  // TODO
};

export const getProduct = (id: string) => {
  // TODO
};

export const findProducts = (dto: FindProductDto): Product[] => {
  return products;
};
