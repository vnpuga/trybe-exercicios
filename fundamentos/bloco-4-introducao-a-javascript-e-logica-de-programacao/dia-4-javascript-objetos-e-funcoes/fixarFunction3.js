// 2 - Faça um programa que retorne o maior de três números. Defina, no começo do programa, duas constantes com os valores que serão comparados.

function maiorNum(a,b,c) {
  if (a > b && a > c) {
    return "o maior número é " + a;
  } else if (b > a && b > c) {
    return "o maior numero é " + b;
  } else {
    return "o maior numero é " + c;
  }
}
  
console.log(maiorNum(45,10,80));