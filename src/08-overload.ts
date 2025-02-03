// Con la sobrecarga de funciones definimos diferentes firmas de
// una función en la que cada firma puede manejar cierto tipado de entrada
// y salida. TypeScript decidirá de manera automática qué firma es la correcta para usar
//  basándose en los argumentos enviados y el tipo de datos de estos.

function parseStr(input: string): string[];
function parseStr(input: string[]): string;
function parseStr(input: number): boolean;

// function parseStr(input: string | string[]): string | string[] {
//   if (Array.isArray(input)) {
//     return input.join('');
//   } else {
//     return input.split('');
//   }
// }

function parseStr(input: unknown): unknown {
  if (Array.isArray(input)) {
    return input.join('');
  } else if (typeof input === 'string') {
    return input.split('');
  } else if (typeof input === 'number') {
    return true;
  }
}

const rtaArra = parseStr('Andres');
const rtaStr = parseStr(['A', 'n', 'd', 'r', 'e', 's']);

console.log(rtaArra, rtaStr);
