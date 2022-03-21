import React from "react";
import { render, screen } from '@testing-library/react';
import ValidEmail from "./components/ValidEmail";


// O componente que queremos renderizar precisa de uma props para funcionar, portanto precisamos passar um valor para ela, que no caso é email={ EMAIL_USER } . O teste verifica se, com a prop passada, o nosso teste passará.

// test('Testando um componente, caso o email seja válido', () => {
//   // acessar os elementos da tela
//   const EMAIL_USER = 'email@email.com';
//   render(<ValidEmail email={ EMAIL_USER } />);
//   const isValid = screen.getByText('Email Válido');

//   // fazer os testes
//   expect(isValid).toBeInTheDocument();
// })


test('Testando um componente, caso o email seja inválido.', () => {
  // acessar os elementos da tela
  const EMAIL_USER = 'emailerrado';
  render(<ValidEmail email={ EMAIL_USER } />);
  const isValid = screen.getByText('Email Inválido');

  // fazer os testes
  expect(isValid).toBeInTheDocument();
});


test('Testando se o componente não aparece caso o campo email esteja vazio.', () => {
  // acessar oselementos da tela
  render(<ValidEmail email="" />)
  const isValidText = screen.queryByTestId('id-is-email-valid');

  // fazer os testes
  expect(isValidText).not.toBeInTheDocument();
});

test('Testando se o componente possui texto verde ao ser digitado um email válido.', () => {
  const EMAIL_USER = 'email@email.com';

  // acessar os elementos da tela
  render(<ValidEmail email={EMAIL_USER} />);
  const isValidText = screen.getByTestId('id-is-email-valid');

  // fazer os testes
  expect(isValidText).toHaveAttribute('class', 'green-text');
});


test('Testando se o componente possui texto vermelho ao ser digitado um email inválido.', () => {
  const EMAIL_USER = 'emailerrado';

  // acessar os elementos da tela
  render(<ValidEmail email={EMAIL_USER} />);
  const isValidText = screen.getByTestId('id-is-email-valid');

  // fazer os testes
  expect(isValidText).toHaveAttribute('class', 'red-text');
});



// linha 32: Note que utilizamos o 'queryBy' ao invés do 'getBy', pois o getBy retorna um erro
// caso o elemento não seja encontrado, encerrando o teste, já o queryBy retorna null,
// sendo útil para verificar a não existência de algum elemento na página.

// linha 46 e 58: Utilizando a função 'toHaveAttribute' verificamos se o elemento possui a classe
// com o nome esperado para cada situação