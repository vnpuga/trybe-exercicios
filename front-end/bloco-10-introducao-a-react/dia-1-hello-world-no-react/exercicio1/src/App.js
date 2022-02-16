// import logo from './logo.svg';
import './App.css';

//https://pt-br.reactjs.org/docs/reconciliation.html#recursing-on-children
// o link acima fala sobre o key abaixo
const Task = (value) => {
  return (
    <li key={value}>{value}</li>
  );
}

const tarefas = ['praticar yoga', 'limpar a casa', 'cuidar dos cachorros', 'estudar', 'preparar refeições'];

function App() {
  return (
    <ul>{tarefas.map((tarefa) => Task(tarefa))}</ul>
  );
}

export default App;
