import React from "react";

class NomeAge extends React.Component {
  render() {
    /* A função que altera o estado do componente pai chega
       ao componente filho via `props`! 
       Assim como os this.state (estados) tb chegam via props */
    const { nameValue, idadeValue, handleChange } = this.props;
    return (
      <div>
        <label> 
            Nome
            <input name="nome" type="text" value={nameValue} onChange={handleChange}/>
          </label>
          <label> 
            Idade
            <input name="idade" type="number" value={idadeValue} onChange={handleChange}/>
          </label>
      </div>
    )
  }
}

export default NomeAge;