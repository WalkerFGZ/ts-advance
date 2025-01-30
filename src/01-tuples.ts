// Las tuplas o tuples nos permiten crear un array fuertemente tipado especificando el tipo de
// dato de cada elemento, así como una cantidad definida de elementos que podrá almacenar.

const prices: (number | string)[] = [1, 2, 3, 'abc'];
prices.push(1);
prices.push('def');

let user: [string, number, boolean];
// user = ['andres', 24]; // Error: Expected 3 elements, but got 2.
user = ['andres', 24, false];
const [username, age] = user; // Destructuring

console.log(username);
