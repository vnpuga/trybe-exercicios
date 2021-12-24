//6 - Crie uma função que receba um número inteiro N e retorne o somatório de todos os números de 1 até N.

function somatorio(number) {
  let soma = 0;
  for (let index = 1; index <= number; index += 1) {
    soma = soma + index;    
  }
  return soma;
}
console.log(somatorio(5));
