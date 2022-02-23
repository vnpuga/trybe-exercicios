// função soma todos os valores do array
// com for primeiro:

const numbers = [32, 15, 3, 2, -5, 56, 10];
let sumNumbers = 0;
// A variável 'acumula', a cada iteração do for, o resultado da operação feita lá!

for (let index = 0; index < numbers.length; index += 1) {
  sumNumbers += numbers[index];
}
console.log(sumNumbers); // 113


// com reduce:

const numbers = [32, 15, 3, 2, -5, 56, 10];

const sumNumbers = numbers.reduce((result, number) => result + number); // O parâmetro `result` é o acumulador. Ele recebe, do `reduce`, o retorno da função a cada iteração.
console.log(sumNumbers); // 113

// Ou seja:

const getSum = (result, number) => result + number;
const sumNumbers = numbers.reduce(getSum);
console.log(sumNumbers); // 113

//Usando .reduce :
// A função passada por parâmetro recebe dois parâmetros, o acumulador result e o elemento do array de cada iteração, number ;
// Como a função é uma arrow function que possui apenas uma linha, o retorno de cada iteração será: result + number ;
// O retorno é salvo no primeiro parâmetro , result . É como se você estivesse fazendo igual à primeira função, sumNumbers = sumNumbers + numbers[index] , mas nesse caso seria result = result + number ;