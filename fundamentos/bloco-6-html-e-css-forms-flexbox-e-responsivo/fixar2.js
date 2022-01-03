// SELETORES
const INPUT_TEXT = document.querySelector("#input-text");
const INPUT_CHECKBOX = document.querySelector("#input-checkbox");
const HREF_LINK = document.querySelector("#href");

//1 - Adicione um evento click no elemento a que possui o id href . Na função do evento, implemente o método .preventDefault() para previnir o comportamento padrão do elemento. Ou seja, ao clicar no link, nada deve acontecer.
function link(event) {
  event.preventDefault();
}
HREF_LINK.addEventListener('click', link);

//2 - Adicione um evento click no elemento checkbox que possui o id input-checkbox . Na função do evento, implemente o método .preventDefault() para previnir o comportamento padrão do elemento. Ou seja, ao clicar na caixinha, nada deve acontecer.
INPUT_CHECKBOX.addEventListener('click', function (event){
  event.preventDefault();
});

//3 - Adicione um evento keypress no elemento input type="text" que possui o id input-text . Na função do evento, implemente o método .preventDefault() de forma que somente o caractere a (letra 'a' minúscula) possa ser digitado na caixinha. ( dica: para capturar a tecla digitada, utilize o event.key )
function inputText(event){
  const character = event.key;
  if(character !== 'a'){
    event.preventDefault();
  }
}
INPUT_TEXT.addEventListener('keypress', inputText);
//Solução 3
// Neste exercício, o cancelamento do comportamento padrão é adicionado de forma condicional. A cada tecla pressionada pela pessoa usuária que estiver preenchendo o input, é executada uma avaliação. O comportamento padrão de um input de texto é capturar os caracteres digitados e exibi-los dentro da caixa. No entanto, queremos que somente a letra a seja exibida e capturada como value.
// Utilizando o event.key, é possível capturar qual tecla foi pressionada e então submeter o caractere correspondente a uma condição.