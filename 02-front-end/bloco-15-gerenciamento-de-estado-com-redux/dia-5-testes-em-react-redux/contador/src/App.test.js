import React from 'react'
import { Provider } from 'react-redux'
import { render, cleanup } from '@testing-library/react';
import App from './App';
import { createStore, combineReducers } from 'redux';
import clickReducer from './reducers';

const renderWithRedux = (
  component,
  { initialState, store = createStore(combineReducers({ clickReducer }), initialState) } = {}
) => {
  return {
    ...render(<Provider store={store}>{component}</Provider>),
    store,
  }
}

describe('testing clicks', () => {
  beforeEach(cleanup);
  test('the page should has a button and a text 0', () => {
    const { queryByText } = renderWithRedux(<App />);
    const buttonAdicionar = queryByText('Clique aqui');

    expect(buttonAdicionar).toBeInTheDocument();
    expect(queryByText('0')).toBeInTheDocument();
  });
});


//Caso seja interessante alterar o valor inicial do clickReducer , isso também é possível passando como 
// segundo parâmetro para a função renderWithRedux um objeto com as propriedades que respeitem o formato 
// original do state . 
// Observe: o objeto initialState representa o valor inicial do state . O clickReducer representa o reducer 
// criado. O counter representa a propriedade que criamos dentro do nosso reducer . Vamos testar essa 
// alteração no estado inicial:

test('a click in a button should increment the value of clicks', () => {
  const { queryByText } = renderWithRedux(<App />, { initialState: { clickReducer: { counter: 5 }}});

  expect(queryByText('5')).toBeInTheDocument();
});