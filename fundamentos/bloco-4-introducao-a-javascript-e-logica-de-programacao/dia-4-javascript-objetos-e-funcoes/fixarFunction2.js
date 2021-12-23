// 2 - Faça um programa que retorne o maior de dois números. Defina, no começo do programa, duas constantes com os valores que serão comparados.

function maiorNum(a,b) {
  if (a > b) {
    return "o maior número é " + a;
  } else {
    return "o maior numero é " + b;
  }
}

console.log(maiorNum(45,100));
