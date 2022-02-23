//5.Utilizando for , descubra qual o maior valor contido no array e imprima-o;

let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
// let maiorNumero = 0;
for (let index = 0; index < numbers.length; index++) {
  if (numbers[index] > maiorNumero) {
    maiorNumero = numbers[index];
  }
}
console.log(maiorNumero);

//ou

// let maiorNumero = Math.max(...numbers);
// for (let index of numbers) {
//   if(index == maiorNumero){
//     console.log(maiorNumero);
//   }
// }

//// https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Math/max
// https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Operators/Spread_syntax
// Para encontrar o maior número é possível usar Math.max.apply (null, numeros) ou Math.max (... numeros)
