import { addProduct, products } from './products/product.service';

import { faker } from '@faker-js/faker';

for (let index = 0; index < 50; index++) {
  addProduct({
    id: faker.string.uuid(),
    title: faker.commerce.productName(),
    description: faker.commerce.productDescription(),
    image: faker.image.urlLoremFlickr(),
    color: faker.color.human(),
    price: parseInt(faker.commerce.price(), 10),
    isNew: faker.datatype.boolean(),
    tags: faker.helpers.arrayElements(['new', 'sale', 'hot'], 2),
    size: faker.helpers.arrayElement(['M', 'S', 'XL', 'L']),
    createdAt: faker.date.recent(),
    updatedAt: faker.date.recent(),
    stock: faker.number.int({ min: 0, max: 100 }),
    category: {
      id: faker.string.uuid(),
      name: faker.commerce.department(),
      createdAt: faker.date.recent(),
      updatedAt: faker.date.recent(),
    },
  });
}

console.log(products);
