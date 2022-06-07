const operations = require('./calculadora');
const readLine = require('readline-sync');

console.log("Calculadora simples");
const num1 = readLine.questionInt("Digite o número: ");
const oper = readLine.question("Digite a operação: (+, -, *, /)");
const num2 = readLine.questionInt("Digite o número: ");

switch(oper) {
  case "+":
    operations.sum(num1, num2)
    break;
  case "-":
    operations.sub(num1, num2)
    break;
  case "*":
    operations.mul(num1, num2)
    break;
  case "/":
    operations.div(num1, num2)
    break;
  default:
    console.log("Opa! A operação é desconhecida ou não foi implementada.")
}