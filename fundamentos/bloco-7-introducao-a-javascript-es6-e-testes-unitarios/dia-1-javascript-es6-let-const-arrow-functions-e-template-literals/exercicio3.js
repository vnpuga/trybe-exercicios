// Crie uma função que receba um número e retorne seu fatorial.
// Na matemática, o fatorial de um número não negativo N , com a notação N! , é o produto de todos os inteiros menores ou iguais a N . Exemplo: 4! = 4 * 3 * 2 * 1 = 24.

const fatorial = (number) => {
  let resultado = 1; // se atribuir 0, resultado sempre será 0 (numero * 0 = 0);
  for(let index = 1; index <= number; index += 1) {
    resultado *= index; // *= atribuição de multiplicação, é o mesmo q resultado = resultado * index
  }
  return resultado;
}
console.log(fatorial(4));


// Bônus (opcional): tente fazer o mesmo exercício de forma recursiva . Spoiler: É possível resolver com uma linha usando ternary operator
// gabarito
const factorial = number => number > 1 ? number * factorial(number - 1) : 1;
console.log(factorial(4));