const fs = require('fs').promises;

//A flag ``´wx`` abre o arquivo para escrita **apenas** caso ele não exista. Caso o contrário, um erro será lançado:
//rodando esse código, gerará um erro pq o arquivo já existe.

fs.writeFile('./meu-arquivo.txt', 'Eu estive aqui :eyes:', { flag: 'wx' })
  .then(() => {
    console.log('Arquivo salvo');
  })
  .catch((err) => {
    // Se o arquivo existir, um erro é retornado
    console.error(err);
  });

  
 //mudando o nome do arquivo no código, ao rodar, ele gerou um novo arquivo, com o texto abaixo.
 fs.writeFile('./meu-novo-arquivo.txt', 'Eu estive aqui :eyes:', { flag: 'wx' })
  .then(() => {
    console.log('Arquivo salvo');
  })
  .catch((err) => {
    // Se o arquivo existir, um erro é retornado
    console.error(err);
  });