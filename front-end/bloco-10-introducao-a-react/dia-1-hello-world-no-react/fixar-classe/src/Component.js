import React from 'react';

//Na pasta src , crie um arquivo chamado Component.js crie um componente que retorne um <h1> com o seu nome um paragráfo, <p> , com uma breve descrição sobre você.
//Lembre-se, quando vamos retornar mais de um elemento é preciso que eles estejam dentro de um <div>.

class AboutMe extends React.Component{
  render() {
    return (
      <div className='about-me'>
        <h1>Viviane Puga</h1>
        <p>Sou estudante de Desenvolvimento Web na Trybe, em processo de transição de carreira.</p>
      </div>
    )
  }
} 

export default AboutMe;

//Importe seu componente em App.js de modo que ele seja renderizado na tela quando a aplicação for iniciada, npm start .
//Para isso você precisará utilizar o export default para exportar seu componente, o export default é sempre utilizado quando queremos exportar apenas um elemento de um arquivo, seja uma função, um componente ou uma variável. 