export const createProduct = (
  id: string | number,
  isNew: boolean = true,
  stock: number = 10
) => {
  return {
    id,
    stock,
    isNew,
  };
};

const p1 = createProduct(1, true, 12);

const p2 = createProduct(2);
