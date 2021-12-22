//7.Utilizando for , descubra qual o menor valor contido no array e imprima-o;

let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
let menorNumero = numbers[0];

for (let index = 1; index < numbers.length; index += 1) {
  if (numbers[index] < menorNumero){
    menorNumero = numbers[index];
  } 
}
console.log(menorNumero);

/// o valor da variável menorNumero poderia ser qualquer um, desde que fosse maior que o maior número do array numbers. Caso atribuíssemos o valor 1 para a variável, nosso algoritmo estaria errado, pois ele nunca acharia um número menor que 1 no array. Para resolver esse problema vamos iniciar a variavel com o primeiro valor do array. Dessa forma podemos pular a posição 0 e iniciar com index = 1

//ou

let menorNumero = Math.min(...numbers)
for (let index = 0; index < numbers.length; index += 1) {
  if (numbers[index] == menorNumero) {
    console.log(menorNumero);
  }
}