import React from 'react';

class HandleClickRefatored extends React.Component{
  constructor() {
    super()
    // A função abaixo vincula "manualmente" o `this` à nossa função
    this.handleClickOne = this.handleClickOne.bind(this)
    this.handleClickTwo = this.handleClickTwo.bind(this)
    this.handleClickThree = this.handleClickThree.bind(this)
  }

  handleClickOne() {
    /* Agora esse log retorna o objeto `this`, já acessível para nossa função!
    Com isso, podemos acessar as `props`, estado do componente (ainda vamos ver como!)
    e tudo o mais daqui de dentro */
    console.log('"this" do botão 1 :', this)
  }
  
  handleClickTwo() {
    console.log('"this" do botão 2 :', this)
  }
  
  handleClickThree() {
    console.log('"this" do botão 3 :', this)
  }

  render () {
    return (
      <div>
        <button onClick={this.handleClickOne} >Adicionar</button>
        <button onClick={this.handleClickTwo} >Remover</button>
        <button onClick={this.handleClickThree} >Concluir</button>
      </div>
    )
  }
}

export default HandleClickRefatored;