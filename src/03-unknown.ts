// El unknown type nos indica que una variable es de un tipo de dato desconocido. Es similar a any,
// pero sin quitar el análisis de código estático que nos brinda TypeScript.

let anyVa: any = 10;
anyVa = '10';

let unKnowVar: unknown = 10;
unKnowVar = '10';
unKnowVar = true;
unKnowVar = undefined;
unKnowVar = 1;

//unKnowVar.toUpperCase(); // Error

if (typeof unKnowVar === 'string') {
  unKnowVar.toUpperCase(); // OK
}

if (typeof unKnowVar === 'boolean') {
  // validate type of variable
  let isNew: boolean = unKnowVar;
}

const parse = (str: string): unknown => {
  return JSON.parse(str);
};
