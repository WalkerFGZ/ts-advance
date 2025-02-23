import {
  addProduct,
  findProducts,
  products,
  updateProduct,
} from './products/product.service';

import { faker } from '@faker-js/faker';

for (let index = 0; index < 50; index++) {
  addProduct({
    title: faker.commerce.productName(),
    description: faker.commerce.productDescription(),
    image: faker.image.urlLoremFlickr(),
    color: faker.color.human(),
    price: parseInt(faker.commerce.price(), 10),
    isNew: faker.datatype.boolean(),
    tags: faker.helpers.arrayElements(['new', 'sale', 'hot'], 2),
    size: faker.helpers.arrayElement(['M', 'S', 'XL', 'L']),
    stock: faker.number.int({ min: 0, max: 100 }),
    categoryId: faker.string.uuid(),
  });
}

console.log(products);

const product = products[0];
updateProduct(product.id.toString(), {
  title: 'New Product title',
  stock: 80,
});

findProducts({
  stock: 10,
  color: 'red',
});
