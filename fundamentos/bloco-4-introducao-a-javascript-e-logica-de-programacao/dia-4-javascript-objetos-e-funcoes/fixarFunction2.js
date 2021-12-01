// 2 - Faça um programa que retorne o maior de dois números. Defina, no começo do programa, duas constantes com os valores que serão comparados.

const a = 45;
const b = 100;

function maiorNum(a,b) {
  if (a > b) {
    return "o maior número é " + a;
  } else {
    return "o maior numero é " + b;
  }
}

console.log(maiorNum(a,b));
