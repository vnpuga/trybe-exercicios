//Acompanhe o exemplo numérico abaixo para fixar melhor a ideia do spread:
const numbers = [1, 2, 3];

const newArray = [...numbers, 4, 5, 6];
console.log(newArray); // [ 1, 2, 3, 4, 5, 6 ]
console.log(numbers); // [ 1, 2, 3 ]


//O spread é muito útil também quando precisamos combinar arrays em uma única estrutura, como ilustrado abaixo:
const spring = ['OUT', 'NOV', 'DEZ'];
const summer = ['JAN', 'FEV', 'MAR'];
const fall = ['ABR', 'MAI', 'JUN'];
const winter = ['JUL', 'AGO', 'SET'];

const months = [...summer, ...fall, ...winter, ...spring];
console.log(months); /* [
  'JAN', 'FEV', 'MAR',
  'ABR', 'MAI', 'JUN',
  'JUL', 'AGO', 'SET',
  'OUT', 'NOV', 'DEZ'
] */


//Outro uso interessante do spread é no argumento de uma função que recebe vários parâmetros. No próximo exemplo, temos uma função que calcula o IMC (índice de massa corporal) de um paciente. A função recebe como parâmetros o peso e a altura da pessoa, e retorna o resultado arredondado do IMC. Podemos salvar os dados do paciente em um array e utilizar o spread para expandir esses valores no argumento da função que calcula o IMC:
const imc = (peso, altura) => (peso / (altura * altura)).toFixed(2); //toFixed informa casas decimais
const patientInfo = [60, 1.7];

console.log(imc(...patientInfo)); // 20.76


//E você pode aplicar esse conceito em funções prontas do Javascript que recebem múltiplos parâmetros, como as funções Math.max e Math.min . Vamos ver um exemplo?
//O método Math.max() retorna o número com o valor mais alto.
//Math.min() retorna o número com o valor mais baixo.
const randomNumbers = [57, 8, 5, 800, 152, 74, 630, 98, 40];

console.log(Math.max(...randomNumbers)); // 800
console.log(Math.min(...randomNumbers)); // 5


//Outro exemplo que pode ser válido para a sua compreensão é que você também pode fazer o mesmo com objetos. Veja o exemplo abaixo:
const people = {
  id: 101,
  name: 'Alysson',
  age: 25,
};

const about = {
  address: 'Av. Getúlio Vargas, 1000',
  occupation: 'Developer',
};

const customer = { ...people, ...about };
console.log(customer); /* {
  id: 101,
  name: 'Alysson',
  age: 25,
  address: 'Av. Getúlio Vargas, 1000',
  occupation: 'Developer'
} */


//Para fixar e praticar, vamos fazer uma salada de frutas com itens adicionais que você desejar. Faça uma função chamada fruitSalad passando como parâmetro specialFruit e additionalItens , faça a função retornar uma lista única contendo todos os itens da nossa salada de frutas usando o spread .
// Faça uma lista com as suas frutas favoritas
const specialFruit = ['banana', 'laranja', 'mamão'];

// Faça uma lista de complementos que você gostaria de adicionar
const additionalItens = ['leite condensado', 'granola', 'aveia'];

const fruitSalad = (fruit, additional) => {
  // Esreva sua função aqui
  const newFruitSalad = [...fruit, ...additional]
  return newFruitSalad
};

console.log(fruitSalad(specialFruit, additionalItens));
