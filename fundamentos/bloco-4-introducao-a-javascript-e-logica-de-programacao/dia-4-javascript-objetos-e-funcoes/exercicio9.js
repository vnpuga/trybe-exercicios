//4 - Crie uma função que receba um array de nomes e retorne o nome com a maior quantidade de caracteres.

function maiorNome(arrayNomes) {
  let resultado = '';
  for (let index = 0; index < arrayNomes.length; index += 1) {
    if (arrayNomes[index].length > resultado.length) {
      resultado = arrayNomes[index];
    }    
  }
  return resultado;
}

console.log(maiorNome(['José', 'Lucas', 'Nádia', 'Fernanda', 'Cairo', 'Joana']));