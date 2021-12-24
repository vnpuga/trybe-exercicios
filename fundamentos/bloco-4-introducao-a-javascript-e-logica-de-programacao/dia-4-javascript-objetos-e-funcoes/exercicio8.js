//3 - Crie uma função que receba um array de inteiros e retorne o índice do menor valor.

function menorValor(number) {
  let indeceMenor = 0;
  for (let index in number) {
    if(number[index] < number[indeceMenor]){
      indeceMenor = index;
    }
  }
return indeceMenor;
}

console.log(menorValor([2, 4, 6, 7, 10, 0, -3]));