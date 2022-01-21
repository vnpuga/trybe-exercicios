const collection = [1, 2, 3, 4, 5];

const getSum = (accumulator, number) => {
  console.log(accumulator); // 1 3 6 10 (valores de cada iteração)
  return accumulator + number;
};

const sumNumbers = collection.reduce(getSum);
console.log(sumNumbers); // 15


//O reduce possui uma outra diferença: você pode passar um segundo parâmetro para o reduce, logo após a função . Veja a seguir, será usado o último exemplo dado da soma dos números:
// sem valor inicial
const numbers = [32, 15, 3, 2, -5, 56, 10];

const getSum = (result, number) => {
  console.log(result); // 32 47 50 52 47 103 (valores de cada iteração)
  return result + number;
};

const sumNumbers = numbers.reduce(getSum);
console.log(sumNumbers); // 113


//Com a alteração: (com valor inicial)
const numbers = [32, 15, 3, 2, -5, 56, 10];

const getSum = (result, number) => {
  console.log(result); // 0 32 47 50 52 47 103
  return result + number;
  };
const sumNumbers = numbers.reduce(getSum, 0); // Parâmetro adicionado ao reduce: o "0"; o "0" é o valor inicial, e o reduce comecará com ele, sendo assim, number será a o índice 0 do array.
console.log(sumNumbers); // 113

//Pode ver que mudou em nada o resultado da função. Mas veja que o primeiro valor do result não foi 32 , mas sim 0.


//Agora mude o 0 para 10 ou qualquer outro valor.
const numbers = [32, 15, 3, 2, -5, 56, 10];

const getSum = (result, number) => {
  console.log(result); // 10 42 57 60 62 57 113
  return result + number;
  };
const sumNumbers = numbers.reduce(getSum, 10);
console.log(sumNumbers); // 123

//Agora o resultado mudou para 123 , e o primeiro número impresso foi o 10 . Entendeu? Ao adicionar esse segundo parâmetro você está colocando um valor inicial na variável result , ou seja, no acumulador . Ele é o valor inicial do reduce . Caso nenhum parâmetro seja passado, o seu valor inicial será a primeira posição do array.