// https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Array 

let tasksList = ['Tomar café', 'Reunião', 'Brincar com o cachorro'];

console.log(tasksList.length); //3
//por meio do .length , conseguimos ter acesso à quantidade de elementos contidos nele. 

//acessar os arrays pelo seu índice.
console.log(tasksList[0]);   //primeira posição

console.log(tasksList[tasksList.length -1]); //última posição

tasksList.push('Fazer exercícios da Trybe'); // .push() adiciona um novo item no final do array
console.log(tasksList);

tasksList.unshift('Caminhada'); // .unshift() adiciona um novo item no início do array.
console.log(tasksList);

// remover itens da lista
console.log(tasksList.pop()); // .pop() remove o último item 
console.log(tasksList.shift()); // .shift() remove o primeiro item

//o indexOf() é usado para procurar o índice de um item no Array 
console.log(tasksList.indexOf('Reunião')); // vai retornar 1, pq executou os consoles acima, se comentá-los, exibirá a posição 2. 