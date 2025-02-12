// Las interfaces nos permiten crear moldes de objetos con sus respectivas propiedades
// y tipado. Para generar interfaces usamos la palabra reservada interface.

type Sizes = 'S' | 'M' | 'L' | 'XL';
type userId = string | number; // esto no se puede hacer con interfaces, ya que requiere cuerpo

// TYPE NO SE PUEDE EXTENDER PERO INTERFACE SI

// type Product = {
//   id: string | number;
//   title: string;
//   createdAt: string;
//   stock: number;
//   size?: Sizes;
// };

interface Product {
  id: string | number;
  title: string;
  createdAt: string;
  stock: number;
  size?: Sizes;
}

const products: Product[] = [];

products.push({
  id: 1,
  title: 'Camisa',
  createdAt: new Date().toDateString(),
  stock: 100,
});

const addProduct = (product: Product) => {
  products.push(product);
};
