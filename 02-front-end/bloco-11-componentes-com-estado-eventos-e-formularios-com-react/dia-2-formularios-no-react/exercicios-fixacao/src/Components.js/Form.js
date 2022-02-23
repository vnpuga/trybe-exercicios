import React from "react";

class Form extends React.Component {
  render () {
    return (
      <form>
        <label>
          Conte um pouco sobre você!
          <textarea name="sobreVoce" />
        </label>
        <input name="idade" type="number" />
        <input name="" />
      </form>
    )
  }
}

export default Form;