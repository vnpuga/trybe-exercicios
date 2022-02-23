// Ordene o array numbers em ordem crescente e imprima seus valores; http://devfuria.com.br/logica-de-programacao/introducao-ao-algoritmo-de-ordenacao-bubble-sort/

let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];

// for (let index = 1; index < numbers.length; index += 1) { //começa 1a posição a frente do 20 for.
//   for (let secondIndex = 0; secondIndex < index; secondIndex += 1) {
//     if (numbers[index] < numbers[secondIndex]) {
//       let position = numbers[index]; //variavel criada para guardar o númbers[index] (1o for), caso ele seja menor (if true) do que numbers[secondIndex] (20 for).
//       numbers[index] = numbers[secondIndex]; //aqui acontecerá 1a troca, number[index], vai receber number[secondIndex], ou seja, onde estava o numero menor [index], agora terá o número maior [secondIndex].
//       numbers[secondIndex] = position; // a troca se completa, ao trazer o menor número (number[index]), para a índice anterior (number[secondIndex]).
//     }
//   }
// }
// console.log(numbers);

//Ordene o array numbers em ordem decrescente e imprima seus valores;

// for (let index = 1; index < numbers.length; index += 1) { //começa 1a posição a frente do 20 for.
//   for (let secondIndex = 0; secondIndex < index; secondIndex += 1) {
//     if (numbers[index] > numbers[secondIndex]) {
//       let position = numbers[index]; 
//       numbers[index] = numbers[secondIndex]; 
//       numbers[secondIndex] = position; 
//     }
//   }
// }
// console.log(numbers);

//Agora crie um novo array a partir do array numbers , sem perdê-lo. Cada valor do novo array deverá ser igual ao valor correspondente no array numbers multiplicado pelo seguinte. Por exemplo: o primeiro valor do novo array deverá ser 45, pois é a multiplicação de 5 (primeiro valor) e 9 (valor seguinte). Já o segundo valor do novo array deverá ser 27, pois é a multiplicação de 9 (segundo valor) e 3 (valor seguinte), e assim por diante. Caso não haja próximo valor, a multiplicação deverá ser feita por 2. Faça isso utilizando o for e o método push . O resultado deve ser o array abaixo:

let novoArray = [];

for (let index = 0; index < numbers.length; index += 1) {
  if(index + 1 < numbers.length) { //se index + 1 posição, for menor que nummers.length (tamanho array)
  novoArray.push(numbers[index] * numbers[index + 1]) //index na posicao atual * index na posiçao seguinte
  } else {
  novoArray.push(numbers[index] * 2);
  }
}
console.log(novoArray);
//[5, 9, 3, 19, 70, 8, 100, 2, 35, 27