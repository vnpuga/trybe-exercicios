// 1- Para o primeiro exercício de hoje, faça um programa que, dado um valor n qualquer, seja n > 1 , imprima na tela um quadrado feito de asteriscos de lado de tamanho n . Por exemplo:
// n = 5

// *****
// *****
// *****
// *****
// *****


let n = 5;
let aux = "";
for (let linha = 1; linha <= n; linha += 1) {
  for (let coluna = 1; coluna <= n; coluna += 1) {
    aux += "*";
  }
  console.log(aux);
  aux = "";
}