// 1- Faça cinco programas, um para cada operação aritmética básica. Seu programa deve ter duas constantes, a e b , definidas no começo com os valores que serão operados. Faça programas para: Adição (a + b),Subtração (a - b), Multiplicação (a * b), Divisão (a / b), Módulo (a % b)

const a = 10;
const b = 30;

function soma(a,b) {
  return a + b;
}

function subtracao(a,b) {
  return a - b;
}

function multiplicacao(a,b) {
  return a * b;
}

function divisao(a,b) {
  return a / b;
}

function modulo(a,b) {
  return a % b;
}

console.log(soma(a,b));
console.log(subtracao(a,b));
console.log(multiplicacao(a,b));
console.log(divisao(a,b));
console.log(modulo(a,b));