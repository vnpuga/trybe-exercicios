import { render, screen } from '@testing-library/react';
import App from './App';
import userEvent from '@testing-library/user-event';

describe('Tela de inserção de email', () => {

  test('Verificando se existe o campo email', () => {
    // acessar os elementos
    render(<App />); // render recebe o componente q será renderizado
    const inputEmail = screen.getByLabelText("Email"); 

    // fazer os testes
    expect(inputEmail).toBeInTheDocument(); 
    expect(inputEmail.type).toBe("email");
  });


  // test('Verifica se existe um botão', () => {
  //   render(<App />);
  //   const btn = screen.getByRole('button'); // assim dá certo se existir apenas um botao

  //   expect(btn).toBeInTheDocument();
  // });


  test('Verifica se existem dois botões', () => {
    render(<App />);
    const btn = screen.getAllByRole('button'); // pegará todos os botões e retornara um 'ARRAY';

    expect(btn).toHaveLength(2); 
  });


  test('Verificando se existe um botão de enviar', () => {
    render(<App />);
    const btnSend = screen.getByTestId('id-send');

    expect(btnSend).toBeInTheDocument();
    expect(btnSend).toHaveProperty('type', 'button');
    expect(btnSend).toHaveValue('Enviar');
  });
  

  test('Verificando se o botão e o campo email estão funcionando.', () => {
    //acessar oselementos na tela
    render(<App />);
    const inputEmail = screen.getByLabelText('Email');
    const btnSend = screen.getByTestId('id-send');
    const userEmal = screen.getByTestId('id-email-user'); // está no h2

    //interagir com os elementos (se necessário)
    const EMAIL_USER = 'email@email.com';
    userEvent.type(inputEmail, EMAIL_USER); 
    userEvent.click(btnSend); 

    //fazerr os testes
    expect(inputEmail).toHaveValue('');
    expect(userEmal).toBeInTheDocument();
    expect(userEmal).toHaveTextContent('Valor:'); 
    expect(userEmal).toHaveTextContent(`Valor: ${ EMAIL_USER }`); 
  });
})


// screen.getByLabelText("Email"); procura uma label com esse texto e retorna o input relacionado a ela
// .toBeInTheDocument(); sintaxe q garante q algo está sendorenderizado na tela
//linha 38: .toHaveProperty(keyPath, value?), .toHaveProperty para verificar se a propriedade na referência fornecida keyPath existe para um objeto. 
//linha 54: passando o campo do input como primeiro parâmetro e o valor esperado como segundo parâmetro ( 'email@email.com' ). Significa q o userEvent.type, vai no input e simula a digitação de uma pessoa.
//linha 55: Simulamos um clique no botão com o userEvent.click(btnSend) , passando o elemento do botão como parâmetro.
//linha 58: Verificamos se após o click , o campo de input do email retorna para vazio e se a tag <h2>
//linha 60: Verificamos se a tag <h2> onde o email aparece na tela está apenas com o texto Valor: ,
//linha 61: que anteriormente só exibia Valor: , agora recebe o email passado ao input, resultando em Valor: email@email.com .