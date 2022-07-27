"use strict";
// ./exercises.ts
Object.defineProperty(exports, "__esModule", { value: true });
exports.circle = exports.trapeze = exports.lozenge = exports.rectangle = exports.square = exports.triangle = exports.sumArray = exports.add = exports.personAge = exports.greeter = void 0;
// A primeira função recebe um nome e o imprime na tela com o texto "Olá Nome".
function greeter(name) {
    return `Olá ${name}!`;
}
exports.greeter = greeter;
// A segunda função irá mostrar na tela o nome da pessoa e sua idade.
function personAge(name, age) {
    return `${name} tem ${age} anos!`;
}
exports.personAge = personAge;
// A terceira função fará a adição de todos os números que estão dentro de um array. 
// Para isso, faremos uma função add que será chamada dentro da função sumArray, que por sua vez utilizará o método reduce para realizar a soma dos valores.
function add(x, y) {
    return x + y;
}
exports.add = add;
function sumArray(numbers) {
    return numbers.reduce(add, 0);
}
exports.sumArray = sumArray;
// A quarta função será para calcular a área de um triângulo
function triangle(base, height) {
    return (base * height) / 2;
}
exports.triangle = triangle;
// A quinta função será para calcular a área de um quadrado. 
function square(side) {
    return side ** 2;
}
exports.square = square;
// A última função será para calcular a área de um retângulo.
function rectangle(base, height) {
    return base * height;
}
exports.rectangle = rectangle;
// Crie uma nova função para calcular a área de um losango
function lozenge(D, d) {
    return (D * d) / 2;
}
exports.lozenge = lozenge;
// Crie uma nova função para calcular a área de um trapézio.
function trapeze(B, b, h) {
    return ((B + b) * h) / 2;
}
exports.trapeze = trapeze;
// Crie uma nova função para calcular a área de um círculo
function circle(radius) {
    const PI = 3.14;
    return PI * radius ** 2;
}
exports.circle = circle;

// node ./dist/index.js (p/rodar o programa compilado)