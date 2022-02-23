import React from 'react';

function handleClickOne() {
  console.log('clicou adicionar')
}

function handleClickTwo() {
  console.log('clicou remover')
}

function handleClickThree() {
  console.log('clicou concluir')
}

class HandleClick extends React.Component{
  render () {
    return (
      <div>
        <button onClick={handleClickOne} >Adicionar</button>
        <button onClick={handleClickTwo} >Remover</button>
        <button onClick={handleClickThree} >Concluir</button>
      </div>
    )
  }
}

export default HandleClick;