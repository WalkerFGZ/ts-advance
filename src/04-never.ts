// El never type se usa para funciones que nunca van a
// terminar o que detienen el programa. Con esto TypeScript nos
// ayuda a detectarlos como por ejemplo un ciclo infinito cuando lanzamos un mensaje de error.

const withoutEnd = () => {
  while (true) {
    console.log('Hello');
  }
};

const fail = (message: string) => {
  throw new Error(message);
};

const example = (input: unknown) => {
  if (typeof input === 'string') {
    return input.toUpperCase();
  } else if (Array.isArray(input)) {
    return input.join(', ');
  }

  return fail('Invalid input');
};
