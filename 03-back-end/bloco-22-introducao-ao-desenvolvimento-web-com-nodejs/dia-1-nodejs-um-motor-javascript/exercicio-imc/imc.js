const readline = require('readline-sync');

const PESO_PADRAO_EM_KG = 60; // Você pode utilizar o valor que desejar aqui
const ALTURA_PADRAO_EM_CM = 172; // Você pode utilizar o valor que desejar aqui

// imc = divide-se o peso do paciente pela sua altura elevada ao quadrado

function calculaImc(peso, altura) {
  console.log(`Peso: ${peso}, Altura: ${altura}`);

  const alturaEmMetros = altura / 100;
  const alturaAoQuadrado = alturaEmMetros ** 2;

  const imc = (peso / alturaAoQuadrado);
  
  return imc;
}

// A função main é o ponto de partida do nosso programa 
function main() {
  const peso = readline.questionFloat('Qual seu peso? (em kg)');
  const altura = readline.questionInt("Qual sua altura? (em cm)");
  const imc = calculaImc(peso, altura);

  console.log(`IMC: ${imc.toFixed(2)}`);

  if (imc < 18.5) {
    console.log('Situação: Abaixo do peso (magreza)');
    return;
  }

  if (imc >= 18.5 && imc < 25) {
    console.log('Situação: Peso normal');
    return;
  }

  if (imc >= 25 && imc < 30) {
    console.log('Situação: Acima do peso (sobrepeso)');
    return;
  }

  if (imc >= 30 && imc < 35) {
    console.log('Situação: Obesidade grau I');
    return;
  }

  if (imc >= 35 && imc < 40) {
    console.log('Situação: Obesidade grau II');
    return;
  }

  console.log('Situação: Obesidade graus III e IV');
}

main();