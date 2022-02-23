import React from 'react';

class HandleClickRefatored3 extends React.Component{
  constructor() {
    super()
    this.state = {
      clicksBtnOne: 0,
      clicksBtnTwo: 0,
      clicksBtnThree: 0,
    }

    this.handleClickOne = this.handleClickOne.bind(this)
    this.handleClickTwo = this.handleClickTwo.bind(this)
    this.handleClickThree = this.handleClickThree.bind(this)
  }

  // A cor atual do botão deve ser impressa num console.log() de dentro da função do evento que lida com o clique. Faça isso acontecer!
  handleClickOne() {
    this.setState(({ clicksBtnOne }) => ({
      clicksBtnOne: clicksBtnOne + 1,
    }), () => {
      console.log(`Botão 1 ${this.getButtonColor(this.state.clicksBtnOne)}`);
    });
  }
  
  handleClickTwo() {
    this.setState(({ clicksBtnTwo }) => ({
      clicksBtnTwo: clicksBtnTwo + 1,
    }), () => {
      console.log(`Botão 2 ${this.getButtonColor(this.state.clicksBtnTwo)}`);
    });
  }
  
  handleClickThree() {
    this.setState(({ clicksBtnThree }) => ({
      clicksBtnThree: clicksBtnThree + 1,
    }), () => {
      // Aqui imprimimos a cor no console após o setState atualizar
      // a quantidade de clicks no botão
      console.log(`Botão 3 ${this.getButtonColor(this.state.clicksBtnThree)}`);
    });
  }

  getButtonColor(num) {
      // Essa função contém um ternário que realiza a lógica para mudarmos
      // a cor do botão para verde quando for um número par
    return num % 2 === 0 ? 'green' : 'white';
  }

  render () {
    const { clicksBtnOne, clicksBtnTwo, clicksBtnThree } = this.state;
    return (
      <div>
        <button 
          onClick={this.handleClickOne}
            /* Para renderizarmos as cores, precisamos acrescentar a função
            que contém a nossa lógica ao "inline style", passando o estado
            correspondente como parâmetro */
            style={{ backgroundColor: this.getButtonColor(clicksBtnOne) }}
          >
            Botão 1 | Count = { clicksBtnOne }
        </button>
        
        <button 
          onClick={this.handleClickTwo}
          style={{ backgroundColor: this.getButtonColor(clicksBtnTwo) }}
        >
          Botão 2 | Count = { clicksBtnTwo }
        </button>

        <button 
          onClick={this.handleClickThree} 
          style={{ backgroundColor: this.getButtonColor(clicksBtnThree) }}
        >
            Botão 3 | Count = { clicksBtnThree }
        </button>

      </div>
    )
  }
}

export default HandleClickRefatored3;