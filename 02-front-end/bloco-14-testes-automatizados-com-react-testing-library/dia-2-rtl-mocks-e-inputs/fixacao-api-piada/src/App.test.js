// App.test.js
import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';

afterEach(() => jest.clearAllMocks());

it('fetches a joke', async () => {
  const joke = {
    id: '7h3oGtrOfxc',
    joke: 'Whiteboards ... are remarkable.',
    status: 200,
  };

  jest.spyOn(global, 'fetch');
  global.fetch.mockResolvedValue({
    json: jest.fn().mockResolvedValue(joke),
  });

  render(<App />);
  const renderedJoke = await screen.findByText('Whiteboards ... are remarkable.');
  expect(renderedJoke).toBeInTheDocument();
  expect(global.fetch).toBeCalledTimes(1);
  expect(global.fetch).toBeCalledWith(
    'https://icanhazdadjoke.com/',
    { headers: { Accept: 'application/json' } },
  );
});

//A constante joke cria um objeto similar ao que é retornado da API ;
//O jest.spyon espiona as chamadas a função fetch do objeto global
//Quando a função fetch for chamada, ao invés de fazer uma requisição a uma API externa será chamando nosso mock. Repare que para cada .then utilizamos .mockResolvedValue e simulamos o retorno que o fetch teria, primeiro retornamos um objeto que contem a função .json e dentro dela criamos um mock que retorna a nossa piada, satisfazendo o que é esperado no nosso componente;
//A linha afterEach(() => jest.clearAllMocks()); faz com que, após cada teste, nosso mock seja limpo, ou seja, no caso acima, garante que após o teste o fetch não seja mais um mock , isso é bem util para que não tenha interferência entre um teste e outro.


global.fetch = jest.fn(() => Promise.resolve({
  json: () => Promise.resolve(joke),
}));
//Nesse exemplo estamos dizendo que global.fetch agora é uma função mockada com jest.fn que retorna uma Promise , e na primeira vez que ela for resolvida, deve se retornar um objeto com uma outra função json que também é uma Promise , que quando resolvida retorna sua piada.

// outra forma de escrever o ex acima
global.fetch = jest.fn().mockResolvedValue({
  json: jest.fn().mockResolvedValue(joke)
});


//Outra forma de escrever o mesmo exemplo seria com a sintaxe async/await
global.fetch = jest.fn(async () => ({
  json: async () => joke
}));



