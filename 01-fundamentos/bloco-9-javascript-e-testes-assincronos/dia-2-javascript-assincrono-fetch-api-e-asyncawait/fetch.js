// const fetch = require('node-fetch');

// const fetchJoke = () => {
//   const url = 'https://api.chucknorris.io/jokes/random?category=dev';

//   console.log(fetch(url));
// }

// fetchJoke();
//Ao rodar esse código você vai perceber que no console foi impresso Promise { <pending> } ao invés da piada. Como foi explicado no tópico de Promises, se o fluxo assíncrono não for controlado, ela vai retornar o seu estado e não o dado requisitado.

//Agora vamos corrigir esse problema:
// const fetch = require('node-fetch');

// const fetchJoke = () => {
//   const url = 'https://api.chucknorris.io/jokes/random?category=dev';

//   fetch(url)
//     .then((response) => response.json())
//     .then((data) => console.log(data.value));
// }

// fetchJoke();
//Ao rodar o código acima recebemos um elogio sobre o Chuck Norris em nosso console. Bacana né?!

//Aqui demonstramos 2 coisas importantes sobre a sintaxe do .then() :
// Passamos como argumento uma função. Essa função também recebe 1 argumento que é a resposta do fetch .
// O .then() é usado "em cadeia", um conceito chamado de chaining. Assim, podemos colocar vários .then() em cadeia, e o argumento da função interna de um será o retorno do anterior. A parte mais importante é que o .then() espera a resposta do fetch (ou o .then() anterior) ser concluída para começar a sua execução. Assim, nosso fluxo está controlado!

//--------------------------------------------------------------------------------//

//Ok, mas e ser der erro em alguma requisição? O que você pode fazer em relação a isso? Agora entra o .catch() ! Vamos adicioná-lo ao código:
const fetch = require('node-fetch');

const fetchJoke = () => {
  const url = 'api.chucknorris.io/jokes/random?category=dev';

  fetch(url)
    .then((response) => response.json())
    .then((data) => console.log(data.value))
    .catch((error) => console.log(`Algo deu errado :( \n${error}`));
}

fetchJoke();

// Algo deu errado :( 
// TypeError: Only absolute URLs are supported

//Note que para forçar o erro retiramos o https:// do início da url .
// Assim como o .then() recebe o retorno caso a requisição seja bem sucedida, o .catch() recebe o erro gerado caso a requisição não seja bem sucedida, que é passado para ele como argumento de sua função interna. Assim, quando o fetch retorna algum erro, todos os .then() são pulados e é executado o primeiro .catch() encontrado. E tem mais! O .catch() também "pega" qualquer erro que acontecer dentro de qualquer .then() anterior a ele. Por esse motivo ele é geralmente usado no final.