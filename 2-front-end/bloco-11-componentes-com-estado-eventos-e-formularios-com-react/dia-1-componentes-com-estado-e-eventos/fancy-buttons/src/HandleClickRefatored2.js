import React from 'react';

class HandleClickRefatored2 extends React.Component{
  constructor() {
    super()
    /* Para definir um estado inicial ao componente, a ser definido
    no momento em que o componente for colocado na tela, faça uma atribuição
    de um objeto à chave `state` do `this`, ou seja, ao `this.state`*/
    this.state = {
      clicksBtnOne: 0,
      clicksBtnTwo: 0,
      clicksBtnThree: 0,
    }

    this.handleClickOne = this.handleClickOne.bind(this)
    this.handleClickTwo = this.handleClickTwo.bind(this)
    this.handleClickThree = this.handleClickThree.bind(this)
  }

  handleClickOne() {
     /* Passando uma callback à função setState, que recebe de parâmetros
    o estado anterior e as props do componente, você garante que as atualizações
    do estado acontecerão uma depois da outra! */
    this.setState((estadoAnterior, _props) => ({
      clicksBtnOne: estadoAnterior.clicksBtnOne + 1
    }))
  }
  
  handleClickTwo() {
    this.setState((estadoAnterior, _props) => ({
      clicksBtnTwo: estadoAnterior.clicksBtnTwo + 1
    }))
  }
  
  handleClickThree() {
    this.setState((estadoAnterior, _props) => ({
      clicksBtnThree: estadoAnterior.clicksBtnThree + 1
    }))
  }

  render () {
    return (
      <div>
        <button onClick={this.handleClickOne} >{this.state.clicksBtnOne}</button>
        <button onClick={this.handleClickTwo} >{this.state.clicksBtnTwo}</button>
        <button onClick={this.handleClickThree} >{this.state.clicksBtnThree}</button>
      </div>
    )
  }
}

export default HandleClickRefatored2;