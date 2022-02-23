//1 - Dada uma matriz, transforme em um array.

const arrays = [
  ['1', '2', '3'],
  [true],
  [4, 5, 6],
];

// gabarito
function flatten() {
  // escreva seu código aqui
  return arrays.reduce((acc, curr) => acc.concat(curr), []);
}
console.log(flatten());

//https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Array/concat
//o método concat() retorna um novo array contendo todos os arrays ou valores passados como parâmetro
