const fs = require('fs').promises;

//1 - Crie uma função que leia todos os dados do arquivo e imprima cada personagem no formato id - Nome. Por exemplo: 1 - Homer Simpson.
async function readAllComAsyncAwait() {
  const fileContent = await fs.readFile('./simpsons.json', 'utf-8');
  const simpsons = JSON.parse(fileContent);
  const strings = simpsons.map(({ id, name }) => `${id} - ${name}`);

  strings.forEach((string) => console.log(string));
}
readAllComAsyncAwait();


//2 - Crie uma função que receba o id de uma personagem como parâmetro e retorne uma Promise que é resolvida com os dados da personagem que possui o id informado. Caso não haja uma personagem com o id informado, rejeite a Promise com o motivo "id não encontrado".

async function getSimpsonById(id) {
  const fileContent = await fs.readFile('./simpsons.json', 'utf-8');
  const simpsons = JSON.parse(fileContent);

  const chosenSimpson = simpsons.find((simpson) => Number(simpson.id) === id);

  if (!chosenSimpson) {
    /* A palavra-chave `throw` dispara um erro que deve ser tratado por quem chamou nossa função.
     * Em funções `async`, utilizar `throw` faz com que a Promise seja rejeitada,
     * tendo como motivo o que passarmos para o `throw`.
     * Ou seja, a linha abaixo rejeita a Promise da nossa função com um Erro que tem a mensagem 'id não encontrado'
     */
    throw new Error('id não encontrado');
  }
  /* Da mesma forma que `throw` aciona o fluxo de erro e rejeita a Promise,
      * `return` aciona o fluxo de sucesso e resolve a Promise.
      * Sendo assim, a linha abaixo é equivalente a chamar `resolve(chosenSimpson)`
      * dentro do executor de uma Promise.
      */
  return chosenSimpson;
}
//Para receber o retorno dessa função assíncrona, ou seja, a resolução dessa promise, precisamos usar ou `await` ou `.then` ao executá-la. Assim:
// Opção 1:
async function main() {
  const simpson = await getSimpsonById(1);
  filterSimpsons();
  createSimpsonsFamily();
  addNelsonToFamily();
  replaceNelson();
  console.log(simpson);
}

// Opção 2:
// function main() {
//   getSimpsonById(1)
//     .then((simpson) => console.log(simpson));
// }
main();


//3 - Crie uma função que altere o arquivo simpsons.json retirando os personagens com id 10 e 6.
async function filterSimpsons() {
  const fileContent = await fs.readFile('./simpsons.json', 'utf-8');  
  const simpsons = JSON.parse(fileContent);
  //Filtrar o array para remover as personagens que devem ser removidas.
  const newArray = simpsons.filter((simpson) => simpson.id !== '10' && simpson.id !== '6');
  //- Escrever no arquivo o novo array filtrado.
  await fs.writeFile('./simpsons.json', JSON.stringify(newArray));
}
// funcao filterSimpsons(), foi chamada na funcao main() acima.


//4 - Crie uma função que leia o arquivo simpsons.json e crie um novo arquivo, chamado simpsonFamily.json, contendo as personagens com id de 1 a 4.
async function createSimpsonsFamily() {
  const fileContent = await fs.readFile('./simpsons.json', 'utf-8');
  const simpsons = JSON.parse(fileContent);
  //- Criar um array com os IDs da familia e filtrar apenas com os membros com esses IDs.
  const familyIds = [1, 2, 3, 4];
  const simpsonsFamily = simpsons
    .filter((simpson) => familyIds.includes(Number(simpson.id))); // aqui convertemos o ID pra número, já que ele está salvo no JSON como string
  //- Escrever o novo arquivo no disco.
  await fs.writeFile('./simpsonsFamily.json', JSON.stringify(simpsonsFamily));
}
// funcao createSimpsonsFamily(), foi chamada na funcao main() acima.



//5- Crie uma função que adicione ao arquivo simpsonFamily.json o personagem Nelson Muntz.
async function addNelsonToFamily() {
  const fileContent = await fs.readFile('./simpsonsFamily.json', 'utf-8');  
  const simpsonsFamily = JSON.parse(fileContent);
  //- Adicionar uma nova pessoa ao array de `simpsonsFamily`.
  simpsonsFamily.push({ id: '8', name: 'Nelson Muntz' });
  //- Escrever o novo conteúdo do arquivo.
  await fs.writeFile('./simpsonsFamily.json', JSON.stringify(simpsonsFamily));
}
// funcao addNelsonToFamily(), foi chamada na funcao main() acima.


//6 -Crie uma função que substitua o personagem Nelson Muntz pela personagem Maggie Simpson no arquivo simpsonFamily.json.
async function replaceNelson() {
  const fileContent = await fs.readFile('./simpsonsFamily.json', 'utf-8');
  const simpsons = JSON.parse(fileContent);

  // Filtramos o array para remover o personagem Nelson
  const simpsonsWithoutNelson = simpsons.filter((simpson) => simpson.id !== '8');

  // Criamos um novo Array contendo a personagem Maggie
  const simpsonsWithMaggie = simpsonsWithoutNelson
    .concat([{ id: '15', name: 'Maggie Simpson' }]);
  // com spread seria assim: 
  // const simpsonsWithMaggie = [ ...simpsonsWithoutNelson, simpsonsWithMaggie ]

  // Escrevemos o novo array no arquivo e retornamos a promise de escrita
  return fs.writeFile('./simpsonsFamily.json', JSON.stringify(simpsonsWithMaggie));
}
// funcao addNelsonToFamily(), foi chamada na funcao main() acima.