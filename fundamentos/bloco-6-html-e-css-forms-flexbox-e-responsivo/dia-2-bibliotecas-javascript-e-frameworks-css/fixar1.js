// moment.js , que já vimos no primeiro vídeo, tem funções para validação, manipulação e visualização de data e hora;

// vamos criar um mecanismo para saber a qto tempo o Brasil foi tetracampeão.

let moment = require("moment"); // variavel para trazer a biblioteca para o código

let brasilTetra = moment('17071994', 'DDMMYYYY'); 
// função moment recebe 2 parâmetros, a data para comparar e o formato da data que quero.

let fromNow = brasilTetra.fromNow();
// função moment e fronNow fazem parte da biblioteca sobre "Tempo Relativo", pesquisar documentação.

console.log('Ouvimos o "É Tetraaaa" a: ' + fromNow);

// cheet.js: qdo usuário digitar as teclas abaixo no navegador, executa a funcao.
// cheet('↑ ↑ ↓ ↓ ← → ← → b a', function () {
//     alert('Voilà!');
//   });
// não deu certo o código da cheeet.