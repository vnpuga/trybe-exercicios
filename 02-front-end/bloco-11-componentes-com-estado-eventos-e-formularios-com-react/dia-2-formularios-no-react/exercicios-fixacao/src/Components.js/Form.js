import React from "react";
import NomeAge from "./NomeAge";

class Form extends React.Component {
  constructor() {
    super();

    this.handleChange = this.handleChange.bind(this);

    // O componente pai é o dono do estado!
    this.state = {
      nome: '',
      idade: 0,
      sobreVoce: '',
      moduloAtual: '',
      trabalhaComProgramacao: false,
    };
  }

   /* A função de alterar o estado é definida no componente pai*/
  handleChange({ target }) {
    const { name } = target;
    const value = (target.type === 'checkbox') ? target.checked : target.value;

    this.setState({
      [name]: value,
    });
  }
  
  render () {
    const { nome, idade, sobreVoce, moduloAtual, trabalhaComProgramacao } = this.state;
    return (
      <form>
        <fieldset>
        {/* O componente filho recebe a função de alterar estado do pai via `props`,
     na forma de uma callback;*/}
        {/* O componente filho tb recebe via props o this.state - o estado do pai */}
          <NomeAge nameValue={ nome } idadeValue={ idade } handleChange={this.handleChange} />
          <label>
            Conte um pouco sobre você!
            <textarea name="sobreVoce" value={sobreVoce} onChange={this.handleChange} />
          </label>
          <label>
            Selecione o módulo que você está estudando
            <select name="moduloAtual" value={moduloAtual} onChange={this.handleChange}>
              <option value="fundamentos">Fundamentos</option>
              <option value="front-end">Front-end</option>
              <option value="back-end">Back-end</option>
              <option value="ciencia-da-computacao">Ciência da computação</option>
            </select>
          </label>
          <label>
            Já trabalha com programação? Se sim, marque o campo ao lado:
            <input 
              name="trabalhaComProgramacao" 
              type="checkbox" 
              value={trabalhaComProgramacao} 
              onChange={this.handleChange}/>
          </label> 
          <label>
            <input type='file' />
          </label>       
        </fieldset>
      </form>
    )
  }
}

export default Form;