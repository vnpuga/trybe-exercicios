//1- O fatorial é a multiplicação de um número natural pelos seus antecessores, exceto o zero. Por exemplo:
// O fatorial é representado pelo sinal !
// 4! = 4 x 3 x 2 x 1 = 24
// Com base nessas informações, crie um algoritmo que retorne o fatorial de 10.

let fatorial = 10;
let resultado = fatorial; // resultado será usado no for para multiplicar
let primeiraMultiplicacao = fatorial - 1; // no 1o loop será 9 (10 -1, ou seja n-1), que é maior que 1, e multiplicará pelo resultado, que é fatorial.
for (let index = primeiraMultiplicacao; index > 1; index -= 1) {
  resultado *= index;  
}
console.log(resultado);

//https://serprogramador.com.br/artigos/topico/javascript/Como-calcular-a-operacao-matematica-de-fatorial-com-JavaScript