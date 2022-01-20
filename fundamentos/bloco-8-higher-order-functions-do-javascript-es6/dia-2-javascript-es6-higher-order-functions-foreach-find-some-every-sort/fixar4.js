// Esse exemplo mostra duas formas de resolver o mesmo problema, que é retornar o primeiro número par do array.
// Primeiro observe a função verifyEven . Ela verifica se o número recebido é par. Se sim, seu retorno será true; caso contrário, seu retorno é false.
// Quando a passamos como callback , o find executará a função para cada um dos elementos do array e retornará o primeiro elemento quando o retorno da função for true.

const numbers = [19, 21, 30, 3, 45, 22, 15];

const verifyEven = (number) => number % 2 === 0; // verifica se número recebido é par

const isEven = numbers.find(verifyEven);

console.log(isEven); // 30

console.log(verifyEven(9)); // False
console.log(verifyEven(14)); // True

// Outra forma de ser realizada sem a necessidade de criar uma nova função.
const isEven2 = numbers.find((number) => number % 2 === 0);

console.log(isEven2); // 30


// 1 - Utilize o find para retornar o primeiro número do array que é divisível por 3 e 5 , caso ele exista:
const numbers = [19, 21, 30, 3, 45, 22, 15];

const findDivisibleBy3And5 = () => {
  // Adiciona seu código aqui
  let resultado = '';
  for(let i = 0; i < numbers.length; i +=1){
    if(numbers[i] % 3 === 0 && numbers[i] % 5 === 0){
      resultado = numbers[i];
      return resultado;
    }
  }
}
numbers.find(findDivisibleBy3And5) //find encontro o 1o elemento q satisfaça a condição passada
console.log(findDivisibleBy3And5())

// ou assim : gabarito
const numbers = [19, 21, 30, 3, 45, 22, 15];

const findDivisibleBy3And5 = () => {
  // Adiciona seu código aqui
  return numbers.find((number) => number % 3 === 0 && number % 5 === 0);
}

console.log(findDivisibleBy3And5())


//2 - Utilize o find para encontrar o primeiro nome com cinco letras, caso ele exista:
const names = ['João', 'Irene', 'Fernando', 'Maria'];

const findNameWithFiveLetters = () => {
  // Adicione seu código aqui:
  return names.find((elemento) => elemento.length >= 5);
}

console.log(findNameWithFiveLetters());


// 3 - Utilize o find para encontrar a música com id igual a 31031685 , caso ela exista:
const musicas = [
  { id: '31031685', title: 'Partita in C moll BWV 997' },
  { id: '31031686', title: 'Toccata and Fugue, BWV 565' },
  { id: '31031687', title: 'Chaconne, Partita No. 2 BWV 1004' },
]

function findMusic(id) {
  // Adicione seu código aqui
  return musicas.find((element) => element.id === id);
}

console.log(findMusic('31031685'))