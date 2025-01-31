// Los parámetros opcionales son aquellos que podemos
//  obviar su envío cuando mandamos datos en una función
//  que requiere argumentos.

// El nullish-coalescing nos permite evaluar si una
// variable está definida, pero si esta es null o undefined,
// retorna un segundo valor diferente.

export const createProduct = (
  id: string | number,
  isNew?: boolean,
  stock?: number
) => {
  return {
    id,
    stock: stock ?? 10, // Si stock es null o undefined, asigna 10
    isNew: isNew ?? true, // Si isNew es null o undefined, asigna false
  };
};

const p1 = createProduct(1, true, 12);

const p2 = createProduct(2);
