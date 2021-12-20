// Escreva um programa que defina três números em constantes e retorne true se pelo menos uma das três for ímpar. Caso contrário, ele retorna false .
// Bonus: use somente um if .

const a = 10;
const b = 23;
const c = 18;

let isOdd = false;
if (a % 2 === 1 || b % 2 === 1 || c % 2 === 1) {
  isOdd = true;
}
console.log(isOdd);

// ou
// if (a % 2 !== 0 || b % 2 !== 0 || c % 2 !== 0) {
//   isOdd = true;
// }
// console.log(isOdd);