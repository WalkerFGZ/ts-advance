import { Product } from './product.model';

// DTOs (Data Transfer Objects) are used to define
// the shape of the data that is sent
// between the client and the server.
export interface CreateProductDto
  extends Omit<Product, 'id' | 'createdAt' | 'updatedAt' | 'category'> {
  categoryId: string;
}

type examplePick = Pick<Product, 'title' | 'image'>;

type UpdatedProductDtoExample = Partial<Product>;

type example2 = Required<Product>;

export interface UpdateProductDto extends Partial<CreateProductDto> {}

export interface FindProductDto extends Readonly<Partial<CreateProductDto>> {}
