const fs = require('fs');

const nomeDoArquivo = 'meu-arquivo.txt';

try {
  const data = fs.readFileSync(nomeDoArquivo, 'utf8');
  console.log(data);
} catch (err) {
  console.error(`Erro ao ler o arquivo: ${err.path}`);
  console.log(err);
}

// outra forama é passar o caminho/nome do arquivo diretamento para a função.
// try {
//   const data = fs.readFileSync('./meu-arquivo.txt', 'utf8');
//   console.log(data);
// } catch (err) {
//   console.error(`Erro ao ler o arquivo: ${err.path}`);
//   console.log(err);
// }

//O método readFileSync recebe dois parâmetros:
// 1- O nome do arquivo;
// 2- Um parâmetro opcional que, quando é uma string, define o encoding que será utilizado durante a leitura do arquivo.