// Para fixar ainda mais conceito de reduce, faça uma função que some todos os números pares do array: 
//Solução usando filter e reduce :
const numbers = [18, 19, 23, 53, 4, 5, 76, 23, 54];

const getEven = (number) => number % 2 === 0; //1o funcao para encontrar números pares
const sumPair = (currentValue, number) => currentValue + number; //2o função reduce p/somar valores

const sumNumbers = (array) => array.filter(getEven).reduce(sumPair); // Olhe que código pequeno e conciso!

console.log(sumNumbers(numbers)); // 152


//Solução usando apenas reduce :
const numbers = [18, 19, 23, 53, 4, 5, 76, 23, 54];

const sumPair = (currentValue, number) => (
  (number % 2 === 0) ? currentValue + number : currentValue
);

const sumNumbers = (array) => array.reduce(sumPair, 0);

console.log(sumNumbers(numbers)); // 152