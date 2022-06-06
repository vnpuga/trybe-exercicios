const readline = require('readline-sync');

const name = readline.question('Qual seu nome? ');
const age = readline.questionInt('Qual sua idade? ');

console.log(`Hello, ${name}! You are ${age} years old!`);

// console.log('Hello, world!');

// nosso script de "Hello, world!" está criado! Mas nosso pacote ainda não está pronto. Vamos criar um script start para estarmos aderentes às convenções do Node.js.

//readline-sync 
//Para podermos ler o nome e sobrenome da pessoa que executou o script, vamos utilizar um pacote de terceiros: o readline-sync.
//Por tratar-se de um módulo de terceiros, precisamos primeiro instalar o readline-sync pra podermos utilizá-lo no código.
// apesar do pacote chamar-se readline-sync, podemos dar qualquer nome para a const que usamos para importá-lo.

//Agora, com o pacote em mãos, podemos utilizar as funções question e questionInt disponibilizadas por ele para perguntar à pessoa usuária seu nome e idade:
// A função question interpreta a resposta como uma string comum, ao passo que a função questionInt converte a resposta para número utilizando o parseInt e retorna um erro caso a pessoa tente inserir algo que não seja um número válido.