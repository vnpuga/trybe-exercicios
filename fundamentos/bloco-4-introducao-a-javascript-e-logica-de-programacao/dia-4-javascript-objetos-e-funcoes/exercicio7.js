//2 - Crie uma função que receba um array de inteiros e retorne o índice do maior valor.

function maiorValor(number) {
  let indiceMaior = 0;
  for (let index in number) {
    if(number[index] > number[indiceMaior]){
      indiceMaior = index;
    }
  }
return indiceMaior;
}

console.log(maiorValor([2, 3, 6, 7, 10, 1]));