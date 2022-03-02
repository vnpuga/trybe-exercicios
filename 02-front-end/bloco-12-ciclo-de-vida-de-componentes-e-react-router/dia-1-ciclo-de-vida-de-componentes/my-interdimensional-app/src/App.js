import React, { Component }from 'react';
import './App.css';

// transformar o componente App.js em um componente de classe,
class App extends Component {
  constructor(props){
    super(props);
    // definir nosso estado inicial local, para armazenar nele os dados que a API retornará. 
    this.state = {
        characters: [], // personagens
    };
  }

  // podemos fazer, em seguida, a requisição
  // fetchCharacters = () => {
  //   fetch('https://rickandmortyapi.com/api/character')
  //   .then(response => response.json())
  //   .then(data => {
  //     this.setState({characters: data.results})
  //     // chave 'results' tem as infs (retorno) q queremos da API (documentação da API)
  //     console.log(this.state.characters) //só funcionou após chamar a função no método componentDidMount
  //   })
  // }

  // usando async/await
  fetchCharacters = async () => {
    const requestReturn = await fetch('https://rickandmortyapi.com/api/character')
    const requestObject = await requestReturn.json()
    // console.log(requestObject.results);
    // const data = requestObject.results;    
    this.setState({
      characters: requestObject.results,
    })
  }

  componentDidMount() {
    this.fetchCharacters();
  }

  // colocar um título para ser exibido na página
  render() {
    const { characters } = this.state;
    return (
      <div className="App">
        <h1>
          Ricky and Morty Characters:
        </h1>
        {/* desestruturação no estado e fazer um .map para iterar o array e renderizá-lo na tela */}
        <div className="body">
          {characters.map(({ name, image }) => {
            return (
              <div className="container" key={name}>
                <h3>{name}</h3>
                <img src={image} alt={name}/>
              </div>
            )
          })}
        </div>
      </div>
    );
  }
}
//Outro detalhe importante aqui é o uso da key , que deve ser um identificador único, como se fosse um ID para cada item da lista iterada. Lembre-se: a função das keys é ajudar o React a identificar quais itens sofreram alterações para que o React não precise renderizar novamente toda a lista novamente e sim apenas se preocupar com a parte modificada.

export default App;