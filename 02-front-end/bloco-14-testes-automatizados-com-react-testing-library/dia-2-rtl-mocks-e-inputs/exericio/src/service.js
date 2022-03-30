const randomNumber = () => Math.floor(Math.random() * 101);
module.exports = { randomNumber };

const firstFunction = (str) => str.toUpperCase();
const secondFunction = (str) =>  str.charAt(0);
const thirdFunction = (str1, str2) => str1.concat(str2);

module.exports = {
  firstFunction,
  secondFunction,
  thirdFunction,
};


//O método toUpperCase() retorna o valor da string original convertido em letras maiúsculas.
//O método charAt() retorna o caractere especificado a partir de uma string.
//O método concat() retorna um novo array contendo todos os arrays ou valores passados como parâmetro