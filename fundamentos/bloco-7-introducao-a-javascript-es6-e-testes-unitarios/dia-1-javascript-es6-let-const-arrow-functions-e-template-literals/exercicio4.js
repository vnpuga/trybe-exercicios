//Crie uma função que receba uma frase e retorne qual a maior palavra.
//gabarito

const maiorPalavra = (string) => {
  const arrayString = string.split(' '); //1o transformar a frase em um array de palavras
  let tamanhoPalavra = 0;
  let resultado = '';

  for(palavra of arrayString){ //for of percorre os valores de um array
    if(palavra.length > tamanhoPalavra){
      tamanhoPalavra = palavra.length;
      resultado = palavra;
    }
  } return resultado;
};
console.log(maiorPalavra('Antônio foi no banheiro e não sabemos o que aconteceu'));
console.log(maiorPalavra('este bloco 7 está super desafiador'));