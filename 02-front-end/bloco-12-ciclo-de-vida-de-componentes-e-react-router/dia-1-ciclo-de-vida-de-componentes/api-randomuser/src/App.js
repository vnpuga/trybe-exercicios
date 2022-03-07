import React from 'react';
import './App.css';
import Loading from './Components/Loading';
import PersonCard from './Components/PersonCard';

class App extends React.Component {
  constructor() {
    super()

    this.fetchUsers = this.fetchUsers.bind(this);
    this.getUserElements = this.getUserElements.bind(this);

  // definir nosso estado inicial, para armazenar nele os dados que a API retornará. 
  // Começamos com o loading como true, pois queremos que ele exiba a nossa mensagem de "carregando" 
  // enquanto não renderizamos a primeira tela. Já o person, setamos como um array vázio, pois ele
  // ira receber a nossa API.
    this.state = {
      loading: true,
      person: [], 
    }
  }

  // atribuimos como false o loading, pois uma vez que quando a página é renderizada, 
  // não teremos mais a mensagem de "carregando".
  async fetchUsers() {
    const request = await fetch('https://api.randomuser.me/')
    const response = await request.json()  
    console.log(response);
    this.setState({
      loading: false,
      person: response.results,
    })
    console.log(this.state.person);
  }


  // Como estudamos, o componentDidMount vai disparar ações após o componenete ser inserido no DOM, 
  // por isso dizemos que é o ideal para realizar requisições.
  componentDidMount() {
    this.fetchUsers();
  }


  // o shoudComponentUptade irá verificar se a pessoa renderizada pela API tem mais de 50 anos
  // e com isso, irá autorizar se o componente atualiza ou não. Caso não atualize,
  // uma mensagem de "carregando..." será exibida na tela. Caso ocorra essa situação, dê
  // um console.log no nextState e verifique a idade da pessoa que é trazida pela API.
  shouldComponentUpdate(_nextProps, nextState) {
    // console.log(nextState);
    const AGE = 50;
    if (nextState.person[0].dob.age > AGE) {
      return false;
    }
    return true;
  }


  // Considerando que a API retorna um array de objetos,
  // a função abaixo foi criada para extrair extrair os dados que precisamos e atribuir
  // esses dado a suas respectivas keys.
  getUserElements(user) {
    return {
      name: `${user.name.first} ${user.name.last}`,
      email: user.email,
      age: user.dob.age,
      image: user.picture.thumbnail,
    };
  }

  render() {
    const { person, loading } = this.state;
    // Condição criada para verificar se o estado de loading for true, irá trazer
    // o componente de loading com a mensagem de "carregando..."
    if(loading) return <Loading />

    return(
    // Para renderizar as informações que precisamos, foi feito um map que trás o componente de
    // PersonCard, que contém as informações com nome, email, idade e a foto.
    // Passamos como props a função de getUserElements que retonar um objeto com as informações da
    // pessoa e como parametro da função, passamos o currentePerson.
    <div className="App">
      {person.map((currentPerson) => (
        <PersonCard key={currentPerson.name.first} person={this.getUserElements(currentPerson)}/>
      ))}
    </div>
    )
  };
}

export default App;
