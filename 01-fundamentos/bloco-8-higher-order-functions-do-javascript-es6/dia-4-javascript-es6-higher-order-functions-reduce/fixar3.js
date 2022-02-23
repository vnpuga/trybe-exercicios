// Hora de olhar outro exemplo para fixar e mostrar outras formas de se usar o reduce . Neste exemplo, serão comparados valores para buscar o maior valor em um array. Tente criar essa função apenas com for e depois tente com reduce . Caso não consiga, olhe a solução abaixo:

const numbers = [50, 85, -30, 3, 15];
let result = 0;
for(let index = 0; index < numbers.length; index += 1){
  if(numbers[index] > result){
    result = numbers[index]
  }
}
console.log(result);

// com reduce
const numbers = [50, 85, -30, 3, 15];

const getBigger = (bigger, number) => ((bigger > number) ? bigger : number);

const bigger = numbers.reduce(getBigger, 0);
console.log(bigger); // 85

//A função passada agora pode possuir dois tipos de retorno:
// O retorno do próprio acumulador bigger (no caso true do ternário), o que significa que ele não será modificado; ou
// O valor do elemento do array, number , que indica que possui um valor maior que bigger .
//Modifique o segundo parâmetro passado, o 0 , no reduce para 100 e execute o programa. O retorno agora é 100 , já que nenhum número de dentro do array é maior que o valor inicial passado. Então veja: a cada iteração, o reduce mantém o valor do acumulador igual ou o atualiza de acordo com a comparação que é feita. Ao final, você tem o maior valor do array. Adicione um console.log à função do reduce para ver isso acontecendo em detalhes, se quiser!