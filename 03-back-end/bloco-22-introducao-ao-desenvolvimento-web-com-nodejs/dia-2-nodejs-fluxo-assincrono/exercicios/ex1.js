//Crie uma função que receba três parâmetros e retorna uma Promise.
// Caso algum dos parâmetros recebidos não seja um número, rejeite a Promise com o motivo "Informe apenas números".
// Caso todos os parâmetros sejam numéricos, some os dois primeiros e multiplique o resultado pelo terceiro ((a + b) * c).
// Caso o resultado seja menor que 50, rejeite a Promise com o motivo "Valor muito baixo"
// Caso o resultado seja maior que 50, resolva a Promise com o valor obtido.

function calcular(a, b, c) {
  const promise = new Promise((resolve, reject) => {
    if(typeof a !== 'number' || typeof b !== 'number' || typeof c !== 'number') {
      return reject(new Error('Informe apenas números'));
    }
    const resultado = (a + b) * c;
    if(resultado < 50) {
      return reject(new Error('Valor muito baixo'));
    }
    resolve(resultado);
  });
  return promise;
}

calcular(10, 10, 10)
  .then((resolve) => console.log(resolve))
  .catch((error) => console.log(error.message));
  
calcular(1, 'a', 2)
  .then((resolve) => console.log(resolve))
  .catch((error) => console.log(error.message));

calcular(1, 1, 2)
  .then((resolve) => console.log(resolve))
  .catch((error) => console.log(error.message));
